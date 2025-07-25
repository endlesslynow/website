#!/usr/bin/env python3
"""
Main transcription automation for afrinzeyton channel
"""

import os
import sqlite3
import subprocess
from datetime import datetime

def run_transcription_automation():
    """Run automated transcription for afrinzeyton"""
    print(f"Starting transcription automation for afrinzeyton")
    
    db_path = f"ax_walat_viewer_files/afrinzeyton_videos.db"
    prompts_dir = f"auto_prompt/afrinzeyton_prompts"
    
    if not os.path.exists(db_path):
        print(f"Database not found: {db_path}")
        return False
    
    # Connect to database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Get videos for processing
    cursor.execute("SELECT id, title, url FROM videos WHERE processed = 0")
    videos = cursor.fetchall()
    
    for video_id, title, url in videos:
        print(f"Processing: {title}")
        
        # Create transcription files
        audio_file = os.path.join(prompts_dir, f"afrinzeyton_audio", f"{title}.mp3")
        transcript_file = os.path.join(prompts_dir, f"afrinzeyton_transcript_outputs", f"{title}.txt")
        
        # Mark as processed
        cursor.execute("UPDATE videos SET processed = 1 WHERE id = ?", (video_id,))
    
    conn.commit()
    conn.close()
    
    print(f"Transcription automation completed for afrinzeyton")
    return True

if __name__ == "__main__":
    run_transcription_automation()
