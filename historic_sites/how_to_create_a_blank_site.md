# Guide: How to Create an Injectable HTML Template

This guide explains the process of converting a standard, content-filled HTML file (like a website prototype) into a reusable template that can be dynamically populated with content using your Python injection script.

### The Core Principle: Separation of Structure and Content

The fundamental goal is to separate the website's **structure** (the layout, design, CSS, and static elements) from its **content** (the text, titles, and images that change).

Your Python script works by finding specific `id` attributes in an HTML file and injecting content into them. It **does not** read the existing text in the HTML. It finds a tag with an ID, erases whatever is inside it, and replaces it with the new content from your Markdown file.

---

## Step-by-Step Conversion Process

Follow these steps to turn any finished HTML page into a compatible template.

### Step 1: Identify Your Content vs. Your Structure

First, look at your finished HTML page and decide which parts are which.

* **Dynamic Content (to be injected):**
    * The main title and subtitle.
    * All section headings and subheadings.
    * All paragraphs of text.
    * Image sources and their descriptions/captions.
    * Lists that are generated from text (like a "Works Cited" section).

* **Structure & Static Content (to be kept):**
    * The overall HTML layout (`<header>`, `<footer>`, `<main>`, etc.).
    * Navigation bars.
    * JavaScript-powered features you want to keep (like the climate chart and timeline).
    * Static text that will never change, such as a credit line in the footer.

### Step 2: Assign Unique `id`s to Dynamic Content Containers

Go through your HTML file and find the tags that hold the **dynamic content** you identified in Step 1. Your task is to give each of these tags a unique and descriptive `id`.

**Example: A Heading**
* **Before:**
    ```html
    <h2 class="text-3xl md:text-4xl">Part I: The Modern Climate and its Recent Historical Context</h2>
    ```
* **After (adding the `id`):**
    ```html
    <h2 id="part1-heading" class="text-3xl md:text-4xl">Part I: The Modern Climate and its Recent Historical Context</h2>
    ```

**Example: A Block of Text**
For paragraphs, it's often best to wrap them in a single `<div>` that can be targeted.
* **Before:**
    ```html
    <p>The climate of Afrin is definitively classified...</p>
    <p>This cycle of winter moisture and summer drought...</p>
    ```
* **After (wrapping in a `div` with an `id`):**
    ```html
    <div id="part1-content">
        <p>The climate of Afrin is definitively classified...</p>
        <p>This cycle of winter moisture and summer drought...</p>
    </div>
    ```

### Step 3: Blank the Dynamic Content Containers

Once all your dynamic content containers have `id`s, the next step is to **delete the content inside them**, leaving the empty tags. This creates the "blank" template.

**Example: A Heading**
* **Before:**
    ```html
    <h2 id="part1-heading" class="text-3xl md:text-4xl">Part I: The Modern Climate...</h2>
    ```
* **After (blanked):**
    ```html
    <h2 id="part1-heading" class="text-3xl md:text-4xl"></h2>
    ```

**Example: A Block of Text**
* **Before:**
    ```html
    <div id="part1-content">
        <p>The climate of Afrin is definitively classified...</p>
        <p>This cycle of winter moisture and summer drought...</p>
    </div>
    ```
* **After (blanked):**
    ```html
    <div id="part1-content"></div>
    ```

### Step 4: Add Static Content and Prepare Special Elements

This is where you handle everything else.

* **Adding Static Content (New Section):** For content that should always be on the page and never changes, simply add it directly to your template. It does not need an `id` for injection. This is perfect for a credit line.

    **Example: Adding a Credit Line to the Footer**
    ```html
    <footer>
        <!-- ... other footer content ... -->

        <!-- Add the static credit line directly -->
        <p class="mt-12 text-center text-gray-400">
            Created by Zachariah Hopkins : <a href="[https://www.zachariahhopkins.com](https://www.zachariahhopkins.com)" target="_blank" class="text-blue-400 hover:text-blue-300 underline">[www.zachariahhopkins.com](https://www.zachariahhopkins.com)</a>
        </p>
    </footer>
    ```

* **Images and Captions:** Even if you keep the placeholder images and text, you must give them `id`s so your script *can* target them.
    ```html
    <figure class="image-figure">
        <!-- Add an ID to the img tag -->
        <img src="[https://placehold.co/](https://placehold.co/)..." alt="..." id="ottoman-era-image">
        
        <!-- Add an ID to the figcaption tag -->
        <figcaption id="ottoman-era-image-caption">The LIA created immense environmental challenges...</figcaption>
    </figure>
    ```

* **Lists (like Works Cited):** If a list is generated from your Markdown, replace the entire list in the HTML with a single, empty parent tag.
    * **Before (a populated list):**
        ```html
        <ol class="list-decimal ...">
            <li>First citation...</li>
            <li>Second citation...</li>
        </ol>
        ```
    * **After (a blank target):**
        ```html
        <ol id="works-cited-content" class="list-decimal ..."></ol>
        ```

### Step 5: Adapt Your Python Script

The final step is to make sure your Python script's output matches the template you just created.

1.  **Parsing Logic:** The part of your script that reads the Markdown file must be updated to look for the sections of your *new* document.
2.  **Dictionary Keys:** The keys in the dictionary your script generates **must exactly match the `id`s** you created in your HTML template.

* If your HTML has `<div id="conclusion-content"></div>`, your Python script must generate a dictionary entry that looks like: `{'conclusion-content': '<p>This is the conclusion text...</p>'}`.

By following this process, you can efficiently adapt any website design to work with your content injection system.

