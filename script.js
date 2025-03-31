const initialText = document.getElementById('initial-text');
const content = document.getElementById('content');
const sections = document.querySelectorAll('.poem-section, .message-section, #mirror-section');
const mirrorText = document.getElementById('mirror-text');

initialText.addEventListener('click', () => {
    initialText.style.display = 'none';
    content.classList.remove('hidden');
    checkScroll(); // Check visibility immediately after showing content
});

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8; // 80% of viewport height
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
            if (section.id === 'mirror-section' && !section.dataset.messageShown) {
                typeWriter("The Cinderella you are needs no validation from me!", mirrorText, 100);
                section.dataset.messageShown = 'true'; // Prevent re-typing
            }
        }
    });
}

function typeWriter(text, element, speed) {
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i === text.length) {
            clearInterval(interval);
        }
    }, speed);
}

window.addEventListener('scroll', checkScroll);