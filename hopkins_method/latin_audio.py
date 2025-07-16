import os
import re
import json
from gtts import gTTS
from bs4 import BeautifulSoup
import tkinter as tk
from tkinter import filedialog, messagebox, scrolledtext, ttk
import threading

def extract_sentences_from_html(file_path):
    """
    Parses the provided HTML file to extract the language, unit number,
    and a list of sentences.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Use BeautifulSoup to parse the HTML and find the script content
        soup = BeautifulSoup(content, 'html.parser')
        script_tag = soup.find('script', string=re.compile(r'const sentences\s*='))
        
        if not script_tag:
            return None, None, None, "Could not find the main script tag in the HTML file."

        script_content = script_tag.string

        # Extract language and unit number
        lang_match = re.search(r'const LANGUAGE\s*=\s*"(.*?)"', script_content)
        unit_match = re.search(r'const UNIT_NUMBER\s*=\s*(\d+)', script_content)
        
        if not lang_match or not unit_match:
            return None, None, None, "Could not find LANGUAGE or UNIT_NUMBER variables."

        language = lang_match.group(1)
        unit_number = unit_match.group(1)

        # Extract the sentences array using regex, as it's simpler than parsing JS with Python
        sentences_match = re.search(r'const sentences\s*=\s*(\[[\s\S]*?\]);', script_content, re.DOTALL)
        if not sentences_match:
            return None, None, None, "Could not find the sentences array."

        # The matched group is a string that looks like a list of JS objects.
        # We need to transform it into valid JSON.
        json_string = sentences_match.group(1)
        
        # *** FIX: Use a more robust regex to add quotes to unquoted keys. ***
        # This looks for keys (e.g., `latin:`) that follow a `{` or `,`
        # and adds quotes, making it safer than the previous method.
        json_string = re.sub(r'([{,]\s*)(\w+)(\s*:)', r'\1"\2"\3', json_string)

        # The string should now be valid JSON, ready to be parsed.
        sentences = json.loads(json_string)
        
        return language, unit_number, sentences, None

    except FileNotFoundError:
        return None, None, None, f"Error: The file '{file_path}' was not found."
    except Exception as e:
        return None, None, None, f"An unexpected error occurred during parsing: {e}"


def download_audio_for_sentences(base_path, language, unit_number, sentences, log_callback):
    """
    Generates and saves audio files for the given sentences.
    """
    if not sentences:
        log_callback("No sentences found to process.")
        return

    # Create directory structure
    audio_dir = os.path.join(base_path, f"{language}_audio", f"unit_{unit_number}")
    try:
        os.makedirs(audio_dir, exist_ok=True)
        log_callback(f"Created directory: {audio_dir}")
    except OSError as e:
        log_callback(f"Error creating directory: {e}")
        return

    # Use the correct language code for gTTS
    gtts_lang_code = "la" if language.lower() == "latin" else language
    log_callback(f"Using gTTS language code: '{gtts_lang_code}'")


    # Download audio for each sentence
    total_sentences = len(sentences)
    for i, sentence_data in enumerate(sentences):
        sentence_text = sentence_data.get(language)
        if not sentence_text:
            log_callback(f"Warning: No '{language}' text found for sentence {i+1}. Skipping.")
            continue

        file_path = os.path.join(audio_dir, f"sentence_{i+1 + (int(unit_number)-1)*50}.mp3")
        
        if os.path.exists(file_path):
            log_callback(f"({i+1}/{total_sentences}) Skipping existing file: {os.path.basename(file_path)}")
            continue

        try:
            log_callback(f"({i+1}/{total_sentences}) Generating audio for: \"{sentence_text}\"")
            # Use the corrected language code
            tts = gTTS(text=sentence_text, lang=gtts_lang_code, slow=False)
            tts.save(file_path)
        except Exception as e:
            log_callback(f"ERROR: Failed to generate audio for sentence {i+1}. Details: {e}")
    
    log_callback("\n--- Audio Generation Complete! ---")


class AudioDownloaderApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("HTML Audio Downloader")
        self.geometry("700x500")

        self.file_path_var = tk.StringVar()

        self._create_widgets()

    def _create_widgets(self):
        main_frame = ttk.Frame(self, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)
        main_frame.columnconfigure(0, weight=1)
        main_frame.rowconfigure(2, weight=1)

        # File selection
        file_frame = ttk.Frame(main_frame)
        file_frame.grid(row=0, column=0, sticky="ew", pady=(0, 10))
        file_frame.columnconfigure(1, weight=1)

        ttk.Label(file_frame, text="HTML File:").grid(row=0, column=0, sticky="w")
        ttk.Entry(file_frame, textvariable=self.file_path_var, state="readonly").grid(row=0, column=1, sticky="ew", padx=(5, 5))
        ttk.Button(file_frame, text="Browse...", command=self.browse_file).grid(row=0, column=2)

        # Generate button
        self.generate_button = ttk.Button(main_frame, text="Generate Audio Files", command=self.start_generation_thread, state="disabled")
        self.generate_button.grid(row=1, column=0, sticky="ew", ipady=10, pady=5)

        # Log area
        log_frame = ttk.LabelFrame(main_frame, text="Log", padding="10")
        log_frame.grid(row=2, column=0, sticky="nsew")
        log_frame.columnconfigure(0, weight=1)
        log_frame.rowconfigure(0, weight=1)
        
        self.log_area = scrolledtext.ScrolledText(log_frame, wrap=tk.WORD, state='disabled', font=('Courier New', 10))
        self.log_area.grid(row=0, column=0, sticky="nsew")

    def browse_file(self):
        file_path = filedialog.askopenfilename(
            title="Select HTML File",
            filetypes=(("HTML files", "*.html"), ("All files", "*.*"))
        )
        if file_path:
            self.file_path_var.set(file_path)
            self.generate_button.config(state="normal")

    def log_message(self, message):
        self.log_area.configure(state='normal')
        self.log_area.insert(tk.END, message + "\n")
        self.log_area.configure(state='disabled')
        self.log_area.see(tk.END)
        self.update_idletasks()

    def start_generation_thread(self):
        file_path = self.file_path_var.get()
        if not file_path:
            messagebox.showerror("Error", "Please select an HTML file first.")
            return

        self.generate_button.config(state="disabled")
        self.log_message("--- Starting Audio Generation ---")

        # Run the main logic in a separate thread to keep the GUI responsive
        threading.Thread(
            target=self.run_generation,
            args=(file_path,),
            daemon=True
        ).start()

    def run_generation(self, file_path):
        base_path = os.path.dirname(file_path)
        
        language, unit_number, sentences, error = extract_sentences_from_html(file_path)

        if error:
            self.log_message(f"ERROR: {error}")
            self.generate_button.config(state="normal")
            return

        self.log_message(f"Successfully parsed HTML file.")
        self.log_message(f"  - Language: {language}")
        self.log_message(f"  - Unit Number: {unit_number}")
        self.log_message(f"  - Sentences Found: {len(sentences)}\n")

        download_audio_for_sentences(base_path, language, unit_number, sentences, self.log_message)
        
        self.generate_button.config(state="normal")


if __name__ == "__main__":
    # Before running, make sure you have the required libraries installed:
    # pip install gTTS beautifulsoup4
    app = AudioDownloaderApp()
    app.mainloop()
