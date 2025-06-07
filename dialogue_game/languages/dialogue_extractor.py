import tkinter as tk
from tkinter import ttk, filedialog, messagebox, scrolledtext
import json

class DialogueExtractor:
    def __init__(self, root):
        self.root = root
        self.root.title("Dialogue Extractor")
        self.root.geometry("800x600")
        
        self.dialogue_data = None
        self.speakers = []
        self.speaker_vars = {}
        
        self.setup_ui()
    
    def setup_ui(self):
        main_frame = ttk.Frame(self.root, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # File loading
        file_frame = ttk.Frame(main_frame)
        file_frame.pack(fill=tk.X, pady=(0, 10))
        
        ttk.Button(file_frame, text="Load JSON File", command=self.load_file).pack(side=tk.LEFT)
        self.file_label = ttk.Label(file_frame, text="No file loaded")
        self.file_label.pack(side=tk.LEFT, padx=(10, 0))
        
        # Speaker selection
        speaker_label_frame = ttk.Frame(main_frame)
        speaker_label_frame.pack(fill=tk.X, pady=(0, 5))
        ttk.Label(speaker_label_frame, text="Select Speakers:").pack(side=tk.LEFT)
        
        self.speaker_frame = ttk.Frame(main_frame)
        self.speaker_frame.pack(fill=tk.X, pady=(0, 10))
        
        # Extract button
        ttk.Button(main_frame, text="Extract Dialogue", command=self.extract_dialogue).pack(pady=(0, 10))
        
        # Results text area
        ttk.Label(main_frame, text="Extracted Dialogue:").pack(anchor=tk.W)
        self.text_area = scrolledtext.ScrolledText(main_frame, wrap=tk.WORD)
        self.text_area.pack(fill=tk.BOTH, expand=True, pady=(5, 0))
    
    def load_file(self):
        file_path = filedialog.askopenfilename(
            title="Select JSON file",
            filetypes=[("JSON files", "*.json"), ("All files", "*.*")]
        )
        
        if file_path:
            try:
                with open(file_path, 'r', encoding='utf-8') as file:
                    self.dialogue_data = json.load(file)
                
                self.file_label.config(text=f"Loaded: {file_path.split('/')[-1]}")
                self.detect_speakers()
                self.create_speaker_checkboxes()
                
            except Exception as e:
                messagebox.showerror("Error", f"Error loading file: {e}")
    
    def detect_speakers(self):
        speakers = set()
        for node_data in self.dialogue_data.values():
            if isinstance(node_data, dict) and 'speaker' in node_data:
                speakers.add(node_data['speaker'])
        self.speakers = sorted(list(speakers))
    
    def create_speaker_checkboxes(self):
        # Clear existing checkboxes
        for widget in self.speaker_frame.winfo_children():
            widget.destroy()
        
        self.speaker_vars = {}
        
        if not self.speakers:
            ttk.Label(self.speaker_frame, text="No speakers found").pack()
            return
        
        for speaker in self.speakers:
            var = tk.BooleanVar(value=True)
            self.speaker_vars[speaker] = var
            ttk.Checkbutton(self.speaker_frame, text=speaker, variable=var).pack(side=tk.LEFT, padx=(0, 15))
    
    def extract_dialogue(self):
        if not self.dialogue_data:
            messagebox.showwarning("Warning", "No file loaded")
            return
        
        if not self.speaker_vars:
            messagebox.showwarning("Warning", "No speakers detected")
            return
        
        selected_speakers = [speaker for speaker, var in self.speaker_vars.items() if var.get()]
        
        if not selected_speakers:
            messagebox.showwarning("Warning", "Please select at least one speaker")
            return
        
        dialogue_lines = []
        
        # Extract in exact JSON file order
        for node_data in self.dialogue_data.values():
            if isinstance(node_data, dict) and 'speaker' in node_data and 'text' in node_data:
                if node_data['speaker'] in selected_speakers:
                    dialogue_lines.append(node_data['text'])
        
        # Display results
        self.text_area.delete(1.0, tk.END)
        self.text_area.insert(1.0, '\n'.join(dialogue_lines))

if __name__ == "__main__":
    root = tk.Tk()
    app = DialogueExtractor(root)
    root.mainloop()