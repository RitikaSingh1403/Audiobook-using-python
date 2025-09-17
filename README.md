# 📚 PDF to Audiobook Converter

A Python script to convert PDFs to audiobooks with a cute web interface demo.

![image](https://github.com/user-attachments/assets/214b32b6-77aa-4406-8da0-8a31190be8be)

## ✨ Features

### Core Functionality
- 🔊 Convert PDF text to natural sounding speech
- ⚡ Adjustable reading speed (150-200 WPM recommended)
- 📄 Automatically skips blank pages
- 🔢 Customizable page range selection
- 🤖 Auto-selects best available voice

### Web Interface
- 🎨 Beautiful bubble-themed design
- 📁 Drag-and-drop PDF upload
- ⏳ Realistic conversion animation
- 🎧 Built-in audio player with download
- 📱 Fully responsive layout

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- PDF file to convert

### Installation
```bash
# Clone the repository
git clone https://github.com/RitikaSingh1403/Audiobook-using-python.git
cd Audiobook-using-python

# Install dependencies
pip install pyttsx3 PyPDF2 pydub
```

## 🌐 Live Demo

Experience the UI demo on GitHub Pages:  
[https://RitikaSingh1403.github.io/Audiobook-using-python/](https://ritikasingh1403.github.io/Audiobook-using-python/)


## 🛠️ For Developers

### Running Locally
```bash
git clone https://github.com/RitikaSingh1403/Audiobook-using-python.git
cd Audiobook-using-python

```
❓ FAQ

Q: Does the web demo actually convert PDFs?

A: It simulates the experience. For real conversion, run main.py locally.

Q: How do I use the Python converter?

```
# Edit these lines in main.py:
book = open('yourfile.pdf', 'rb')  # Change filename
for page_num in range(X, Y):       # Set page range
```

Q: Can I save audio output?
A: In main.py, add:

```
engine.save_to_file(text, 'output.mp3')

```
📜 License
Educational use only. No warranties provided.

Made with Python and ❤️

"A good book deserves a good voice"
