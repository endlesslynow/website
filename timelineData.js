import tkinter as tk
from tkinter import ttk, filedialog, messagebox
import json
from datetime import datetime
import re
import os
import traceback
import ast

class ObsidianConverterGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Obsidian Note Converter")
        self.root.geometry("800x700")
        
        # Configure grid weight
        self.root.grid_columnconfigure(0, weight=1)
        self.root.grid_rowconfigure(1, weight=1)
        
        # Create main frame
        self.main_frame = ttk.Frame(self.root, padding="10")
        self.main_frame.grid(row=0, column=0, sticky="nsew")
        
        # Output folder selection
        self.folder_frame = ttk.Frame(self.main_frame)
        self.folder_frame.pack(fill="x", pady=(0, 10))
        
        self.folder_label = ttk.Label(self.folder_frame, text="Output Folder:")
        self.folder_label.pack(side="left")
        
        self.folder_var = tk.StringVar()
        self.folder_entry = ttk.Entry(self.folder_frame, textvariable=self.folder_var)
        self.folder_entry.pack(side="left", fill="x", expand=True, padx=(5, 5))
        
        self.folder_button = ttk.Button(self.folder_frame, text="Browse", command=self.select_folder)
        self.folder_button.pack(side="right")
        
        # Input text area
        self.input_label = ttk.Label(self.main_frame, text="Paste your data (Python dict or JSON format):")
        self.input_label.pack(fill="x")
        
        self.input_text = tk.Text(self.main_frame, height=10, wrap="word")
        self.input_text.pack(fill="both", expand=True, pady=(5, 10))
        
        # Example button
        self.example_button = ttk.Button(self.main_frame, text="Load Example", command=self.load_example)
        self.example_button.pack(pady=(0, 10))
        
        # Convert button
        self.convert_button = ttk.Button(self.main_frame, text="Convert to Obsidian Note", command=self.convert)
        self.convert_button.pack(pady=(0, 10))
        
        # Error/Status Display Frame
        self.status_frame = ttk.LabelFrame(self.main_frame, text="Status/Error Messages (Copyable)")
        self.status_frame.pack(fill="both", expand=True, pady=(0, 10))
        
        # Error/Status Text Widget (Copyable)
        self.status_text = tk.Text(self.status_frame, height=6, wrap="word")
        self.status_text.pack(fill="both", expand=True, padx=5, pady=5)
        
        # Add scrollbar to status text
        self.status_scrollbar = ttk.Scrollbar(self.status_frame, orient="vertical", command=self.status_text.yview)
        self.status_text.configure(yscrollcommand=self.status_scrollbar.set)
        self.status_scrollbar.pack(side="right", fill="y")

    def parse_input(self, input_text):
        """Parse input text as either JSON or Python dict format."""
        input_text = input_text.strip()
        if not input_text:
            raise ValueError("Input text is empty")
        
        # Try to parse as JSON first
        try:
            data = json.loads(input_text)
            return [data] if isinstance(data, dict) else data
        except json.JSONDecodeError:
            # If JSON fails, try to parse as Python literal
            try:
                # Replace single quotes with double quotes for proper JSON formatting
                formatted_text = input_text.replace("'", '"')
                # Handle multiple entries
                if formatted_text.strip().startswith("["):
                    # If it's a list, parse directly
                    data = json.loads(formatted_text)
                else:
                    # If it's multiple dictionaries without list brackets, add them
                    formatted_text = f"[{formatted_text}]"
                    data = json.loads(formatted_text)
                return data
            except Exception as e:
                raise ValueError(f"Could not parse input as either JSON or Python dict: {str(e)}")

    def select_folder(self):
        folder = filedialog.askdirectory()
        if folder:
            self.folder_var.set(folder)

    def load_example(self):
        example = '''{ 
    "startDate": "-2700",
    "endDate": "-1200",
    "mainEvent": "Alalax Civilization",
    "additionalInfo": "Existence of Alalax civilization (Gi.Etşanê).",
    "source": "Source: Anon",
    "verification": "Verification Pending"
}'''
        self.input_text.delete('1.0', tk.END)
        self.input_text.insert('1.0', example)

    def set_status(self, message, is_error=False):
        """Update status text with timestamp and optional error formatting"""
        self.status_text.delete('1.0', tk.END)
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        if is_error:
            self.status_text.insert('1.0', f"[{timestamp}] ERROR:\n{message}")
            self.status_text.tag_add("error", "1.0", "end")
            self.status_text.tag_config("error", foreground="red")
        else:
            self.status_text.insert('1.0', f"[{timestamp}] SUCCESS:\n{message}")
            self.status_text.tag_add("success", "1.0", "end")
            self.status_text.tag_config("success", foreground="green")

    def convert(self):
        # Get input text and output folder
        input_text = self.input_text.get('1.0', tk.END).strip()
        output_folder = self.folder_var.get()
        
        if not input_text:
            self.set_status("Please enter the data.", is_error=True)
            return
            
        if not output_folder:
            self.set_status("Please select an output folder.", is_error=True)
            return
            
        try:
            # Parse the input
            data_list = self.parse_input(input_text)
            
            # Process each entry
            created_files = []
            for data in data_list:
                filepath = self.process_data_to_obsidian(data, output_folder)
                created_files.append(filepath)
            
            # Show success message
            success_message = "Created Obsidian notes:\n" + "\n".join(created_files)
            self.set_status(success_message)
            
        except Exception as e:
            error_message = f"An error occurred:\n{str(e)}\n\nFull traceback:\n{traceback.format_exc()}"
            self.set_status(error_message, is_error=True)

    def clean_title(self, title):
        """Remove parenthetical content and trailing periods from a title."""
        cleaned = re.sub(r'\s*\([^)]*\)', '', title)
        cleaned = cleaned.rstrip('.')
        return cleaned

    def create_obsidian_note(self, data):
        """Convert a data dictionary to Obsidian note format."""
        # Extract the clean title for the filename
        title = self.clean_title(data['additionalInfo'])
        filename = f"{title}.md"
        
        # Get main event for tagging
        main_event_tag = data['mainEvent']
        
        # Create the note content with exact spacing
        note_content = f"""{{{{date}}}} {{{{time}}}}

Status: #spark #timeline-note #verification-pending

Tags: [[Afrin]] [[Afrin History]] [[History]] [[ME History]] [[{main_event_tag}]]

Page:

Source: {data['source']}

# {{{{{data['additionalInfo']}}}}}

Start Date: {data['startDate']}
End Date: {data['endDate']}


# References"""

        return filename, note_content

    def process_data_to_obsidian(self, data, output_dir='.'):
        """Process data and create Obsidian note file."""
        filename, content = self.create_obsidian_note(data)
        
        # Create output directory if it doesn't exist
        os.makedirs(output_dir, exist_ok=True)
        
        # Write the file
        file_path = os.path.join(output_dir, filename)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return file_path

def main():
    root = tk.Tk()
    app = ObsidianConverterGUI(root)
    root.mainloop()

if __name__ == "__main__":
    main()