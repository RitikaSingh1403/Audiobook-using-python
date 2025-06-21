document.addEventListener('DOMContentLoaded', function() {
    const pdfUpload = document.getElementById('pdf-upload');
    const fileName = document.querySelector('.file-name');
    const convertBtn = document.getElementById('convert-btn');
    const playerBubble = document.querySelector('.player-bubble');
    const audioPlayer = document.getElementById('audio-player');
    const downloadBtn = document.getElementById('download-btn');
    
    let audioBlob = null;
    
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
        
        try {
            // In a real implementation, you would send to your backend
            // For GitHub Pages demo, we'll simulate with a dummy audio
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // This would come from your backend in a real app
            audioBlob = new Blob([], { type: 'audio/mp3' });
            const audioUrl = URL.createObjectURL(audioBlob);
            
            audioPlayer.src = audioUrl;
            playerBubble.classList.remove('hidden');
            
            // Scroll to player
            playerBubble.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            alert('Oops! Something went wrong. Please try again.');
            console.error(error);
        } finally {
            convertBtn.disabled = false;
            convertBtn.textContent = '✨ Convert to Audiobook';
        }
    });
    
    // Download button
    downloadBtn.addEventListener('click', function() {
        if (!audioBlob) return;
        
        const a = document.createElement('a');
        const filename = pdfUpload.files[0]?.name.replace('.pdf', '.mp3') || 'audiobook.mp3';
        
        a.href = URL.createObjectURL(audioBlob);
        a.download = filename;
        a.click();
    });
});
