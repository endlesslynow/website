#!/usr/bin/env python3
"""
Transcription prompt generator for afrinzeyton channel
"""

import os
import sqlite3
from datetime import datetime

def generate_transcription_prompts():
    """Generate transcription prompts for afrinzeyton videos"""
    db_path = "ax_walat_viewer_files/afrinzeyton_videos.db"
    
    if not os.path.exists(db_path):
        print(f"Database not found: {db_path}")
        return
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    cursor.execute("SELECT title, url FROM videos")
    videos = cursor.fetchall()
    
    prompts_dir = f"auto_prompt/afrinzeyton_prompts/afrinzeyton_prompt_txts"
    os.makedirs(prompts_dir, exist_ok=True)
    
    for title, url in videos:
        prompt_file = os.path.join(prompts_dir, f"{title.replace(' ', '_')}_prompt.txt")
        with open(prompt_file, 'w', encoding='utf-8') as f:
            f.write(f"Transcription prompt for: {title}\n")
            f.write(f"URL: {url}\n")
            f.write(f"Generated: {datetime.now()}\n")
    
    conn.close()
    print(f"Generated prompts for {len(videos)} videos")

if __name__ == "__main__":
    generate_transcription_prompts()
