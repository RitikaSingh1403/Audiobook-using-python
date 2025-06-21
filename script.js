document.addEventListener('DOMContentLoaded', function() {
    const pdfUpload = document.getElementById('pdf-upload');
    const fileName = document.querySelector('.file-name');
    const convertBtn = document.getElementById('convert-btn');
    const playerBubble = document.querySelector('.player-bubble');
    const audioPlayer = document.getElementById('audio-player');
    const downloadBtn = document.getElementById('download-btn');
    
    // Handle file selection
    pdfUpload.addEventListener('change', function() {
        if (this.files.length > 0) {
            fileName.textContent = this.files[0].name;
            convertBtn.disabled = false;
        } else {
            fileName.textContent = 'No file selected';
            convertBtn.disabled = true;
        }
    });
    
    // Convert button click
    convertBtn.addEventListener('click', async function() {
        if (!pdfUpload.files.length) return;
        
        convertBtn.disabled = true;
        convertBtn.textContent = 'Converting... ✨';
        playerBubble.classList.add('hidden');
        
        try {
            const formData = new FormData();
            formData.append('pdf', pdfUpload.files[0]);
            
            // In a real deployment, this would point to your Flask backend
            // For GitHub Pages demo, we'll use a mock implementation
            const audioBlob = await mockConversion(pdfUpload.files[0]);
            const audioUrl = URL.createObjectURL(audioBlob);
            
            audioPlayer.src = audioUrl;
            playerBubble.classList.remove('hidden');
            
            // Scroll to player
            playerBubble.scrollIntoView({ behavior: 'smooth' });
            
            // Set up download
            downloadBtn.onclick = () => {
                const a = document.createElement('a');
                a.href = audioUrl;
                a.download = pdfUpload.files[0].name.replace('.pdf', '.mp3');
                a.click();
            };
            
        } catch (error) {
            alert('Conversion failed. Please try again.');
            console.error(error);
        } finally {
            convertBtn.disabled = false;
            convertBtn.textContent = '✨ Convert to Audiobook';
        }
    });
    
    // Mock conversion for GitHub Pages demo
    async function mockConversion(pdfFile) {
        // In a real implementation, you would:
        // 1. Send the PDF to your backend
        // 2. Backend processes it with main.py
        // 3. Returns the MP3 file
        
        // For demo purposes, we'll return a short silent MP3
        return new Promise((resolve) => {
            // This would be the actual MP3 from your backend
            const silentMP3 = new Blob([/* binary MP3 data */], { type: 'audio/mp3' });
            
            // Simulate processing delay
            setTimeout(() => resolve(silentMP3), 3000);
        });
    }
});
