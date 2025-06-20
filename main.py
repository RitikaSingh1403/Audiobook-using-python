import pyttsx3
import PyPDF2

# Initialize TTS with Zira's voice (female)
engine = pyttsx3.init()
voices = engine.getProperty('voices')

# Auto-select Zira if available, else first voice
for voice in voices:
    if "Zira" in voice.name:
        engine.setProperty('voice', voice.id)
        break

# Smoother speech settings
engine.setProperty('rate', 170)  # Optimal speed (160-180 for clarity)
engine.setProperty('volume', 0.9)  # Slightly below max to avoid distortion

# Open PDF
book = open('bond.pdf', 'rb')
pdf_reader = PyPDF2.PdfReader(book)
total_pages = len(pdf_reader.pages)

# Read from page 6 onwards (adjust as needed)
for page_num in range(6, total_pages):
    page = pdf_reader.pages[page_num]
    text = page.extract_text()

    if not text.strip():
        continue  # Skip empty pages

    # Clean text (remove extra spaces/newlines)
    clean_text = ' '.join(text.split())

    # Speak smoothly
    print(f"Reading Page {page_num + 1}/{total_pages}")
    engine.say(clean_text)
    engine.runAndWait()  # Ensures no overlap

book.close()
print(" Finished reading!")