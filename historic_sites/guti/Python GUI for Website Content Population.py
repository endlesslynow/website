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
    (FINALIZED & CORRECTED)
    Parses the HTML file to find all image placeholders from <img> tags and CSS background-image styles.
    This version correctly handles complex CSS rules with multiple values like linear-gradients.
    """
    if not html_path or not os.path.exists(html_path):
        return {}, "HTML file not found."

    images = {}
    excluded_ids = ['lightbox-image']

    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')

        # --- <img> tag processing (No changes here) ---
        for img_tag in soup.find_all('img', id=True):
            img_id = img_tag['id']
            if img_id in excluded_ids: continue
            placeholder_text = img_tag.get('alt', 'Image')
            images[img_id] = {'type': 'img', 'name': placeholder_text, 'new_src_path': None, 'credit': '', 'description': ''}

        # --- Inline background-images processing ---
        for i, tag in enumerate(soup.find_all(style=re.compile(r'background-image'))):
            style_attr = tag['style']
            # This regex specifically finds the url() value, ignoring other properties
            match = re.search(r"url\(['\"]?([^'\")]+)['\"]?\)", style_attr)
            if match:
                url = match.group(1)
                placeholder_name = os.path.splitext(os.path.basename(url))[0].replace('_', ' ').replace('-', ' ').title()
                bg_id = tag.get('id', f'background-inline-{i}')
                images[bg_id] = {'type': 'background_inline', 'name': placeholder_name, 'tag_id': bg_id, 'new_src_path': None, 'credit': ''}
        
        # --- <style> tag background-images processing (ROBUST PARSING) ---
        for style_tag in soup.find_all('style'):
            css_text = style_tag.string if style_tag.string else ''
            # First, find all CSS rules (e.g., .hero-bg { ... })
            css_rules = re.findall(r'([^{]+)\s*\{([^}]+)\}', css_text)
            for selector, properties in css_rules:
                # Check if the rule contains a background-image
                if 'background-image' in properties:
                    # If it does, find the url() value within it
                    url_match = re.search(r"url\(['\"]?([^'\")]+)['\"]?\)", properties)
                    if url_match:
                        url = url_match.group(1)
                        clean_selector = selector.strip()
                        placeholder_name = os.path.splitext(os.path.basename(url))[0].replace('_', ' ').replace('-', ' ').title()
                        images[clean_selector] = {'type': 'background_style', 'name': placeholder_name, 'selector': clean_selector, 'new_src_path': None, 'credit': ''}

    except Exception as e:
        return {}, f"Error parsing HTML for images: {e}"
    return images, "Image placeholders extracted successfully."

def add_paragraph_spacing(md_text):
    """
    (FROM YOUR ORIGINAL SCRIPT - UNCHANGED)
    Ensures paragraphs are separated by a blank line for correct HTML conversion.
    """
    processed_text = re.sub(r'\n+', '\n\n', md_text)
    return processed_text

def parse_markdown_content(md_path):
    """
    (FROM YOUR ORIGINAL SCRIPT - UNCHANGED)
    Parses the Markdown file and adds better paragraph spacing.
    """
    if not md_path: return None, "Error: Markdown file not provided."
    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            raw_md_text = f.read()
    except Exception as e:
        return None, f"Error reading Markdown file: {e}"

    md_text = add_paragraph_spacing(raw_md_text)
    content = {}
    
    intro_match = re.search(r'## \*\*Part I: Introduction \\- (.*?)\*\*(.*?)(?=## \*\*Part II:)', md_text, re.DOTALL)
    if intro_match:
        content['introduction-heading'] = intro_match.group(1).strip().replace('\n', ' ')
        content['introduction-content'] = markdown2.markdown(intro_match.group(2).strip())
    origins_match = re.search(r'## \*\*Part II: The Land of Gutium \\- (.*?)\*\*(.*?)(?=## \*\*Part III:)', md_text, re.DOTALL)
    if origins_match:
        content['origins-heading'] = "The Land of Gutium"
        content['origins-subheading'] = origins_match.group(1).strip().replace('\n', ' ')
        content['origins-content'] = markdown2.markdown(origins_match.group(2).strip())
    collapse_match = re.search(r'## \*\*Part III: The Fall of Akkad \\- (.*?)\*\*(.*?)(?=## \*\*Part IV:)', md_text, re.DOTALL)
    if collapse_match:
        content['collapse-heading'] = "The Fall of Akkad"
        content['collapse-subheading'] = collapse_match.group(1).strip().replace('\n', ' ')
        content['collapse-content'] = markdown2.markdown(collapse_match.group(2).strip())
    dynasty_match = re.search(r'## \*\*Part IV: The Gutian Dynasty \\- (.*?)\*\*(.*?)(?=## \*\*Part V:)', md_text, re.DOTALL)
    if dynasty_match:
        content['dynasty-heading'] = "The Gutian Dynasty"
        content['dynasty-subheading'] = dynasty_match.group(1).strip().replace('\n', ' ')
        dynasty_md = dynasty_match.group(2).strip()
        table_start_match = re.search(r'\| Order \|', dynasty_md)
        intro_md = dynasty_md[:table_start_match.start()] if table_start_match else dynasty_md
        table_md = dynasty_md[table_start_match.start():] if table_start_match else ''
        content['dynasty-content-intro'] = markdown2.markdown(intro_md.strip())
        kings = []
        if table_md:
            table_lines = [line.strip() for line in table_md.strip().split('\n') if line.strip().startswith('|')]
            for line in table_lines[2:]:
                cells = [cell.strip() for cell in line.split('|')]
                if len(cells) > 4:
                    name = cells[2].replace('*', '')
                    reign = cells[3]
                    attested = cells[4]
                    description = f"Reigned for {reign}. {attested} attested outside SKL."
                    kings.append({'name': name, 'reign': reign, 'description': description})
        content['dynasty-timeline'] = kings
    gudea_match = re.search(r'## \*\*Part V: Voices from the "Dark Age" \\- (.*?)\*\*(.*?)(?=## \*\*Part VI:)', md_text, re.DOTALL)
    if gudea_match:
        content['gudea-heading'] = "Voices from the \"Dark Age\""
        content['gudea-subheading'] = gudea_match.group(1).strip().replace('\n', ' ')
        content['gudea-content'] = markdown2.markdown(gudea_match.group(2).strip())
    expulsion_match = re.search(r'## \*\*Part VI: The Sumerian Renaissance \\- (.*?)\*\*(.*?)(?=## \*\*Part VII:)', md_text, re.DOTALL)
    if expulsion_match:
        content['expulsion-heading'] = "The Sumerian Renaissance"
        content['expulsion-subheading'] = expulsion_match.group(1).strip().replace('\n', ' ')
        content['expulsion-content'] = markdown2.markdown(expulsion_match.group(2).strip())
    legacy_match = re.search(r'## \*\*Part VII: Legacy and Afterlife \\- (.*?)\*\*(.*?)(?=## \*\*Part VIII:)', md_text, re.DOTALL)
    if legacy_match:
        content['legacy-heading'] = "Legacy and Afterlife"
        content['legacy-subheading'] = legacy_match.group(1).strip().replace('\n', ' ')
        content['legacy-content'] = markdown2.markdown(legacy_match.group(2).strip())
    conclusion_match = re.search(r'## \*\*Part VIII: Conclusion \\- (.*?)\*\*(.*?)(?=## \*\*Part IX:)', md_text, re.DOTALL)
    if conclusion_match:
        content['conclusion-heading'] = conclusion_match.group(1).strip().replace('\n', ' ')
        content['conclusion-content'] = markdown2.markdown(conclusion_match.group(2).strip())
    works_cited_match = re.search(r'#### \*\*Works cited\*\*(.*)', md_text, re.DOTALL)
    if works_cited_match:
        content['works-cited-heading'] = "Works Cited"
        citations_text = works_cited_match.group(1).strip()
        citation_lines = re.findall(r'^\d+\.\s+(.*?)(?=^\d+\.|$)', citations_text, re.MULTILINE | re.DOTALL)
        list_items = [f"<li id='citation-{i}' class='citation-item'>{line.strip()}</li>" for i, line in enumerate(citation_lines, 1) if line.strip()]
        list_items_html = "".join(list_items)
        ordered_list = f"<ol class='list-decimal list-inside space-y-2'>{list_items_html}</ol>"
        content['works-cited-content'] = ordered_list
    content['main-title'] = "The Gutian Enigma"
    content['main-subtitle'] = "Deconstructing the Barbarian in Ancient Mesopotamian History"
    return content, "Markdown Parsed Successfully."

def inject_content_into_html(html_path, content, image_data):
    """
    (MODIFIED FROM YOUR ORIGINAL SCRIPT)
    Injects the correctly parsed and formatted content into the HTML file.
    """
    if not html_path: return "Error: HTML file not provided."
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')
    except Exception as e:
        return f"Error reading HTML file: {e}"

    # --- Text Injection (FROM YOUR ORIGINAL SCRIPT - UNCHANGED) ---
    conclusion_container = soup.find(id='conclusion-content')
    if conclusion_container and conclusion_container.parent and 'text-center' in conclusion_container.parent.get('class', []):
        conclusion_container.parent['class'].remove('text-center')
        conclusion_container.parent['class'].append('text-left')

    for key, value in content.items():
        element = soup.find(id=key)
        if element:
            element.clear()
            if isinstance(value, str) and value.strip():
                new_soup = BeautifulSoup(value, 'html.parser')
                for child in new_soup.contents: element.append(child.extract())
            elif key == 'dynasty-timeline' and isinstance(value, list):
                timeline_container = soup.find(id='dynasty-timeline')
                if timeline_container:
                    timeline_container.clear()
                    king_list_ul = soup.new_tag('ul', attrs={'class': 'timeline-king-list', 'id': 'timeline-king-list', 'style': 'max-height: 600px; overflow-y: auto; font-size: 1.1rem;'})
                    king_details_div = soup.new_tag('div', attrs={'class': 'timeline-king-details-content', 'id': 'timeline-king-details', 'style': 'padding: 2rem; font-size: 1.1rem; line-height: 1.6;'})
                    for i, king in enumerate(value):
                        king_id = f"king-detail-{i}"
                        li = soup.new_tag('li', attrs={'class': 'timeline-king-item', 'data-target': king_id, 'style': 'padding: 1.25rem; font-size: 1.1rem; font-weight: 500;'})
                        li.string = king['name']
                        king_list_ul.append(li)
                        detail_div = soup.new_tag('div', attrs={'class': 'timeline-king-detail', 'id': king_id})
                        h3 = soup.new_tag('h3', attrs={'class': 'text-3xl mb-3', 'style': 'color: #fbbf24; font-weight: bold;'})
                        h3.string = king['name']
                        p_reign = soup.new_tag('p', attrs={'class': 'text-lg text-gray-300 mb-6', 'style': 'font-size: 1.2rem;'})
                        p_reign.string = f"Reign: {king['reign']}"
                        p_desc = soup.new_tag('p', attrs={'style': 'font-size: 1.1rem; line-height: 1.7; color: #d1d5db;'})
                        p_desc.string = king['description']
                        detail_div.extend([h3, p_reign, p_desc])
                        king_details_div.append(detail_div)
                    timeline_container.append(king_list_ul)
                    timeline_container.append(king_details_div)

    # --- Image Injection (NEW LOGIC ADDED HERE) ---
    html_dir = os.path.dirname(html_path)
    images_dir = os.path.join(html_dir, 'images')
    os.makedirs(images_dir, exist_ok=True)
    style_tag_to_update = soup.find('style')
    css_text = style_tag_to_update.string if style_tag_to_update and style_tag_to_update.string else ''

    for key, data in image_data.items():
        if data['type'] == 'img':
            desc_element = soup.find(id=f"{key}-description")
            if desc_element: desc_element.string = data.get('description', '')
            credit_element = soup.find(id=f"{key}-credit")
            if credit_element: credit_element.string = data.get('credit', '')
        
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
    
    # --- Citation Linking (FROM YOUR ORIGINAL SCRIPT - UNCHANGED) ---
    content_divs = soup.select('.content-text')
    for div in content_divs:
        html_string = str(div)
        corrected_html = re.sub(r'([,.?!])(\d+)', r'\1<sup><a href="#citation-\2" class="source-link">[\2]</a></sup>', html_string)
        if corrected_html != html_string:
            new_div = BeautifulSoup(corrected_html, 'html.parser')
            div.replace_with(new_div)

    # --- Add Timeline Script Call (FROM YOUR ORIGINAL SCRIPT - UNCHANGED) ---
    # --- Add Timeline Script Call ---
    if soup.body:
        script_tag = soup.new_tag("script")
        script_tag.string = "if(window.setupTimeline) { window.setupTimeline(); }"
        soup.body.append(script_tag)

    # --- Save (FROM YOUR ORIGINAL SCRIPT - UNCHANGED, OVERWRITES FILE) ---
    try:
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(str(soup.prettify(formatter="html5")))
    except Exception as e:
        return f"Error writing to HTML file: {e}"
    return "Injection Complete with Clickable Citations!"

# --- GUI APPLICATION ---
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
        """
        (IMPROVED UI)
        Creates a spacious two-column grid for the image widgets, making better use of horizontal space.
        """
        container = self.scrollable_image_area.scrollable_frame
        
        # Configure the container to have two equally weighted columns
        container.grid_columnconfigure(0, weight=1)
        container.grid_columnconfigure(1, weight=1)
        
        label_font = ("Helvetica", 10)

        # Enumerate through the items to get an index for grid placement
        for i, (img_id, data) in enumerate(self.image_data.items()):
            row = i // 2
            col = i % 2

            # Use a LabelFrame for each item for better visual separation
            item_frame = ttk.Labelframe(container, text=f"ID: {img_id}", padding=10)
            # Place the frame in the grid
            item_frame.grid(row=row, column=col, sticky="nsew", padx=8, pady=8)
            item_frame.grid_columnconfigure(1, weight=1) # Make column with entries expand

            # --- Left Side: Preview and Browse Button ---
            left_frame = ttk.Frame(item_frame)
            left_frame.grid(row=0, column=0, rowspan=3, sticky="n", padx=(0, 15))
            
            canvas = tk.Canvas(left_frame, width=150, height=90, bg="#ecf0f1", relief="sunken", borderwidth=1)
            canvas.pack()
            canvas.create_text(75, 45, text="Preview", fill="grey", font=("Helvetica", 10))
            
            browse_button = ttk.Button(left_frame, text="Browse...", command=lambda i=img_id: self.browse_for_image(i))
            browse_button.pack(pady=(5,0), fill='x')

            # --- Right Side: Labels and Entry Fields using a Grid ---
            # Row 0: Name
            ttk.Label(item_frame, text="Name:", font=label_font).grid(row=0, column=1, sticky="w", pady=2)
            name_entry = ttk.Entry(item_frame, font=label_font)
            name_entry.insert(0, data.get('name', 'Unnamed Image'))
            name_entry.grid(row=0, column=1, columnspan=2, sticky="ew", padx=(45,0)) # Span and pad

            # Row 1: Credit
            ttk.Label(item_frame, text="Credit:", font=label_font).grid(row=1, column=1, sticky="w", pady=2)
            credit_entry = ttk.Entry(item_frame, font=label_font)
            credit_entry.grid(row=1, column=1, columnspan=2, sticky="ew", padx=(45,0)) # Span and pad

            # Row 2: Description (only for <img> tags)
            if data['type'] == 'img':
                ttk.Label(item_frame, text="Desc:", font=label_font).grid(row=2, column=1, sticky="w", pady=2)
                desc_entry = ttk.Entry(item_frame, font=label_font)
                desc_entry.insert(0, "Description")
                desc_entry.grid(row=2, column=1, columnspan=2, sticky="ew", padx=(45,0)) # Span and pad
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
                img.thumbnail((150, 90))
                canvas = self.image_widgets[img_id]['canvas']
                photo_image = ImageTk.PhotoImage(img)
                self.photo_references[img_id] = photo_image
                canvas.delete("all")
                canvas.create_image(75, 45, image=self.photo_references[img_id])
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
                self.image_data[img_id]['description'] = widgets['desc_entry'].get()

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
