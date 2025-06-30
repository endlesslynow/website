import tkinter as tk
from tkinter import ttk, scrolledtext, messagebox
from tkinterdnd2 import DND_FILES, TkinterDnD
from gtts import gTTS
import re
import json
import os
import threading
import queue

# --- Configuration ---
LANGUAGES = {
    "Arabic": "ar",
    "Ukrainian": "uk",
    "Spanish": "es",
    "Turkish": "tr"
}

# --- Core Logic Functions ---

def parse_html_for_sentences(filepath, language):
    """
    Parses the dropped HTML file to extract sentences for a specific language.

    Args:
        filepath (str): The path to the HTML file.
        language (str): The language to extract (e.g., "arabic").

    Returns:
        list: A list of sentence strings or None on failure.
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find the sentences array using regex
        sentences_match = re.search(r'const\s+sentences\s*=\s*(\[[\s\S]*?\]);', content)
        if not sentences_match:
            raise ValueError("Could not find 'const sentences' array in the file.")
        
        # The extracted text is almost JSON, but keys are not quoted. We fix that.
        json_string = sentences_match.group(1)
        # Add quotes around all potential language keys and 'english'
        json_string = re.sub(r'({|,)\s*([a-zA-Z]+)\s*:', r'\1 "\2":', json_string)
        
        sentences_list = json.loads(json_string)
        
        # Extract only the text for the selected language
        extracted_sentences = [s.get(language.lower()) for s in sentences_list if s.get(language.lower())]
        
        if not extracted_sentences:
            raise ValueError(f"No sentences found for the language '{language}'. Check the HTML file.")

        return extracted_sentences

    except Exception as e:
        print(f"Error parsing file: {e}")
        return None

def generate_audio_files(language, unit_number, sentences, status_queue):
    """
    Generates MP3 files from the list of sentences.
    This function is designed to be run in a separate thread.

    Args:
        language (str): The selected language (e.g., "Arabic").
        unit_number (int): The unit number for the folder structure.
        sentences (list): A list of sentence strings.
        status_queue (queue.Queue): A queue to send status updates to the GUI.
    """
    try:
        lang_code = LANGUAGES.get(language)
        if not lang_code:
            raise ValueError(f"Invalid language selected: {language}")

        # Construct the target directory path
        lang_lower = language.lower()
        base_path = os.path.expanduser(f'~/Desktop/The Website/hopkins_method/{lang_lower}/{lang_lower}_audio')
        target_dir = os.path.join(base_path, f'unit_{unit_number}')

        status_queue.put(f"Creating directory: {target_dir}")
        os.makedirs(target_dir, exist_ok=True)

        total_sentences = len(sentences)
        for i, sentence_text in enumerate(sentences):
            status_queue.put(f"Generating audio ({i+1}/{total_sentences})...")
            
            # Create gTTS object
            tts = gTTS(text=sentence_text, lang=lang_code, slow=False)
            
            # Save the file
            filename = f'sentence_{i+1}.mp3'
            filepath = os.path.join(target_dir, filename)
            tts.save(filepath)

        status_queue.put(f"Success! All {total_sentences} audio files saved.")

    except Exception as e:
        status_queue.put(f"Error: {e}")


# --- GUI Application Class ---

class AudioGeneratorApp(TkinterDnD.Tk):
    def __init__(self):
        super().__init__()
        self.title("Hopkins Method Audio Generator")
        self.geometry("600x750")
        self.configure(bg="#f0f0f0")

        # Store parsed data
        self.sentences = None
        self.filepath = None
        self.status_queue = queue.Queue()

        self._create_widgets()
        self.check_button_state()
        self.process_queue()

    def _create_widgets(self):
        """Creates and places all the GUI widgets."""
        main_frame = ttk.Frame(self, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)

        # 1. Drag and Drop Area
        self.drop_target = ttk.Label(
            main_frame, text="\n\nDrag and Drop Your HTML File Here\n\n",
            relief="solid", borderwidth=2, anchor="center", style="Drop.TLabel"
        )
        self.drop_target.pack(fill=tk.X, pady=10)
        self.drop_target.drop_target_register(DND_FILES)
        self.drop_target.dnd_bind('<<Drop>>', self.on_drop)
        
        style = ttk.Style(self)
        style.configure("Drop.TLabel", background="#e0e8f0", foreground="#333", font=('Helvetica', 12, 'bold'))
        style.map("Drop.TLabel", background=[('active', '#c0d0e0')])

        # 2. Controls Frame
        controls_frame = ttk.Frame(main_frame)
        controls_frame.pack(fill=tk.X, pady=5)
        controls_frame.columnconfigure(1, weight=1)

        # Language Selection
        ttk.Label(controls_frame, text="Language:", font=('Helvetica', 10, 'bold')).grid(row=0, column=0, padx=5, pady=5, sticky="w")
        self.language_var = tk.StringVar()
        self.language_combo = ttk.Combobox(
            controls_frame, textvariable=self.language_var, 
            values=list(LANGUAGES.keys()), state="readonly"
        )
        self.language_combo.grid(row=0, column=1, padx=5, pady=5, sticky="ew")
        self.language_combo.bind("<<ComboboxSelected>>", self.on_selection_change)

        # Unit Number Entry
        ttk.Label(controls_frame, text="Unit Number:", font=('Helvetica', 10, 'bold')).grid(row=1, column=0, padx=5, pady=5, sticky="w")
        self.unit_var = tk.StringVar()
        self.unit_entry = ttk.Entry(controls_frame, textvariable=self.unit_var)
        self.unit_entry.grid(row=1, column=1, padx=5, pady=5, sticky="ew")
        self.unit_var.trace_add("write", self.on_selection_change)

        # 3. Sentences Display Area
        display_frame = ttk.LabelFrame(main_frame, text="Extracted Sentences (Read-only)", padding="10")
        display_frame.pack(fill=tk.BOTH, expand=True, pady=10)
        
        self.text_area = scrolledtext.ScrolledText(display_frame, wrap=tk.WORD, height=15, font=('Arial', 12))
        self.text_area.pack(fill=tk.BOTH, expand=True)
        self.text_area.configure(state='disabled')

        # 4. Generate Button
        self.generate_button = ttk.Button(
            main_frame, text="Generate Audio Files", command=self.start_generation_thread
        )
        self.generate_button.pack(fill=tk.X, ipady=10, pady=5)

        # 5. Status Bar
        self.status_label = ttk.Label(self, text="Ready. Waiting for file.", relief="sunken", anchor="w", padding="5")
        self.status_label.pack(side=tk.BOTTOM, fill=tk.X)

    def on_drop(self, event):
        """Handles the file drop event."""
        self.filepath = event.data.strip('{}')
        self.drop_target.config(text=f"Loaded:\n{os.path.basename(self.filepath)}")
        self.parse_and_display()
        self.check_button_state()

    def on_selection_change(self, *args):
        """Handles changes in language or unit number."""
        if self.filepath:
            self.parse_and_display()
        self.check_button_state()
        
    def parse_and_display(self):
        """Parses the file based on current selections and updates the display."""
        selected_language = self.language_var.get()
        if not self.filepath or not selected_language:
            return

        self.status_label.config(text=f"Parsing for {selected_language}...")
        self.update_idletasks()

        self.sentences = parse_html_for_sentences(self.filepath, selected_language)

        if self.sentences:
            self.display_sentences()
            self.status_label.config(text=f"Sentences for {selected_language} loaded. Ready.")
        else:
            self.text_area.configure(state='normal')
            self.text_area.delete(1.0, tk.END)
            self.text_area.insert(tk.END, f"Could not find sentences for '{selected_language}'.\n\nCheck that the HTML file contains the correct language key (e.g., '\"arabic\": \"...\"').")
            self.text_area.configure(state='disabled')
            self.status_label.config(text=f"Error: No sentences found for {selected_language}.")

    def display_sentences(self):
        """Displays the extracted sentences in the text area."""
        self.text_area.configure(state='normal')
        self.text_area.delete(1.0, tk.END)
        for i, sentence_text in enumerate(self.sentences):
            self.text_area.insert(tk.END, f"{i+1}. {sentence_text}\n")
        self.text_area.configure(state='disabled')

    def check_button_state(self, *args):
        """Enables or disables the generate button based on inputs."""
        if self.filepath and self.language_var.get() and self.unit_var.get().isdigit() and self.sentences:
            self.generate_button.config(state="normal")
        else:
            self.generate_button.config(state="disabled")

    def start_generation_thread(self):
        """Validates inputs and starts the audio generation in a separate thread."""
        language = self.language_var.get()
        unit_number_str = self.unit_var.get()

        if not unit_number_str.isdigit() or int(unit_number_str) <= 0:
            messagebox.showerror("Invalid Input", "Please enter a valid, positive unit number.")
            return

        self.generate_button.config(state="disabled")
        self.status_label.config(text="Starting audio generation...")
        
        self.thread = threading.Thread(
            target=generate_audio_files,
            args=(language, int(unit_number_str), self.sentences, self.status_queue)
        )
        self.thread.daemon = True
        self.thread.start()

    def process_queue(self):
        """Processes status messages from the worker thread."""
        try:
            message = self.status_queue.get_nowait()
            self.status_label.config(text=message)
            if "Success" in message or "Error" in message:
                self.check_button_state() # Re-enable button if appropriate
        except queue.Empty:
            pass
        finally:
            self.after(100, self.process_queue)


if __name__ == "__main__":
    # pip install gTTS beautifulsoup4 tkinterdnd2
    app = AudioGeneratorApp()
    app.mainloop()
