import pyttsx3
import PyPDF2
import os
from pydub import AudioSegment
import io

def pdf_to_audiobook(pdf_path, output_path="output.mp3", start_page=6):
    """Convert PDF to audiobook and save as MP3"""
    try:
        # Initialize TTS engine
        engine = pyttsx3.init()
        
        # Configure voice (try to find Zira)
        voices = engine.getProperty('voices')
        for voice in voices:
            if "Zira" in voice.name:
                engine.setProperty('voice', voice.id)
                break
        
        # Set speech properties
        engine.setProperty('rate', 170)
        engine.setProperty('volume', 0.9)
        
        # Open PDF
        with open(pdf_path, 'rb') as book:
            pdf_reader = PyPDF2.PdfReader(book)
            total_pages = len(pdf_reader.pages)
            
            # Temporary audio files
            temp_files = []
            
            for page_num in range(start_page, total_pages):
                page = pdf_reader.pages[page_num]
                text = page.extract_text()
                
                if not text.strip():
                    continue
                
                clean_text = ' '.join(text.split())
                print(f"Processing Page {page_num + 1}/{total_pages}")
                
                # Save each page to temporary WAV file
                temp_file = f"temp_page_{page_num}.wav"
                engine.save_to_file(clean_text, temp_file)
                engine.runAndWait()
                temp_files.append(temp_file)
            
            # Combine all WAV files into one MP3
            combined = AudioSegment.empty()
            for temp_file in temp_files:
                combined += AudioSegment.from_wav(temp_file)
                os.remove(temp_file)  # Clean up
            
            combined.export(output_path, format="mp3")
            print(f"Audiobook saved to {output_path}")
            return output_path
            
    except Exception as e:
        print(f"Error: {str(e)}")
        return None
