import tkinter as tk
from tkinter import filedialog, messagebox, ttk
import markdown2
from bs4 import BeautifulSoup, NavigableString
import re
import os
import json
from tkinterdnd2 import DND_FILES, TkinterDnD
from PIL import Image, ImageTk
import shutil
import ast

# --- CORE LOGIC ---

# The hard-coded path to the HTML file, as requested.
HARDCODED_HTML_PATH = r"C:\Users\Zachar\Desktop\The Website\historic_sites\tells\tells_sample.html"

def extract_image_placeholders(html_path):
    """
    (RESTORED TO ORIGINAL & STABLE)
    Finds ALL replaceable images from <img> tags with placehold.co, complex CSS styles,
    and the two separate JavaScript data arrays (timelineData and dig site layers).
    THIS FUNCTION IS NOW RESTORED TO ITS ORIGINAL, WORKING STATE.
    """
    if not html_path or not os.path.exists(html_path):
        return {}, "HTML file not found.", None

    images = {}
    
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
            soup = BeautifulSoup(html_content, 'html.parser')

        # --- 1. Find all <img> tags with placeholder sources (ORIGINAL LOGIC) ---
        placeholder_imgs = soup.find_all('img', src=re.compile(r'placehold\.co'))
        for img_tag in placeholder_imgs:
            name = img_tag.get('alt', f'Image Placeholder {len(images)}')
            key = re.sub(r'[^a-z0-9]+', '-', name, flags=re.IGNORECASE).lower().strip('-')
            if key in images: continue
            figcaption = img_tag.find_next_sibling('figcaption')
            description = figcaption.get_text(strip=True) if figcaption else ''
            images[key] = {'type': 'img', 'name': name, 'selector': f"img[alt=\"{name}\"]", 'description': description, 'old_url': img_tag['src']}

        # --- 2. Find background-images using a robust regex (ORIGINAL LOGIC) ---
        bg_image_pattern = re.compile(r"url\(['\"]?(https?://placehold\.co/[^'\")]+)['\"]?\)")
        
        matches = bg_image_pattern.findall(html_content)
        for url in matches:
            text_match = re.search(r'text=([^&]+)', url)
            name = text_match.group(1).replace('+', ' ') if text_match else f"Background Placeholder {len(images)}"
            key = re.sub(r'[^a-z0-9]+', '-', name, flags=re.IGNORECASE).lower().strip('-')
            if key not in images:
                images[key] = {'type': 'background', 'name': name, 'old_url': url}

        # --- 3. Find images within the timelineData JavaScript array (ORIGINAL LOGIC) ---
        timeline_match = re.search(r'const timelineData\s*=\s*(\[.*?\]);', html_content, re.DOTALL)
        if timeline_match:
            js_array_string = timeline_match.group(1).replace('`', '"')
            python_string = re.sub(r'([a-zA-Z0-9_]+):', r'"\1":', js_array_string)
            try:
                timeline_data = json.loads(python_string)
                for item in timeline_data:
                    item_id = item.get('id')
                    if item_id and item.get('image') and 'placehold.co' in item.get('image'):
                        images[item_id] = {'type': 'timeline', 'name': item.get('name', 'Timeline Image'), 'old_url': item.get('image')}
            except json.JSONDecodeError as e:
                print(f"Warning: Could not parse timelineData. Error: {e}")

        # --- 4. Find images within the Dig Site 'layers' JavaScript array (ORIGINAL LOGIC) ---
        dig_site_match = re.search(r'const layers\s*=\s*(\[.*?\]);', html_content, re.DOTALL)
        if dig_site_match:
            js_array_string = dig_site_match.group(1).replace("'", '"')
            python_string = re.sub(r'([a-zA-Z0-9_]+):', r'"\1":', js_array_string)
            try:
                dig_layers_data = json.loads(python_string)
                for i, item in enumerate(dig_layers_data):
                    key = f"dig-site-layer-{i}"
                    name = item.get('era', f'Dig Site Layer {i}')
                    if item.get('bg') and 'placehold.co' in item.get('bg'):
                        images[key] = {'type': 'dig_site', 'name': name, 'old_url': item.get('bg')}
            except json.JSONDecodeError as e:
                print(f"Warning: Could not parse dig site layers. Error: {e}")

    except Exception as e:
        return {}, f"Error parsing HTML for images: {e}", None

    status_message = f"Successfully extracted {len(images)} image placeholders."
    return images, status_message, soup

def parse_custom_table(md_table_text):
    """
    (STABLE) A dedicated parser for the specific format of Table 2.
    """
    lines = md_table_text.strip().split('\n')
    html = "<table class='comparison-table'>"
    header_line = lines[0]
    header_cells = [h.strip() for h in header_line.split('|') if h.strip()]
    html += "<thead><tr>"
    for cell in header_cells:
        html += f"<th>{cell}</th>"
    html += "</tr></thead>"
    html += "<tbody>"
    for line in lines[2:]:
        cells = [c.strip() for c in line.split('|') if c.strip()]
        html += "<tr>"
        for i, cell in enumerate(cells):
            html += f"<td>{'<strong>'+cell+'</strong>' if i == 0 else cell}</td>"
        html += "</tr>"
    html += "</tbody></table>"
    return html

def parse_markdown_content(md_path):
    """
    (STABLE & TAILORED)
    Parses the Markdown file, with special handling for Table 2 and paragraphs.
    """
    if not md_path: return None, "Error: Markdown file not provided."
    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            raw_md_text = f.read()
    except Exception as e:
        return None, f"Error reading Markdown file: {e}"

    processed_text = re.sub(r'(?<!\n)\n(?!\n)', '\n\n', raw_md_text)
    content = {}
    
    table_2_pattern = re.compile(r'\| Table 2:.*?\|(.*?)\| Serpent Mound.*?\|', re.DOTALL)
    table_2_match = table_2_pattern.search(processed_text)
    if table_2_match:
        table_md = table_2_match.group(0)
        content['table_2_html'] = parse_custom_table(table_md)
        processed_text = table_2_pattern.sub('', processed_text)

    section_patterns = {
        'intro': r'## \*\*Introduction: Defining the Tell as an Archaeological Phenomenon\*\*(.*?)(?=## \*\*The Anatomy of a Tell)',
        'anatomy': r'## \*\*The Anatomy of a Tell: Stratigraphy and Composition\*\*(.*?)(?=## \*\*The Engine of Accretion)',
        'human-element': r'## \*\*Human-Environment Interaction and Cultural Drivers of Tell Formation\*\*(.*?)(?=## \*\*Case Studies)',
        'comparison': r'## \*\*Distinguishing Tells from Other Anthropogenic Mounds\*\*(.*?)(?=## \*\*The Tell as a Scientific Resource)',
        'science': r'## \*\*The Tell as a Scientific Resource: Modern Investigation and Its Contributions\*\*(.*?)(?=## \*\*Conclusion)',
        'legacy': r'## \*\*Conclusion: The Enduring Legacy of City Mounds\*\*(.*?)(?=## \*\*Works Cited)',
    }

    for key, pattern in section_patterns.items():
        match = re.search(pattern, processed_text, re.DOTALL)
        if match:
            section_md = match.group(1).strip()
            content[key] = markdown2.markdown(section_md, extras=["smarty-pants", "fenced-code-blocks"])

    works_cited_match = re.search(r'#### \*\*Works cited\*\*(.*)', processed_text, re.DOTALL)
    if works_cited_match:
        citations_text = works_cited_match.group(1).strip()
        citation_lines = re.findall(r'^\d+\.\s+(.*?)(?=^\d+\.|\Z)', citations_text, re.MULTILINE | re.DOTALL)
        list_items = [f"<li id='citation-{i}' class='citation-item mb-2'>{line.strip().replace('  ', ' ')}</li>" for i, line in enumerate(citation_lines, 1) if line.strip()]
        content['works_cited_html'] = f"<ol class='list-decimal list-inside'>{ ''.join(list_items) }</ol>"

    return content, "Markdown parsed successfully." if content else "Could not parse Markdown."

def inject_content_into_html(html_path, content, image_data, soup):
    """
    (STABLE with Image Processing and REVERTED Text Logic)
    Injects content, PROCESSES AND OVERWRITES images, and applies all final formatting fixes.
    """
    if not html_path: return "Error: HTML file not provided."

    # --- Text Content Injection ---
    injection_map = {
        'intro': {'html': content.get('intro'), 'container': '#intro .content-text'},
        'anatomy': {'html': content.get('anatomy'), 'container': '#anatomy .content-text'},
        'human-element': {'html': content.get('human-element'), 'container': '#human-element .content-text'},
        'comparison': {'html': content.get('comparison'), 'container': '#comparison .grid > div:first-child'},
        'science': {'html': content.get('science'), 'container': '#science .content-text'},
        'legacy': {'html': content.get('legacy'), 'container': '#legacy .content-text'},
    }

    for data in injection_map.values():
        if data['html']:
            container = soup.select_one(data['container'])
            if container:
                container.clear()
                container.append(BeautifulSoup(data['html'], 'html.parser'))
    
    if 'table_2_html' in content:
        table_placeholder = soup.select_one('#comparison .comparison-table')
        if table_placeholder:
            table_placeholder.replace_with(BeautifulSoup(content['table_2_html'], 'html.parser'))

    # --- Alignment and Header Fixes ---
    for container in soup.select('.content-text'):
        if container.parent.get('id') == 'intro':
            container['class'] = [c for c in container.get('class', []) if c != 'text-center'] + ['text-left']
        for h3 in container.find_all('h3'):
            h3['class'] = h3.get('class', []) + ['text-3xl', 'mb-4']

    # --- Works Cited Section Creation ---
    if content.get('works_cited_html'):
        if not soup.select_one('#works-cited'):
            footer = soup.find('footer')
            if footer:
                works_cited_section = soup.new_tag('section', id='works-cited', **{'class': 'py-20 md:py-28 bg-[#1F2937]'})
                container_div = soup.new_tag('div', **{'class': 'container mx-auto px-6 max-w-4xl content-text text-left'})
                heading_h2 = soup.new_tag('h2', **{'class': 'text-4xl md:text-5xl mb-8'})
                heading_h2.string = "Works Cited"
                container_div.append(heading_h2)
                container_div.append(BeautifulSoup(content['works_cited_html'], 'html.parser'))
                works_cited_section.append(container_div)
                footer.insert_before(works_cited_section)

    # --- Image Processing and Injection ---
    html_string = str(soup)
    html_dir = os.path.dirname(html_path)
    images_dir = os.path.join(html_dir, 'images')
    os.makedirs(images_dir, exist_ok=True)

    for data in image_data.values():
        if data.get('new_src_path'):
            sanitized_name = re.sub(r'[^\w\.-]', '_', data.get('name', 'image'))
            img_filename = f"{sanitized_name}.jpg"
            img_save_path = os.path.join(images_dir, img_filename)
            
            try:
                with Image.open(data['new_src_path']) as img:
                    if img.width > 1920:
                        aspect_ratio = img.height / img.width
                        new_height = int(1920 * aspect_ratio)
                        img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    img.save(img_save_path, 'jpeg', quality=85, optimize=True)
            except Exception as e:
                print(f"Error processing image {data['new_src_path']}: {e}")
                continue

            relative_path = os.path.join('images', img_filename).replace('\\', '/')
            
            if data.get('old_url'):
                html_string = html_string.replace(data['old_url'], relative_path)
    
    soup = BeautifulSoup(html_string, 'html.parser')

    # --- Image Description and Credit Injection ---
    for data in image_data.values():
        if data.get('type') == 'img' and data.get('selector'):
            img_tag = soup.select_one(data['selector'])
            if img_tag:
                figcaption = img_tag.find_next_sibling('figcaption')
                if figcaption:
                    figcaption.clear()
                    if data.get('description'):
                        figcaption.append(NavigableString(data['description']))
                    if data.get('credit'):
                        br_tag = soup.new_tag('br')
                        em_tag = soup.new_tag('em', **{'class': 'text-gray-400'})
                        em_tag.string = f"Credit: {data['credit']}"
                        if data.get('description'):
                            figcaption.append(br_tag)
                        figcaption.append(em_tag)

    # --- REVERTED: Final, Correct Citation Link Processing ---
    for container in soup.select('.content-text'):
        for p_tag in container.find_all('p'):
            for child in list(p_tag.children):
                if isinstance(child, NavigableString):
                    # THIS LINE HAS BEEN REVERTED TO THE ORIGINAL SCRIPT'S LOGIC
                    new_html = re.sub(r'(?<!\d)([,.?!])(\d+)', r'\1<sup><a href="#citation-\2" class="text-amber-400 hover:underline">[\2]</a></sup>', str(child))
                    if new_html != str(child):
                        child.replace_with(BeautifulSoup(new_html, 'html.parser'))

    # --- Save Final HTML ---
    try:
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(str(soup.prettify(formatter="html5")))
    except Exception as e:
        return f"Error writing to HTML file: {e}"
    return "Injection Complete! Images optimized and all content updated."


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
        self.geometry("950x700")
        self.configure(bg="#2c3e50")

        self.md_path = ""
        self.image_data = {}
        self.image_widgets = {}
        self.photo_references = {}
        self.modified_soup = None

        style = ttk.Style(self)
        style.theme_use("clam")
        style.configure("TLabel", background="#2c3e50", foreground="white", font=("Helvetica", 10))
        style.configure("TButton", background="#3498db", foreground="white", font=("Helvetica", 10, "bold"), borderwidth=0, padding=10)
        style.map("TButton", background=[("active", "#2980b9")])
        style.configure("TFrame", background="#2c3e50")
        style.configure("TLabelframe", background="#34495e", bordercolor="#34495e", padding=10)
        style.configure("TLabelframe.Label", background="#34495e", foreground="white", font=("Helvetica", 11, "bold"))

        main_frame = ttk.Frame(self, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)
        main_frame.grid_columnconfigure(0, weight=1)
        main_frame.grid_rowconfigure(1, weight=1)

        top_frame = ttk.Frame(main_frame)
        top_frame.grid(row=0, column=0, sticky="ew", pady=5)
        top_frame.grid_columnconfigure(0, weight=1)

        self.md_drop_zone = tk.Label(top_frame, text="Drag and Drop 'Tell Formation and Significance.md' Here", bg="#34495e", fg="white", font=("Helvetica", 12), relief="solid", borderwidth=2, pady=20)
        self.md_drop_zone.pack(fill='x', expand=True, side='left', padx=(0, 10))
        self.md_drop_zone.drop_target_register(DND_FILES)
        self.md_drop_zone.dnd_bind('<<Drop>>', self.handle_md_drop)

        self.inject_button = ttk.Button(top_frame, text="Inject Content", command=self.run_injection)
        self.inject_button.pack(side='right', fill='y')

        self.image_labelframe = ttk.Labelframe(main_frame, text="Image Placeholders")
        self.image_labelframe.grid(row=1, column=0, sticky="nsew", pady=10)
        self.scrollable_image_area = ScrollableFrame(self.image_labelframe)
        self.scrollable_image_area.pack(fill="both", expand=True)
        
        self.status_var = tk.StringVar(value="Ready. HTML file is pre-loaded. Drop the Markdown file.")
        self.status_bar = ttk.Label(self, textvariable=self.status_var, relief=tk.SUNKEN, anchor=tk.W, padding=5)
        self.status_bar.pack(side=tk.BOTTOM, fill=tk.X)

        self.load_html_data()

    def handle_md_drop(self, event):
        path = event.data.strip('{}')
        if path.lower().endswith(".md"):
            self.md_path = path
            self.md_drop_zone.config(text=f"Loaded: {os.path.basename(path)}", bg="#27ae60")
            self.status_var.set(f"Markdown file loaded. Ready to inject.")
        else:
            self.status_var.set("Error: Please drop a valid .md file.")
            self.md_drop_zone.config(bg="#c0392b")

    def load_html_data(self):
        if not os.path.exists(HARDCODED_HTML_PATH):
            messagebox.showerror("Fatal Error", f"The required HTML file was not found at:\n{HARDCODED_HTML_PATH}\nPlease ensure the file exists and restart the application.")
            self.destroy()
            return

        for widget in self.scrollable_image_area.scrollable_frame.winfo_children(): widget.destroy()
        self.image_widgets = {}; self.photo_references = {}

        self.status_var.set("Loading image placeholders from HTML template...")
        self.update_idletasks()
        
        self.image_data, message, self.modified_soup = extract_image_placeholders(HARDCODED_HTML_PATH)
        self.status_var.set(message)
        
        if self.image_data: self.create_image_widgets()

    def create_image_widgets(self):
        container = self.scrollable_image_area.scrollable_frame
        container.grid_columnconfigure(0, weight=1)
        label_font = ("Helvetica", 10)

        # Sort the image data for a consistent UI layout
        sorted_image_data = sorted(self.image_data.items(), key=lambda item: item[1]['name'])

        for i, (key, data) in enumerate(sorted_image_data):
            item_frame = ttk.Labelframe(container, text=f"ID: {key}", padding=(10, 5))
            item_frame.grid(row=i, column=0, sticky="ew", padx=5, pady=8)
            item_frame.grid_columnconfigure(1, weight=1)
            
            canvas = tk.Canvas(item_frame, width=200, height=120, bg="#ecf0f1", relief="sunken", borderwidth=1)
            canvas.grid(row=0, column=0, rowspan=4, padx=(0, 15))
            canvas.create_text(100, 60, text="Drop Image or Browse", fill="grey", font=("Helvetica", 10))
            
            ttk.Label(item_frame, text="Display Name:", font=label_font).grid(row=0, column=1, sticky="w", padx=5)
            name_entry = ttk.Entry(item_frame, font=label_font)
            name_entry.insert(0, data.get('name', 'Unnamed Image'))
            name_entry.grid(row=0, column=2, sticky="ew", padx=5)

            # --- WIDGETS FOR DESCRIPTION AND CREDIT ---
            desc_entry = None
            credit_entry = None

            if data.get('type') == 'img':
                ttk.Label(item_frame, text="Description:", font=label_font).grid(row=1, column=1, sticky="nw", padx=5)
                desc_entry = tk.Text(item_frame, height=3, width=30, wrap=tk.WORD, font=label_font)
                desc_entry.insert("1.0", data.get('description', ''))
                desc_entry.grid(row=1, column=2, sticky="ew", padx=5)

                ttk.Label(item_frame, text="Credit:", font=label_font).grid(row=2, column=1, sticky="w", padx=5)
                credit_entry = ttk.Entry(item_frame, font=label_font)
                credit_entry.grid(row=2, column=2, sticky="ew", padx=5)
            
            browse_button = ttk.Button(item_frame, text="Browse...", command=lambda k=key: self.browse_for_image(k))
            browse_button.grid(row=3, column=1, columnspan=2, sticky='ew', pady=(10,0), padx=5)

            self.image_widgets[key] = {
                'canvas': canvas, 
                'name_entry': name_entry, 
                'desc_entry': desc_entry, 
                'credit_entry': credit_entry
            }

    def browse_for_image(self, key):
        file_path = filedialog.askopenfilename(filetypes=[("Image Files", "*.jpg *.jpeg *.png *.gif *.bmp *.tiff"), ("All files", "*.*")])
        if not file_path: return
        self.image_data[key]['new_src_path'] = file_path
        try:
            with Image.open(file_path) as img:
                img.thumbnail((200, 120))
                canvas = self.image_widgets[key]['canvas']
                photo_image = ImageTk.PhotoImage(img)
                self.photo_references[key] = photo_image
                canvas.delete("all")
                canvas.create_image(100, 60, image=self.photo_references[key])
        except Exception as e:
            messagebox.showerror("Image Error", f"Could not load image: {e}")

    def run_injection(self):
        if not self.md_path:
            messagebox.showerror("Error", "Please drop the Markdown file before injecting.")
            return
        if not self.modified_soup:
            messagebox.showerror("Error", "HTML data not loaded. Please restart the application.")
            return
        
        self.status_var.set("Parsing Markdown...")
        self.update_idletasks()
        content, message = parse_markdown_content(self.md_path)
        self.status_var.set(message)
        if not content:
            messagebox.showerror("Markdown Parsing Error", message)
            return

        # --- CAPTURE ALL DATA FROM GUI ---
        for key, widgets in self.image_widgets.items():
            self.image_data[key]['name'] = widgets['name_entry'].get()
            if widgets.get('desc_entry'):
                self.image_data[key]['description'] = widgets['desc_entry'].get("1.0", tk.END).strip()
            if widgets.get('credit_entry'):
                 self.image_data[key]['credit'] = widgets['credit_entry'].get()

        self.status_var.set("Injecting content and applying final formatting...")
        self.update_idletasks()
        
        result_message = inject_content_into_html(HARDCODED_HTML_PATH, content, self.image_data, self.modified_soup)

        self.status_var.set(result_message)
        if "Complete" in result_message:
            messagebox.showinfo("Success", result_message)
        else:
            messagebox.showerror("Injection Error", result_message)

if __name__ == "__main__":
    app = App()
    app.mainloop()
