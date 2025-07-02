# -*- coding: utf-8 -*-
import os
from bs4 import BeautifulSoup, NavigableString

# --- Configuration ---
# 1. Define the full paths to your landing page files.
#    Use raw strings (r"...") on Windows to avoid issues with backslashes.
#    Update these paths if you move your files.
FILE_PATHS = [
    r"C:\Users\Zachar\Desktop\The Website\hopkins_method\ukrainian\00_ukrainian_landing.html",
    r"C:\Users\Zachar\Desktop\The Website\hopkins_method\turkish\00_turkish_landing.html",
    r"C:\Users\Zachar\Desktop\The Website\hopkins_method\spanish\00_spanish_landing.html",
    r"C:\Users\Zachar\Desktop\The Website\hopkins_method\kurmanji_kurdish\00_kurmanji_landing.html",
    r"C:\Users\Zachar\Desktop\The Website\hopkins_method\arabic\00_arabic_landing.html",
]

# 2. Map the language folder name to the link prefix.
#    This allows the script to create the correct link (e.g., ua_unit_2.html).
LANGUAGE_PREFIX_MAP = {
    "ukrainian": "ua",
    "turkish": "tr",
    "spanish": "es",
    "kurmanji_kurdish": "ku",
    "arabic": "ar",
}

def create_new_button(unit_number, unit_subtitle, sentence_range, href_link):
    """
    Creates a new lesson button as a BeautifulSoup Tag object.
    This function constructs the HTML structure for the button, making it
    easy to insert into the main document.
    """
    # Create the main anchor tag <a> which is the button itself
    button_tag = BeautifulSoup(f'<a href="{href_link}" class="lesson-button"></a>', 'html.parser').a

    # Create the title container div
    title_div = BeautifulSoup('<div class="lesson-title"></div>', 'html.parser').div
    
    # Create the two lines of the title
    line1_span = BeautifulSoup(f'<span class="line1">Unit {unit_number}</span>', 'html.parser').span
    line2_span = BeautifulSoup(f'<span class="line2">{unit_subtitle}</span>', 'html.parser').span
    
    # Add the title lines to the title container
    title_div.append(line1_span)
    title_div.append(line2_span)

    # Create the description paragraph
    description_p = BeautifulSoup(f'<p class="lesson-description">Sentences for absolute beginners: {sentence_range}</p>', 'html.parser').p

    # Add the title container and the description to the main button
    button_tag.append(title_div)
    button_tag.append(description_p)

    return button_tag


def update_landing_pages(unit_number, unit_subtitle):
    """
    Main function to loop through HTML files, parse them, and add the new button.
    """
    print("Starting to update landing pages...\n")
    
    # --- Automatic Calculation ---
    # Calculate the sentence range based on the unit number.
    try:
        num = int(unit_number)
        start_sentence = (num - 1) * 50 + 1
        end_sentence = num * 50
        sentence_range = f"{start_sentence}-{end_sentence}"
    except ValueError:
        print("Error: Unit number must be an integer.")
        return

    # --- File Processing Loop ---
    for file_path in FILE_PATHS:
        try:
            # Check if the file exists before trying to open it
            if not os.path.exists(file_path):
                print(f"⚠️  WARNING: File not found, skipping: {file_path}")
                continue

            # Get the language from the directory path to find the prefix
            # e.g., "ukrainian" from "...\\ukrainian\\00_ukrainian_landing.html"
            language_folder = os.path.basename(os.path.dirname(file_path))
            prefix = LANGUAGE_PREFIX_MAP.get(language_folder)

            if not prefix:
                print(f"⚠️  WARNING: No language prefix found for '{language_folder}', skipping file: {file_path}")
                continue

            # Construct the correct href for the new unit page
            href_link = f"{prefix}_unit_{unit_number}.html"

            # Open and read the file with UTF-8 encoding, crucial for special characters
            with open(file_path, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')

            # Find the grid where the buttons are located
            lesson_grid = soup.find('div', class_='lesson-grid')

            if not lesson_grid:
                print(f"ERROR: Could not find '<div class=\"lesson-grid\">' in {file_path}. Skipping.")
                continue

            # Create the new button element using our helper function
            new_button = create_new_button(unit_number, unit_subtitle, sentence_range, href_link)
            
            # Add a newline character before appending the button for cleaner HTML
            lesson_grid.append("\n            ")
            lesson_grid.append(new_button)
            
            # Write the modified HTML back to the file, ensuring UTF-8
            with open(file_path, 'w', encoding='utf-8') as f:
                # prettify() formats the HTML to be readable
                f.write(str(soup.prettify()))

            print(f"✅ Successfully updated: {os.path.basename(file_path)}")

        except Exception as e:
            print(f"❌ FAILED to update {file_path}. Error: {e}")

    print("\n--- All files processed. ---")


def delete_landing_page_buttons(unit_number_to_delete):
    """
    Finds and deletes a specific lesson button from all landing pages.
    """
    print(f"\nStarting to delete buttons for Unit {unit_number_to_delete}...\n")

    # --- File Processing Loop ---
    for file_path in FILE_PATHS:
        try:
            if not os.path.exists(file_path):
                print(f"⚠️  WARNING: File not found, skipping: {file_path}")
                continue

            # Open and read the file with UTF-8 encoding
            with open(file_path, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')

            # Find the grid where the buttons are located
            lesson_grid = soup.find('div', class_='lesson-grid')
            if not lesson_grid:
                print(f"ERROR: Could not find '<div class=\"lesson-grid\">' in {file_path}. Skipping.")
                continue

            # Find the specific button to remove
            button_found = False
            for button in lesson_grid.find_all('a', class_='lesson-button'):
                unit_span = button.find('span', class_='line1')
                # Check if the span exists and its text matches the target unit
                if unit_span and unit_span.get_text(strip=True) == f"Unit {unit_number_to_delete}":
                    # Remove the whitespace/newline text node before the button for cleaner HTML
                    previous_sibling = button.previous_sibling
                    if previous_sibling and isinstance(previous_sibling, NavigableString) and previous_sibling.strip() == '':
                        previous_sibling.decompose()
                    
                    button.decompose() # This removes the button tag and its contents
                    button_found = True
                    break # Exit the loop once the button is found and removed

            if button_found:
                # Write the modified HTML back to the file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(str(soup.prettify()))
                print(f"✅ Successfully deleted Unit {unit_number_to_delete} button from: {os.path.basename(file_path)}")
            else:
                print(f"ℹ️  Button for Unit {unit_number_to_delete} not found in: {os.path.basename(file_path)}")

        except Exception as e:
            print(f"❌ FAILED to update {file_path}. Error: {e}")

    print("\n--- All files processed. ---")


if __name__ == "__main__":
    # --- User Input ---
    print("--- Hopkins Method Button Manager ---")
    
    # Ask the user if they want to add or delete
    choice = input("Do you want to [A]dd or [D]elete a button? ").strip().upper()

    if choice == 'A':
        print("\n--- Create New Button ---")
        unit_num_input = input("Enter the new Unit Number (e.g., 2): ")
        unit_subtitle_input = input("Enter the new Unit Subtitle (e.g., Core Vocabulary): ")
        
        if unit_num_input and unit_subtitle_input:
            update_landing_pages(unit_num_input, unit_subtitle_input)
        else:
            print("Both unit number and subtitle are required. Exiting.")

    elif choice == 'D':
        print("\n--- Delete Existing Button ---")
        unit_num_to_delete = input("Enter the Unit Number to delete (e.g., 3): ")

        if unit_num_to_delete:
            # Confirm deletion to prevent accidents
            confirm = input(f"Are you sure you want to delete all 'Unit {unit_num_to_delete}' buttons? [y/n]: ").strip().lower()
            if confirm == 'y':
                delete_landing_page_buttons(unit_num_to_delete)
            else:
                print("Deletion cancelled. Exiting.")
        else:
            print("Unit number is required. Exiting.")
    
    else:
        print("Invalid choice. Please enter 'A' or 'D'. Exiting.")
