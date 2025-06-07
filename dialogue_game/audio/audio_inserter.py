import json
import os
import shutil
import subprocess
from datetime import datetime
import tkinter as tk
from tkinter import ttk, scrolledtext, messagebox
import winsound
import threading

class AudioMapperGUI:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Hannah's Audio Mapper")
        self.root.geometry("1100x800")
        self.root.configure(bg='#f0f0f0')
        
        self.ukrainian_data = None
        self.hannah_dialogues = []
        self.audio_files = []
        
        self.setup_gui()
        self.load_data()
        
    def setup_gui(self):
        # Main frame with better styling
        main_frame = ttk.Frame(self.root, padding="20")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Title with professional styling
        title_label = ttk.Label(main_frame, text="Hannah's Dialogue Audio Mapping Tool", 
                               font=("Segoe UI", 20, "bold"))
        title_label.grid(row=0, column=0, columnspan=2, pady=(0, 30))
        
        # Info frame with better styling
        info_frame = ttk.Frame(main_frame, relief="solid", borderwidth=1, padding=15)
        info_frame.grid(row=1, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=(0, 20))
        
        self.info_label = ttk.Label(info_frame, text="Loading...", font=("Segoe UI", 12, "bold"))
        self.info_label.pack()
        
        # Create scrollable frame for dialogue items with better styling
        scroll_container = ttk.Frame(main_frame, relief="sunken", borderwidth=1)
        scroll_container.grid(row=2, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        canvas = tk.Canvas(scroll_container, bg='white', highlightthickness=0)
        scrollbar = ttk.Scrollbar(scroll_container, orient="vertical", command=canvas.yview)
        self.scrollable_frame = ttk.Frame(canvas)

        self.scrollable_frame.bind(
            "<Configure>",
            lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
        )

        canvas.create_window((0, 0), window=self.scrollable_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)

        # Bind mousewheel to canvas
        def _on_mousewheel(event):
            canvas.yview_scroll(int(-1*(event.delta/120)), "units")
        canvas.bind("<MouseWheel>", _on_mousewheel)

        canvas.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")
        
        # Audio controls frame with better styling
        audio_frame = ttk.LabelFrame(main_frame, text="Audio Controls", padding=15)
        audio_frame.grid(row=3, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=(20, 0))

        stop_btn = ttk.Button(audio_frame, text="⏹ Stop All Audio", command=self.stop_audio, width=20)
        stop_btn.pack()
        
        # Buttons frame with better spacing
        button_frame = ttk.Frame(main_frame)
        button_frame.grid(row=4, column=0, columnspan=2, pady=(30, 0))
        
        self.apply_button = ttk.Button(button_frame, text="✅ Apply All Changes", 
                                      command=self.apply_changes, width=20)
        self.apply_button.pack(side=tk.LEFT, padx=(0, 15))
        
        self.cancel_button = ttk.Button(button_frame, text="❌ Cancel", 
                                       command=self.root.quit, width=15)
        self.cancel_button.pack(side=tk.LEFT)
        
        # Configure grid weights
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(0, weight=1)
        main_frame.rowconfigure(2, weight=1)
    
    def play_audio(self, audio_file):
        try:
            # Get the directory where this script is located
            script_dir = os.path.dirname(os.path.abspath(__file__))
            audio_dir = os.path.join(os.path.dirname(script_dir), 'audio', 'ua_1')
            audio_path = os.path.join(audio_dir, audio_file)
            
            # Play audio in a separate thread so GUI doesn't freeze
            def play_in_thread():
                winsound.PlaySound(audio_path, winsound.SND_FILENAME)
            
            threading.Thread(target=play_in_thread, daemon=True).start()
        except Exception as e:
            messagebox.showerror("Audio Error", f"Could not play {audio_file}: {str(e)}")

    def stop_audio(self):
        try:
            winsound.PlaySound(None, winsound.SND_PURGE)
        except:
            pass
    
    def load_data(self):
        try:
            # Get the directory where this script is located
            script_dir = os.path.dirname(os.path.abspath(__file__))
            
            # Load ukrainian.json (in languages folder)
            ukrainian_path = os.path.join(os.path.dirname(script_dir), 'languages', 'ukrainian.json')
            with open(ukrainian_path, 'r', encoding='utf-8') as f:
                self.ukrainian_data = json.load(f)
            
            # Find Hannah's dialogues in file order (preserve original order)
            self.hannah_dialogues = []
            for node_id, node_data in self.ukrainian_data.items():
                if isinstance(node_data, dict) and node_data.get('speaker') == 'hannah':
                    self.hannah_dialogues.append({
                        'node_id': node_id,
                        'text': node_data.get('text', ''),
                        'data': node_data
                    })
            
            # Get audio files from ua_1 folder (go up one level to dialogue_game, then into audio/ua_1)
            audio_dir = os.path.join(os.path.dirname(script_dir), 'audio', 'ua_1')
            if os.path.exists(audio_dir):
                # Get all .wav files and sort them numerically
                wav_files = [f for f in os.listdir(audio_dir) if f.endswith('.wav')]
                # Sort by the number in ua-XX.wav with robust error handling
                def sort_key(filename):
                    try:
                        # Extract number from ua-XX.wav format
                        return int(filename.split('-')[1].split('.')[0])
                    except (IndexError, ValueError):
                        # If parsing fails, use filename for sorting
                        return 999999  # Put non-standard names at the end

                self.audio_files = sorted(wav_files, key=sort_key)
            else:
                self.audio_files = []
                messagebox.showerror("Error", f"Audio directory 'audio/ua_1' not found!")
                return
            
            self.display_mapping()
            
        except FileNotFoundError:
            messagebox.showerror("Error", "ukrainian.json file not found in languages folder!")
        except json.JSONDecodeError:
            messagebox.showerror("Error", "Invalid JSON format in ukrainian.json!")
        except Exception as e:
            messagebox.showerror("Error", f"Error loading data: {str(e)}")
    
    def display_mapping(self):
        # Clear existing widgets
        for widget in self.scrollable_frame.winfo_children():
            widget.destroy()
        
        # Update info label
        status = "✅ READY" if len(self.hannah_dialogues) == len(self.audio_files) else "⚠️  WARNING"
        self.info_label.config(text=f"{status} - {len(self.hannah_dialogues)} Hannah dialogues | {len(self.audio_files)} audio files")
        
        # Header
        header_frame = ttk.Frame(self.scrollable_frame)
        header_frame.pack(fill=tk.X, padx=20, pady=(10, 20))
        
        ttk.Label(header_frame, text="Audio Mapping Preview", font=("Segoe UI", 16, "bold")).pack()
        
        if len(self.hannah_dialogues) != len(self.audio_files):
            warning_frame = ttk.Frame(self.scrollable_frame)
            warning_frame.pack(fill=tk.X, padx=20, pady=(0, 15))
            
            warning_label = ttk.Label(warning_frame, 
                                    text=f"⚠️ Count Mismatch: {len(self.hannah_dialogues)} dialogues vs {len(self.audio_files)} audio files", 
                                    font=("Segoe UI", 11, "bold"))
            warning_label.pack()
        
        # Column headers
        header_row = ttk.Frame(self.scrollable_frame)
        header_row.pack(fill=tk.X, padx=20, pady=(0, 10))
        
        ttk.Label(header_row, text="Play", font=("Segoe UI", 10, "bold"), width=8).pack(side=tk.LEFT, padx=(0, 15))
        ttk.Label(header_row, text="ID", font=("Segoe UI", 10, "bold"), width=8).pack(side=tk.LEFT, padx=(0, 15))
        ttk.Label(header_row, text="Dialogue Text", font=("Segoe UI", 10, "bold")).pack(side=tk.LEFT, fill=tk.X, expand=True)
        
        ttk.Separator(self.scrollable_frame, orient='horizontal').pack(fill=tk.X, padx=20, pady=(5, 10))
        
        # Show each dialogue with play button
        for i, dialogue in enumerate(self.hannah_dialogues):
            # Main item container with background
            item_container = ttk.Frame(self.scrollable_frame)
            item_container.pack(fill=tk.X, padx=20, pady=3)
            
            item_frame = ttk.Frame(item_container, relief="solid", borderwidth=1, padding=15)
            item_frame.pack(fill=tk.X)
            
            # Top row with play button, ID, and status
            top_row = ttk.Frame(item_frame)
            top_row.pack(fill=tk.X, pady=(0, 8))
            
            if i < len(self.audio_files):
                audio_file = self.audio_files[i]
                
                # Play button - larger and more prominent
                play_btn = ttk.Button(top_row, text="▶ PLAY", width=10,
                                     command=lambda af=audio_file: self.play_audio(af))
                play_btn.pack(side=tk.LEFT, padx=(0, 15))
                
                status_color = "green"
                status_text = "✓ Ready"
            else:
                audio_file = "NO AUDIO FILE"
                
                # Disabled play button
                play_btn = ttk.Button(top_row, text="✗ NO AUDIO", width=10, state="disabled")
                play_btn.pack(side=tk.LEFT, padx=(0, 15))
                
                status_color = "red"
                status_text = "✗ Missing"
            
            # ID and Node info
            id_frame = ttk.Frame(top_row)
            id_frame.pack(side=tk.LEFT, padx=(0, 15))
            
            ttk.Label(id_frame, text=f"#{i+1:02d}", font=("Segoe UI", 12, "bold")).pack(anchor=tk.W)
            ttk.Label(id_frame, text=dialogue['node_id'], font=("Segoe UI", 9), foreground="gray").pack(anchor=tk.W)
            
            # Status indicator
            status_frame = ttk.Frame(top_row)
            status_frame.pack(side=tk.RIGHT)
            
            ttk.Label(status_frame, text=status_text, font=("Segoe UI", 10, "bold"), 
                     foreground=status_color).pack(anchor=tk.E)
            
            # Dialogue text
            text_frame = ttk.Frame(item_frame)
            text_frame.pack(fill=tk.X, pady=(0, 8))
            
            # Clean up text preview
            text_preview = dialogue['text'].strip()
            if len(text_preview) > 120:
                text_preview = text_preview[:120] + "..."
            
            ttk.Label(text_frame, text=f'"{text_preview}"', 
                     font=("Segoe UI", 10), foreground="#333333", wraplength=600).pack(anchor=tk.W)
            
            # Audio file info
            audio_frame = ttk.Frame(item_frame)
            audio_frame.pack(fill=tk.X)
            
            ttk.Label(audio_frame, text="Audio File:", font=("Segoe UI", 9, "bold")).pack(side=tk.LEFT)
            ttk.Label(audio_frame, text=audio_file, font=("Segoe UI", 9), 
                     foreground="blue" if i < len(self.audio_files) else "red").pack(side=tk.LEFT, padx=(5, 0))
    
    def apply_changes(self):
        # Confirm with user
        result = messagebox.askyesno("Confirm Changes", 
                                   f"This will:\n"
                                   f"• Create backup of ukrainian.json\n"
                                   f"• Convert {len(self.audio_files)} WAV files to MP3\n"
                                   f"• Delete all WAV files\n"
                                   f"• Add audio fields to JSON\n\n"
                                   f"Continue?")
        
        if not result:
            return
        
        try:
            # Show progress
            self.apply_button.config(text="Working...", state="disabled")
            self.root.update()
            
            # Step 1: Create backup
            self.create_backup()
            
            # Step 2: Convert audio files
            self.convert_audio()
            
            # Step 3: Modify JSON
            self.modify_json()
            
            messagebox.showinfo("Success!", 
                              f"✅ All changes applied successfully!\n\n"
                              f"• Backup created in 'backups/' folder\n"
                              f"• {len(self.audio_files)} files converted to MP3\n"
                              f"• ukrainian.json updated with audio fields")
            
            self.root.quit()
            
        except Exception as e:
            messagebox.showerror("Error", f"❌ Error applying changes:\n{str(e)}")
            self.apply_button.config(text="✅ Apply Changes", state="normal")
    
    def create_backup(self):
        # Get the directory where this script is located
        script_dir = os.path.dirname(os.path.abspath(__file__))
        
        # Create backups folder in dialogue_game directory
        backup_dir = os.path.join(os.path.dirname(script_dir), 'backups')
        if not os.path.exists(backup_dir):
            os.makedirs(backup_dir)
        
        # Create backup with timestamp
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_path = os.path.join(backup_dir, f'ukrainian_backup_{timestamp}.json')
        ukrainian_path = os.path.join(os.path.dirname(script_dir), 'languages', 'ukrainian.json')
        shutil.copy2(ukrainian_path, backup_path)
        print(f"✅ Backup created: {backup_path}")
    
    def convert_audio(self):
        # Get the directory where this script is located
        script_dir = os.path.dirname(os.path.abspath(__file__))
        audio_dir = os.path.join(os.path.dirname(script_dir), 'audio', 'ua_1')
        
        # Check if ffmpeg is available
        try:
            subprocess.run(['ffmpeg', '-version'], capture_output=True, check=True)
        except (subprocess.CalledProcessError, FileNotFoundError):
            messagebox.showerror("Error", 
                               "❌ FFmpeg not found!\n\n"
                               "Please install FFmpeg:\n"
                               "1. Download from https://ffmpeg.org/download.html\n"
                               "2. Add to PATH\n"
                               "3. Restart terminal and try again")
            raise Exception("FFmpeg not found")
        
        for i, audio_file in enumerate(self.audio_files):
            wav_path = os.path.join(audio_dir, audio_file)
            mp3_path = os.path.join(audio_dir, audio_file.replace('.wav', '.mp3'))
            
            # Convert WAV to MP3 using ffmpeg
            print(f"Converting {i+1}/{len(self.audio_files)}: {audio_file}")
            
            try:
                subprocess.run([
                    'ffmpeg', 
                    '-i', wav_path,          # Input WAV file
                    '-codec:a', 'mp3',       # Audio codec
                    '-b:a', '192k',          # Bitrate
                    '-y',                    # Overwrite output file if exists
                    mp3_path                 # Output MP3 file
                ], capture_output=True, check=True)
                
                # Delete WAV file after successful conversion
                os.remove(wav_path)
                print(f"✅ {audio_file} → {audio_file.replace('.wav', '.mp3')}")
                
            except subprocess.CalledProcessError as e:
                print(f"❌ Error converting {audio_file}: {e}")
                raise Exception(f"Failed to convert {audio_file}")
    
    def modify_json(self):
        # Add audio fields to Hannah's dialogues
        modified_count = 0
        
        for i, dialogue in enumerate(self.hannah_dialogues):
            if i < len(self.audio_files):
                mp3_file = self.audio_files[i].replace('.wav', '.mp3')
                dialogue['data']['audio'] = mp3_file
                modified_count += 1
                print(f"✅ Added audio field to {dialogue['node_id']}: {mp3_file}")
        
        # Save modified JSON with nice formatting
        script_dir = os.path.dirname(os.path.abspath(__file__))
        ukrainian_path = os.path.join(os.path.dirname(script_dir), 'languages', 'ukrainian.json')
        with open(ukrainian_path, 'w', encoding='utf-8') as f:
            json.dump(self.ukrainian_data, f, ensure_ascii=False, indent=4)
        
        print(f"✅ JSON updated - {modified_count} dialogues now have audio fields")
    
    def run(self):
        self.root.mainloop()

if __name__ == "__main__":
    try:
        app = AudioMapperGUI()
        app.run()
    except Exception as e:
        print(f"❌ Error starting application: {e}")