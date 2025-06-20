# 📚 PDF to Audiobook Converter  
*A simple Python script to turn your textbooks into listenable content*

## ✨ Features
- 🔊 Text-to-speech conversion for PDFs
- ⚡ Adjustable reading speed (150-200 WPM recommended)
- 📄 Skip blank pages automatically
- 🔢 Select specific page ranges
- 🤖 Auto voice selection (prefers natural-sounding voices)

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- PDF file you want to convert

### Installation
```bash
# Clone the repository
git clone https://github.com/user848403/PDFtoAudio.git
cd PDFtoAudio

# Install dependencies
pip install pyttsx3 PyPDF2
```

Basic Usage

Place your PDF in the project folder

Open main.py and edit these lines:
```
book = open('bond.pdf', 'rb')  # Change 'bond.pdf' to your filename
for page_num in range(6, total_pages):  # Change 6 to your start page
```

Run the script:
```
python main.py
```


🌍 Cross-Platform Notes

Windows: Best voice quality (uses Zira/Mark voices)

macOS: Uses system voices (may need additional setup)

Linux: Requires speech-dispatcher or espeak


❓ FAQ

Q: Can I save the audio as an MP3 file?

A: Not currently, but you can add this functionality using:
```bash
engine.save_to_file(text, 'output.mp3')
```

Q: Why is my PDF not being read correctly?

A: This works best with text-based PDFs. Scanned documents won't work.

📜 License

This project is shared publicly for educational purposes. No warranties provided.

Made with Python and ❤️ - Feel free to contribute!

