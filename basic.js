document.getElementById('language').addEventListener('change', function() {
    const videoThumbnail = document.querySelector('.video-section img');
    const language = this.value;

    if (language === 'english') {
        videoThumbnail.src = 'https://via.placeholder.com/300x200.png?text=English+Video';
    } else if (language === 'hindi') {
        videoThumbnail.src = 'https://via.placeholder.com/300x200.png?text=Hindi+Video';
    }
});
