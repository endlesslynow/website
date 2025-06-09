import json
import os
import shutil
import subprocess
from datetime import datetime
import tkinter as tk
from tkinter import ttk, scrolledtext, messagebox, filedialog
import winsound
import threading

class AudioMapperGUI:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Dialogue Audio Mapper")
        self.root.geometry("1300x800")
        self.root.configure(bg='#f0f0f0')
        
        self.dialogue_data = None
        self.filtered_dialogues = []
        self.audio_files = []
        self.speakers = []
        self.speaker_vars = {}
        self.selected_json_file = tk.StringVar()
        self.selected_audio_folder = tk.StringVar()
        
        self.setup_gui()
        self.load_available_options()
        
    def setup_gui(self):
        # Configure root window
        self.root.configure(bg='#2b2b2b')
        
        # Create modern style
        style = ttk.Style()
        style.theme_use('clam')
        
        # Configure modern colors
        style.configure('Compact.TFrame', background='#363636', relief='flat', borderwidth=1)
        style.configure('Main.TFrame', background='#2b2b2b')
        
        # Main container - NO PADDING
        main_frame = ttk.Frame(self.root, style='Main.TFrame')
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # TINY compact controls at top
        controls_frame = ttk.Frame(main_frame, style='Compact.TFrame', padding=10)
        controls_frame.grid(row=0, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=(0, 5))
        
        # File selection - HORIZONTAL AND COMPACT
        file_row = ttk.Frame(controls_frame, style='Compact.TFrame')
        file_row.pack(fill=tk.X, pady=(0, 5))
        
        ttk.Label(file_row, text="Script:", font=('Segoe UI', 9), 
                 background='#363636', foreground='#ffffff').pack(side=tk.LEFT, padx=(0, 5))
        self.json_combo = ttk.Combobox(file_row, textvariable=self.selected_json_file, 
                                      state="readonly", width=20, font=('Segoe UI', 9))
        self.json_combo.pack(side=tk.LEFT, padx=(0, 20))
        self.json_combo.bind('<<ComboboxSelected>>', self.on_json_selected)
        
        ttk.Label(file_row, text="Audio:", font=('Segoe UI', 9), 
                 background='#363636', foreground='#ffffff').pack(side=tk.LEFT, padx=(0, 5))
        self.audio_combo = ttk.Combobox(file_row, textvariable=self.selected_audio_folder, 
                                       state="readonly", width=15, font=('Segoe UI', 9))
        self.audio_combo.pack(side=tk.LEFT, padx=(0, 20))
        self.audio_combo.bind('<<ComboboxSelected>>', self.on_audio_selected)
        
        # Status
        self.info_label = ttk.Label(file_row, text="⚡ Configure files...", 
                                   font=('Segoe UI', 9, 'bold'), background='#363636', foreground='#4CAF50')
        self.info_label.pack(side=tk.LEFT, padx=(20, 0))
        
        # Speaker checkboxes - HORIZONTAL
        speaker_row = ttk.Frame(controls_frame, style='Compact.TFrame')
        speaker_row.pack(fill=tk.X, pady=(0, 5))
        
        ttk.Label(speaker_row, text="Speakers:", font=('Segoe UI', 9), 
                 background='#363636', foreground='#ffffff').pack(side=tk.LEFT, padx=(0, 10))
        self.speaker_checkboxes_frame = ttk.Frame(speaker_row, style='Compact.TFrame')
        self.speaker_checkboxes_frame.pack(side=tk.LEFT, fill=tk.X, expand=True)
        
        # Buttons - HORIZONTAL
        button_row = ttk.Frame(controls_frame, style='Compact.TFrame')
        button_row.pack(fill=tk.X)
        
        stop_btn = tk.Button(button_row, text="⏹ STOP", font=('Segoe UI', 9), 
                           bg='#666666', fg='white', width=8, command=self.stop_audio)
        stop_btn.pack(side=tk.LEFT, padx=(0, 10))
        
        self.apply_button = tk.Button(button_row, text="🚀 PROCESS & APPLY", font=('Segoe UI', 9, 'bold'),
                                    bg='#4CAF50', fg='white', width=20, command=self.apply_changes)
        self.apply_button.pack(side=tk.LEFT, padx=(0, 10))
        
        self.cancel_button = tk.Button(button_row, text="✕ CANCEL", font=('Segoe UI', 9),
                                     bg='#F44336', fg='white', width=10, command=self.root.quit)
        self.cancel_button.pack(side=tk.LEFT)
        
        # DIALOGUE SECTION - ENTIRE REST OF SCREEN
        dialogue_frame = tk.Frame(main_frame, bg='#1e1e1e', relief='sunken', bd=2)
        dialogue_frame.grid(row=1, column=0, columnspan=2, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Header for dialogue
        header = tk.Label(dialogue_frame, text="🎵 DIALOGUE & AUDIO MAPPING", 
                         font=('Segoe UI', 14, 'bold'), bg='#1e1e1e', fg='#ffffff')
        header.pack(pady=5)
        
        # Scrollable dialogue area - FULL SCREEN
        canvas = tk.Canvas(dialogue_frame, bg='#2b2b2b', highlightthickness=0, borderwidth=0)
        scrollbar = ttk.Scrollbar(dialogue_frame, orient="vertical", command=canvas.yview)
        self.scrollable_frame = tk.Frame(canvas, bg='#2b2b2b')

        self.scrollable_frame.bind("<Configure>", lambda e: canvas.configure(scrollregion=canvas.bbox("all")))
        canvas.create_window((0, 0), window=self.scrollable_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)

        def _on_mousewheel(event):
            canvas.yview_scroll(int(-1*(event.delta/120)), "units")
        canvas.bind("<MouseWheel>", _on_mousewheel)

        canvas.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")
        
        # Configure grid weights - DIALOGUE GETS EVERYTHING
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(0, weight=1)
        main_frame.rowconfigure(0, weight=0)  # Controls get minimal space
        main_frame.rowconfigure(1, weight=1)  # Dialogue gets ALL space
        
        # Force initial display
        self.display_mapping()
    
    def play_audio(self, audio_file):
        try:
            # Get the directory where this script is located
            script_dir = os.path.dirname(os.path.abspath(__file__))
            audio_dir = os.path.join(os.path.dirname(script_dir), 'audio', self.selected_audio_folder.get())
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
    
    def load_available_options(self):
        try:
            script_dir = os.path.dirname(os.path.abspath(__file__))
            base_dir = os.path.dirname(script_dir)
            
            # Load available JSON files
            languages_dir = os.path.join(base_dir, 'languages')
            if os.path.exists(languages_dir):
                json_files = [f for f in os.listdir(languages_dir) if f.endswith('.json')]
                self.json_combo['values'] = json_files
            
            # Load available audio folders
            audio_dir = os.path.join(base_dir, 'audio')
            if os.path.exists(audio_dir):
                audio_folders = [f for f in os.listdir(audio_dir) if os.path.isdir(os.path.join(audio_dir, f))]
                self.audio_combo['values'] = audio_folders
                
        except Exception as e:
            messagebox.showerror("Error", f"Error loading options: {str(e)}")
    
    def load_dialogue_data(self):
        if not self.selected_json_file.get():
            return
            
        try:
            script_dir = os.path.dirname(os.path.abspath(__file__))
            json_path = os.path.join(os.path.dirname(script_dir), 'languages', self.selected_json_file.get())
            
            with open(json_path, 'r', encoding='utf-8') as f:
                self.dialogue_data = json.load(f)
            
            # Extract all unique speakers
            speakers = set()
            for node_data in self.dialogue_data.values():
                if isinstance(node_data, dict) and 'speaker' in node_data:
                    speakers.add(node_data['speaker'])
            
            self.speakers = sorted(list(speakers))
            self.setup_speaker_checkboxes()
            
        except Exception as e:
            messagebox.showerror("Error", f"Error loading dialogue data: {str(e)}")
    
    def load_audio_files(self):
        if not self.selected_audio_folder.get():
            return
            
        try:
            script_dir = os.path.dirname(os.path.abspath(__file__))
            audio_dir = os.path.join(os.path.dirname(script_dir), 'audio', self.selected_audio_folder.get())
            
            if os.path.exists(audio_dir):
                wav_files = [f for f in os.listdir(audio_dir) if f.endswith('.wav')]
                def sort_key(filename):
                    try:
                        return int(filename.split('-')[1].split('.')[0])
                    except (IndexError, ValueError):
                        return 999999
                self.audio_files = sorted(wav_files, key=sort_key)
            else:
                self.audio_files = []
                
        except Exception as e:
            messagebox.showerror("Error", f"Error loading audio files: {str(e)}")
    
    def setup_speaker_checkboxes(self):
        # Clear existing checkboxes
        for widget in self.speaker_checkboxes_frame.winfo_children():
            widget.destroy()
        
        self.speaker_vars = {}
        
        # Create COMPACT horizontal checkboxes
        for i, speaker in enumerate(self.speakers):
            var = tk.BooleanVar(value=True)  # Default to checked
            self.speaker_vars[speaker] = var
            
            # Create compact checkbox
            cb = ttk.Checkbutton(self.speaker_checkboxes_frame, text=f"{speaker.title()}", 
                               variable=var, command=self.update_dialogue_filter)
            cb.pack(side=tk.LEFT, padx=(0, 15))
    
    def on_json_selected(self, event=None):
        self.load_dialogue_data()
        self.update_display()
    
    def on_audio_selected(self, event=None):
        self.load_audio_files()
        self.update_display()
    
    def update_dialogue_filter(self):
        if not self.dialogue_data:
            return
            
        selected_speakers = [speaker for speaker, var in self.speaker_vars.items() if var.get()]
        
        self.filtered_dialogues = []
        for node_id, node_data in self.dialogue_data.items():
            if isinstance(node_data, dict) and node_data.get('speaker') in selected_speakers:
                self.filtered_dialogues.append({
                    'node_id': node_id,
                    'text': node_data.get('text', ''),
                    'data': node_data
                })
        
        self.display_mapping()
    
    def update_display(self):
        if self.dialogue_data and self.speaker_vars:
            self.update_dialogue_filter()
    
    def display_mapping(self):
        # Clear existing widgets
        for widget in self.scrollable_frame.winfo_children():
            widget.destroy()
        
        # Update status
        if len(self.filtered_dialogues) == len(self.audio_files) and len(self.filtered_dialogues) > 0:
            status_text = f"🟢 READY TO PROCESS • {len(self.filtered_dialogues)} dialogues mapped to {len(self.audio_files)} audio files"
            status_style = 'Status.TLabel'
        elif len(self.filtered_dialogues) != len(self.audio_files):
            status_text = f"🟡 COUNT MISMATCH • {len(self.filtered_dialogues)} dialogues vs {len(self.audio_files)} audio files"
            status_style = 'Warning.TLabel'
        else:
            status_text = "⚡ Configure files and speakers above to begin"
            status_style = 'Info.TLabel'
            
        self.info_label.config(text=status_text, style=status_style)
        
        if not self.filtered_dialogues:
            # Show empty state
            empty_label = tk.Label(self.scrollable_frame, text="📋 No Dialogues Selected\n\nChoose a dialogue file and select speakers to view mappings", 
                                 font=('Segoe UI', 14), bg='#363636', fg='#888888', justify=tk.CENTER)
            empty_label.pack(expand=True, fill=tk.BOTH, pady=50)
            return
        
        # Show each dialogue with play button - VISIBLE AND FUNCTIONAL
        for i, dialogue in enumerate(self.filtered_dialogues):
            # Create item frame with visible border
            item_frame = tk.Frame(self.scrollable_frame, bg='#2b2b2b', relief='raised', bd=2)
            item_frame.pack(fill=tk.X, padx=10, pady=5)
            
            # Main row with all controls
            main_row = tk.Frame(item_frame, bg='#2b2b2b')
            main_row.pack(fill=tk.X, padx=10, pady=10)
            
            # Index number
            index_label = tk.Label(main_row, text=f"#{i+1:02d}", 
                                  font=('Segoe UI', 12, 'bold'), bg='#4CAF50', fg='white', width=4, height=2)
            index_label.pack(side=tk.LEFT, padx=(0, 10))
            
            # Play button
            if i < len(self.audio_files):
                audio_file = self.audio_files[i]
                play_btn = tk.Button(main_row, text="▶ PLAY", font=('Segoe UI', 10, 'bold'),
                                   bg='#4CAF50', fg='white', width=10, height=2,
                                   command=lambda af=audio_file: self.play_audio(af))
                status_color = '#4CAF50'
                status_text = '✓ READY'
            else:
                audio_file = "NO AUDIO"
                play_btn = tk.Button(main_row, text="✗ NO AUDIO", font=('Segoe UI', 10, 'bold'),
                                   bg='#666666', fg='white', width=10, height=2, state='disabled')
                status_color = '#F44336'
                status_text = '✗ MISSING'
            
            play_btn.pack(side=tk.LEFT, padx=(0, 10))
            
            # Content column
            content_frame = tk.Frame(main_row, bg='#2b2b2b')
            content_frame.pack(side=tk.LEFT, fill=tk.X, expand=True)
            
            # Node ID and Speaker
            info_row = tk.Frame(content_frame, bg='#2b2b2b')
            info_row.pack(fill=tk.X, pady=(0, 5))
            
            tk.Label(info_row, text=f"ID: {dialogue['node_id']}", 
                    font=('Segoe UI', 9, 'bold'), bg='#2b2b2b', fg='#CCCCCC').pack(side=tk.LEFT)
            
            speaker = dialogue['data'].get('speaker', 'Unknown')
            tk.Label(info_row, text=f"Speaker: {speaker.title()}", 
                    font=('Segoe UI', 9, 'bold'), bg='#2b2b2b', fg='#4CAF50').pack(side=tk.LEFT, padx=(20, 0))
            
            tk.Label(info_row, text=f"Audio: {audio_file}", 
                    font=('Segoe UI', 9), bg='#2b2b2b', fg=status_color).pack(side=tk.LEFT, padx=(20, 0))
            
            # Dialogue text
            text_preview = dialogue['text'].strip()
            if len(text_preview) > 80:
                text_preview = text_preview[:80] + "..."
            
            tk.Label(content_frame, text=f'"{text_preview}"', 
                    font=('Segoe UI', 11), bg='#2b2b2b', fg='#ffffff', 
                    wraplength=500, justify=tk.LEFT).pack(anchor=tk.W)
            
            # Status indicator on the right
            status_label = tk.Label(main_row, text=status_text, 
                                   font=('Segoe UI', 10, 'bold'), bg='#2b2b2b', fg=status_color)
            status_label.pack(side=tk.RIGHT, padx=(10, 0))
    
    def apply_changes(self):
        # Confirm with user
        result = messagebox.askyesno("Confirm Changes", 
                                   f"This will:\n"
                                   f"• Create backup of {self.selected_json_file.get()}\n"
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
                              f"• {self.selected_json_file.get()} updated with audio fields")
            
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
        filename = self.selected_json_file.get().replace('.json', '')
        backup_path = os.path.join(backup_dir, f'{filename}_backup_{timestamp}.json')
        json_path = os.path.join(os.path.dirname(script_dir), 'languages', self.selected_json_file.get())
        shutil.copy2(json_path, backup_path)
        print(f"✅ Backup created: {backup_path}")
    
    def convert_audio(self):
        # Get the directory where this script is located
        script_dir = os.path.dirname(os.path.abspath(__file__))
        audio_dir = os.path.join(os.path.dirname(script_dir), 'audio', self.selected_audio_folder.get())
        
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
        # Add audio fields to selected dialogues
        modified_count = 0
        
        for i, dialogue in enumerate(self.filtered_dialogues):
            if i < len(self.audio_files):
                mp3_file = self.audio_files[i].replace('.wav', '.mp3')
                dialogue['data']['audio'] = mp3_file
                modified_count += 1
                print(f"✅ Added audio field to {dialogue['node_id']}: {mp3_file}")
        
        # Save modified JSON with nice formatting
        script_dir = os.path.dirname(os.path.abspath(__file__))
        json_path = os.path.join(os.path.dirname(script_dir), 'languages', self.selected_json_file.get())
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(self.dialogue_data, f, ensure_ascii=False, indent=4)
        
        print(f"✅ JSON updated - {modified_count} dialogues now have audio fields")
    
    def run(self):
        self.root.mainloop()

if __name__ == "__main__":
    try:
        app = AudioMapperGUI()
        app.run()
    except Exception as e:
        print(f"❌ Error starting application: {e}")