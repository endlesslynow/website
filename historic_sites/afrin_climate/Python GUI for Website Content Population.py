import tkinter as tk
from tkinter import filedialog, messagebox, ttk
import markdown2
from bs4 import BeautifulSoup
import re
import os
# Required for drag-and-drop. Install with: pip install tkinterdnd2
from tkinterdnd2 import DND_FILES, TkinterDnD
from PIL import Image, ImageTk
import shutil # For robust file copying

# --- CORE LOGIC ---

def extract_image_placeholders(html_path):
    """
    (MODIFIED)
    Parses the HTML file. Now correctly extracts clean names from placehold.co URLs.
    """
    if not html_path or not os.path.exists(html_path):
        return {}, "HTML file not found."

    images = {}
    excluded_ids = ['lightbox-image']

    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')

        for img_tag in soup.find_all('img', id=True):
            img_id = img_tag['id']
            if img_id in excluded_ids: continue
            caption_tag = soup.find('figcaption', id=f"{img_id}-caption")
            description_text = caption_tag.get_text(strip=True) if caption_tag else 'Image Description'
            images[img_id] = {'type': 'img', 'name': img_tag.get('alt', 'Image'), 'new_src_path': None, 'credit': '', 'description': description_text}

        for i, tag in enumerate(soup.find_all(style=re.compile(r'background-image'))):
            style_attr = tag['style']
            match = re.search(r"url\(['\"]?([^'\")]+)['\"]?\)", style_attr)
            if match:
                url = match.group(1)
                bg_id = tag.get('id', f'background-inline-{i}')
                # --- GENERALIZED LOGIC for cleaner names ---
                if 'placehold.co' in url and 'text=' in url:
                    text_match = re.search(r'text=([^&]+)', url)
                    placeholder_name = text_match.group(1).replace('+', ' ').replace('%20', ' ') if text_match else "Background Image"
                else:
                    placeholder_name = os.path.splitext(os.path.basename(url))[0].replace('_', ' ').replace('-', ' ').title()
                # --- END GENERALIZED LOGIC ---
                images[bg_id] = {'type': 'background_inline', 'name': placeholder_name, 'tag_id': bg_id, 'new_src_path': None, 'credit': ''}
        
        for style_tag in soup.find_all('style'):
            css_text = style_tag.string if style_tag.string else ''
            css_rules = re.findall(r'([^{]+)\s*\{([^}]+)\}', css_text)
            for selector, properties in css_rules:
                if 'background-image' in properties:
                    url_match = re.search(r"url\(['\"]?([^'\")]+)['\"]?\)", properties)
                    if url_match:
                        url = url_match.group(1)
                        clean_selector = selector.strip()
                        # --- GENERALIZED LOGIC for cleaner names ---
                        if 'placehold.co' in url and 'text=' in url:
                           text_match = re.search(r'text=([^&]+)', url)
                           placeholder_name = text_match.group(1).replace('+', ' ').replace('%20', ' ') if text_match else "Background Image"
                        else:
                           placeholder_name = os.path.splitext(os.path.basename(url))[0].replace('_', ' ').replace('-', ' ').title()
                        # --- END GENERALIZED LOGIC ---
                        images[clean_selector] = {'type': 'background_style', 'name': placeholder_name, 'selector': clean_selector, 'new_src_path': None, 'credit': ''}

    except Exception as e:
        return {}, f"Error parsing HTML for images: {e}"
    return images, "Image placeholders extracted successfully."

def add_paragraph_spacing(md_text):
    """
    (UNCHANGED)
    """
    processed_text = re.sub(r'\n+', '\n\n', md_text)
    return processed_text

def parse_markdown_content(md_path):
    """
    (UNCHANGED)
    """
    if not md_path: return None, "Error: Markdown file not provided."
    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            raw_md_text = f.read()
    except Exception as e:
        return None, f"Error reading Markdown file: {e}"

    md_text = add_paragraph_spacing(raw_md_text)
    content = {}

    main_title_match = re.search(r'# \*\*(.*?)\*\*', md_text)
    if main_title_match:
        full_title = main_title_match.group(1)
        if ':' in full_title:
            parts = full_title.split(':', 1)
            content['main-title'] = parts[0].strip()
            content['main-subtitle'] = parts[1].strip()
        else:
            content['main-title'] = full_title.strip()
            content['main-subtitle'] = ""
    
    intro_match = re.search(r'## \*\*Introduction\*\*(.*?)(?=## \*\*Part I:)', md_text, re.DOTALL)
    if intro_match:
        content['introduction-content'] = markdown2.markdown(intro_match.group(1).strip())

    part1_match = re.search(r'## \*\*(Part I:.*?)\*\*(.*?)(?=## \*\*Part II:)', md_text, re.DOTALL)
    if part1_match:
        heading_full = part1_match.group(1)
        if '(' in heading_full:
            heading_parts = heading_full.split('(', 1)
            content['part1-heading'] = heading_parts[0].strip()
            content['part1-subheading'] = '(' + heading_parts[1].strip()
        else:
            content['part1-heading'] = heading_full
            content['part1-subheading'] = ''
        
        part1_body = part1_match.group(2).strip()
        
        table_pattern = re.compile(r'\*\*Table 1:.*?Days\s*\|.*?December.*?\|', re.DOTALL | re.IGNORECASE)
        part1_body_no_table = table_pattern.sub('', part1_body)

        split_marker = '### **The 20th Century Warming and Drying Trend**'
        if split_marker in part1_body_no_table:
            content1, content2 = part1_body_no_table.split(split_marker, 1)
            content['part1-content'] = markdown2.markdown(content1.strip())
            content['part1-content-continued'] = markdown2.markdown(f"### **The 20th Century Warming and Drying Trend**\n{content2.strip()}")
        else:
            content['part1-content'] = markdown2.markdown(part1_body_no_table)
            content['part1-content-continued'] = ''

    part2_match = re.search(r'## \*\*(Part II:.*?)\*\*(.*?)(?=## \*\*Part III:)', md_text, re.DOTALL)
    if part2_match:
        heading_full = part2_match.group(1)
        if '(' in heading_full:
            heading_parts = heading_full.split('(', 1)
            content['part2-heading'] = heading_parts[0].strip()
            content['part2-subheading'] = '(' + heading_parts[1].strip()
        else:
            content['part2-heading'] = heading_full
            content['part2-subheading'] = ''
        content['part2-content'] = markdown2.markdown(part2_match.group(2).strip())

    part3_match = re.search(r'## \*\*(Part III:.*?)\*\*(.*?)(?=## \*\*Part IV:)', md_text, re.DOTALL)
    if part3_match:
        heading_full = part3_match.group(1)
        if '(' in heading_full:
            heading_parts = heading_full.split('(', 1)
            content['part3-heading'] = heading_parts[0].strip()
            content['part3-subheading'] = '(' + heading_parts[1].strip()
        else:
            content['part3-heading'] = heading_full
            content['part3-subheading'] = ''
        content['part3-content'] = markdown2.markdown(part3_match.group(2).strip())

    part4_match = re.search(r'## \*\*(Part IV:.*?)\*\*(.*?)(?=## \*\*Conclusion:)', md_text, re.DOTALL)
    if part4_match:
        content['part4-heading'] = part4_match.group(1).strip()
        content['part4-subheading'] = "The Holocene Climate Record"
        part4_body = part4_match.group(2).strip()
        table_end_marker = 'Dates are approximate and based on a synthesis of sources.8'
        if table_end_marker in part4_body:
            _, final_content = part4_body.split(table_end_marker, 1)
            content['part4-content'] = markdown2.markdown(final_content.strip())
        else:
            content['part4-content'] = markdown2.markdown(part4_body, extras=["tables"])

    conclusion_match = re.search(r'## \*\*(Conclusion:.*?)\*\*(.*?)(?=## \*\*Works Cited\*\*)', md_text, re.DOTALL)
    if conclusion_match:
        content['conclusion-heading'] = conclusion_match.group(1).strip()
        content['conclusion-content'] = markdown2.markdown(conclusion_match.group(2).strip())

    works_cited_match = re.search(r'#### \*\*Works cited\*\*(.*)', md_text, re.DOTALL)
    if works_cited_match:
        content['works-cited-heading'] = "Works Cited"
        citations_text = works_cited_match.group(1).strip()
        citation_lines = re.findall(r'^\d+\.\s+(.*?)(?=^\d+\.|$)', citations_text, re.MULTILINE | re.DOTALL)
        list_items = [f"<li id='citation-{i}' class='citation-item'>{line.strip()}</li>" for i, line in enumerate(citation_lines, 1) if line.strip()]
        list_items_html = "".join(list_items)
        content['works-cited-content'] = list_items_html
    
    return content, "Markdown Parsed Successfully."


def inject_content_into_html(html_path, content, image_data):
    """
    (MODIFIED)
    Injects content. Citation logic is restored to its original working state with the one requested fix.
    """
    if not html_path: return "Error: HTML file not provided."
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')
    except Exception as e:
        return f"Error reading HTML file: {e}"

    for key, value in content.items():
        element = soup.find(id=key)
        if element:
            element.clear()
            if isinstance(value, str) and value.strip():
                new_soup = BeautifulSoup(value, 'html.parser')
                for child in list(new_soup.contents):
                    element.append(child.extract())

    html_dir = os.path.dirname(html_path)
    images_dir = os.path.join(html_dir, 'images')
    os.makedirs(images_dir, exist_ok=True)
    style_tag_to_update = soup.find('style')
    css_text = style_tag_to_update.string if style_tag_to_update and style_tag_to_update.string else ''

    for key, data in image_data.items():
        if data['type'] == 'img':
            desc_element = soup.find(id=f"{key}-caption")
            if desc_element: desc_element.string = data.get('description', '')
        
        if data.get('new_src_path'):
            sanitized_name = re.sub(r'[^\w\.-]', '_', data.get('name', key))
            _, extension = os.path.splitext(data['new_src_path'])
            img_filename = f"{sanitized_name}{extension}"
            img_save_path = os.path.join(images_dir, img_filename)
            shutil.copy(data['new_src_path'], img_save_path)
            relative_path = os.path.join('images', img_filename).replace('\\', '/')

            if data['type'] == 'img':
                img_element = soup.find('img', id=key)
                if img_element: img_element['src'] = relative_path
            elif data['type'] == 'background_inline':
                tag = soup.find(id=data['tag_id'])
                if tag and tag.has_attr('style'):
                    tag['style'] = re.sub(r"url\(.*?\)", f"url('{relative_path}')", tag['style'])
            elif data['type'] == 'background_style':
                pattern = re.compile(r'(\s*' + re.escape(data['selector']) + r'\s*\{[^\}]*?background-image\s*:\s*.*?url\()([\'"]?.*?[\'"]?)(\).*?\})', re.DOTALL)
                css_text = pattern.sub(r'\g<1>\'' + relative_path + r'\'\g<3>', css_text)

    if style_tag_to_update: style_tag_to_update.string = css_text
    
    # --- CITATION LOGIC RESTORED AND CORRECTED ---
    content_divs = soup.select('.content-text, .timeline-content')
    for div in content_divs:
        # Using str(div) and replace_with() which was the original working method.
        html_string = str(div)
        # The regex now uses a negative lookbehind (?<!\d) to ensure the character
        # before the punctuation is NOT a digit. This fixes the "3.8" issue.
        corrected_html = re.sub(r'(?<!\d)([,.?!])(\d+)', r'\1<sup><a href="#citation-\2" class="source-link">[\2]</a></sup>', html_string)
        if corrected_html != html_string:
            new_div = BeautifulSoup(corrected_html, 'html.parser')
            div.replace_with(new_div)
    # --- END CITATION LOGIC ---

    try:
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(str(soup))
    except Exception as e:
        return f"Error writing to HTML file: {e}"
    return "Injection Complete with Clickable Citations!"

# --- GUI APPLICATION (UNCHANGED) ---
class ScrollableFrame(ttk.Frame):
    def __init__(self, container, *args, **kwargs):
        super().__init__(container, *args, **kwargs)
        canvas = tk.Canvas(self, bg="#34495e", highlightthickness=0)
        scrollbar = ttk.Scrollbar(self, orient="vertical", command=canvas.yview)
        self.scrollable_frame = ttk.Frame(canvas, style="TFrame")
        self.scrollable_frame.bind("<Configure>", lambda e: canvas.configure(scrollregion=canvas.bbox("all")))
        canvas.create_window((0, 0), window=self.scrollable_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)
        canvas.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")

class App(TkinterDnD.Tk):
    def __init__(self):
        super().__init__()
        self.title("Website Content Injector")
        self.geometry("950x750")
        self.configure(bg="#2c3e50")

        self.html_path = tk.StringVar()
        self.md_path = ""
        self.image_data = {}
        self.image_widgets = {}
        self.photo_references = {}

        style = ttk.Style(self)
        style.theme_use("clam")
        style.configure("TLabel", background="#2c3e50", foreground="white", font=("Helvetica", 10))
        style.configure("TButton", background="#3498db", foreground="white", font=("Helvetica", 10, "bold"), borderwidth=0)
        style.map("TButton", background=[("active", "#2980b9")])
        style.configure("TEntry", fieldbackground="#ecf0f1", foreground="#2c3e50", padding=5)
        style.configure("TFrame", background="#2c3e50")
        style.configure("TLabelframe", background="#34495e", bordercolor="#34495e", padding=10)
        style.configure("TLabelframe.Label", background="#34495e", foreground="white", font=("Helvetica", 11, "bold"))

        main_frame = ttk.Frame(self, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)
        main_frame.grid_columnconfigure(0, weight=1)
        main_frame.grid_rowconfigure(2, weight=1)

        html_frame = ttk.Frame(main_frame)
        html_frame.grid(row=0, column=0, sticky="ew", pady=5)
        html_frame.grid_columnconfigure(0, weight=1)
        ttk.Label(html_frame, text="HTML File Path:").pack(side=tk.LEFT, padx=(0, 5))
        self.html_entry = ttk.Entry(html_frame, textvariable=self.html_path)
        self.html_entry.pack(side=tk.LEFT, fill=tk.X, expand=True)
        ttk.Button(html_frame, text="Browse...", command=self.browse_html).pack(side=tk.LEFT, padx=5)
        ttk.Button(html_frame, text="Load Image Slots", command=self.load_html_data).pack(side=tk.LEFT)
        
        self.md_drop_zone = tk.Label(main_frame, text="Drag and Drop Markdown (.md) File Here", bg="#34495e", fg="white", font=("Helvetica", 12), relief="solid", borderwidth=2, pady=20)
        self.md_drop_zone.grid(row=1, column=0, sticky="ew", pady=10)
        self.md_drop_zone.drop_target_register(DND_FILES)
        self.md_drop_zone.dnd_bind('<<Drop>>', self.handle_md_drop)

        self.image_labelframe = ttk.Labelframe(main_frame, text="Image Placeholders")
        self.image_labelframe.grid(row=2, column=0, sticky="nsew", pady=10)
        self.image_labelframe.grid_rowconfigure(0, weight=1)
        self.image_labelframe.grid_columnconfigure(0, weight=1)
        self.scrollable_image_area = ScrollableFrame(self.image_labelframe)
        self.scrollable_image_area.pack(fill="both", expand=True)
        
        self.inject_button = ttk.Button(main_frame, text="Inject", command=self.run_injection)
        self.inject_button.grid(row=3, column=0, pady=20, ipadx=20, ipady=5)
        
        self.status_var = tk.StringVar(value="Ready. Load HTML, then drop MD file.")
        self.status_bar = ttk.Label(self, textvariable=self.status_var, relief=tk.SUNKEN, anchor=tk.W, padding=5)
        self.status_bar.pack(side=tk.BOTTOM, fill=tk.X)

    def browse_html(self):
        path = filedialog.askopenfilename(filetypes=[("HTML files", "*.html"), ("All files", "*.*")])
        if path: self.html_path.set(path)

    def handle_md_drop(self, event):
        path = event.data.strip('{}')
        if path.lower().endswith(".md"):
            self.md_path = path
            self.md_drop_zone.config(text=f"Loaded: {os.path.basename(path)}", bg="#27ae60")
            self.status_var.set(f"Markdown file loaded: {os.path.basename(path)}")
        else:
            self.status_var.set("Error: Please drop a valid .md file.")
            self.md_drop_zone.config(bg="#c0392b")

    def load_html_data(self):
        path = self.html_path.get().strip('"')
        if not path:
            messagebox.showerror("Error", "Please provide the HTML file path.")
            return

        for widget in self.scrollable_image_area.scrollable_frame.winfo_children(): widget.destroy()
        self.image_widgets = {}; self.photo_references = {}

        self.status_var.set("Loading image placeholders from HTML...")
        self.update_idletasks()
        
        self.image_data, message = extract_image_placeholders(path)
        self.status_var.set(message)
        
        if self.image_data: self.create_image_widgets()

    def create_image_widgets(self):
        container = self.scrollable_image_area.scrollable_frame
        container.grid_columnconfigure(0, weight=1)
        label_font = ("Helvetica", 10)

        for i, (img_id, data) in enumerate(self.image_data.items()):
            item_frame = ttk.Labelframe(container, text=f"ID: {img_id}", padding=(10, 5))
            item_frame.grid(row=i, column=0, sticky="ew", padx=5, pady=8)
            item_frame.grid_columnconfigure(0, weight=0)
            item_frame.grid_columnconfigure(1, weight=1)

            left_frame = ttk.Frame(item_frame)
            left_frame.grid(row=0, column=0, sticky="ns", padx=(0, 15))
            
            canvas = tk.Canvas(left_frame, width=200, height=120, bg="#ecf0f1", relief="sunken", borderwidth=1)
            canvas.pack()
            canvas.create_text(100, 60, text="Image Preview", fill="grey", font=("Helvetica", 10))
            
            browse_button = ttk.Button(left_frame, text="Browse for Image...", command=lambda i=img_id: self.browse_for_image(i))
            browse_button.pack(pady=(5,0), fill='x')

            right_frame = ttk.Frame(item_frame)
            right_frame.grid(row=0, column=1, sticky="nsew")
            right_frame.grid_columnconfigure(1, weight=1)

            ttk.Label(right_frame, text="Name:", font=label_font).grid(row=0, column=0, sticky="w", pady=4)
            name_entry = ttk.Entry(right_frame, font=label_font)
            name_entry.insert(0, data.get('name', 'Unnamed Image'))
            name_entry.grid(row=0, column=1, sticky="ew", padx=5)

            ttk.Label(right_frame, text="Credit:", font=label_font).grid(row=1, column=0, sticky="w", pady=4)
            credit_entry = ttk.Entry(right_frame, font=label_font)
            credit_entry.grid(row=1, column=1, sticky="ew", padx=5)

            if data['type'] == 'img':
                ttk.Label(right_frame, text="Desc:", font=label_font).grid(row=2, column=0, sticky="nw", pady=4)
                desc_entry = tk.Text(right_frame, height=4, width=40, wrap=tk.WORD, font=label_font, relief="sunken", borderwidth=1)
                desc_entry.insert("1.0", data.get('description', ''))
                desc_entry.grid(row=2, column=1, sticky="ew", padx=5)
            else:
                desc_entry = None
            
            self.image_widgets[img_id] = {'canvas': canvas, 'name_entry': name_entry, 'desc_entry': desc_entry, 'credit_entry': credit_entry}

    def browse_for_image(self, img_id):
        file_path = filedialog.askopenfilename(filetypes=[("Image Files", "*.jpg *.jpeg *.png *.gif *.bmp *.tiff"), ("All files", "*.*")])
        if not file_path: return

        self.image_data[img_id]['new_src_path'] = file_path
        self.status_var.set(f"Selected image for '{self.image_widgets[img_id]['name_entry'].get()}'")

        try:
            with Image.open(file_path) as img:
                img.thumbnail((200, 120))
                canvas = self.image_widgets[img_id]['canvas']
                photo_image = ImageTk.PhotoImage(img)
                self.photo_references[img_id] = photo_image
                canvas.delete("all")
                canvas.create_image(100, 60, image=self.photo_references[img_id])
        except Exception as e:
            messagebox.showerror("Image Error", f"Could not load or display the image.\nError: {e}")

    def run_injection(self):
        html_file = self.html_path.get().strip('"')
        md_file = self.md_path
        if not html_file or not md_file:
            messagebox.showerror("Error", "Please provide both the HTML and Markdown file paths.")
            return

        for img_id, widgets in self.image_widgets.items():
            self.image_data[img_id]['name'] = widgets['name_entry'].get()
            self.image_data[img_id]['credit'] = widgets['credit_entry'].get()
            if widgets['desc_entry']:
                self.image_data[img_id]['description'] = widgets['desc_entry'].get("1.0", tk.END).strip()

        self.status_var.set("Parsing Markdown...")
        self.update_idletasks()
        
        content, message = parse_markdown_content(md_file)
        if not content:
            messagebox.showerror("Markdown Parsing Error", message)
            self.status_var.set("Ready")
            return

        self.status_var.set("Injecting content...")
        self.update_idletasks()
        
        result_message = inject_content_into_html(html_file, content, self.image_data)

        self.status_var.set(result_message)
        if "Complete" in result_message:
            messagebox.showinfo("Success", result_message)
        else:
            messagebox.showerror("Injection Error", result_message)

if __name__ == "__main__":
    app = App()
    app.mainloop()
