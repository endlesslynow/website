#!/usr/bin/env python3
"""
New videos processing configuration
"""

CHANNELS_TO_PROCESS = [
    {
        "name": "Afrinzeyton",
        "source_url": "https://www.youtube.com/@Afrinzeyton",
        "output_folder_name": "afrinzeyton_videos",
        "db_file_path": "C:/Users/Zachar/Desktop/programs I made/python programs/ax_walat_viewer_files/afrinzeyton_videos.db"
    },
]

def process_new_videos():
    """Process new videos from configured channels"""
    for channel in CHANNELS_TO_PROCESS:
        print(f"Processing {channel['name']}")

if __name__ == "__main__":
    process_new_videos()
