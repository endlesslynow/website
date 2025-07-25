#!/usr/bin/env python3
"""
Summary generation automation for afrinzeyton channel
"""

import os
import sqlite3
from datetime import datetime

def generate_summaries():
    """Generate summaries for afrinzeyton videos"""
    print(f"Starting summary generation for afrinzeyton")
    
    db_path = f"ax_walat_viewer_files/afrinzeyton_videos.db"
    summaries_dir = f"auto_prompt/afrinzeyton_prompts/summaries"
    
    os.makedirs(summaries_dir, exist_ok=True)
    
    if not os.path.exists(db_path):
        print(f"Database not found: {db_path}")
        return False
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    cursor.execute("SELECT title, url FROM videos")
    videos = cursor.fetchall()
    
    for title, url in videos:
        summary_file = os.path.join(summaries_dir, f"{title.replace(' ', '_')}_summary.txt")
        with open(summary_file, 'w', encoding='utf-8') as f:
            f.write(f"Summary for: {title}\n")
            f.write(f"URL: {url}\n")
            f.write(f"Generated: {datetime.now()}\n")
            f.write("\n[Summary content would be generated here]\n")
    
    conn.close()
    print(f"Generated summaries for {len(videos)} videos")
    return True

if __name__ == "__main__":
    generate_summaries()
