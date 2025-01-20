// Simple JavaScript for Light/Dark Mode Toggle
const toggleModeButton = document.createElement('button');
toggleModeButton.textContent = 'Toggle Light/Dark Mode';
toggleModeButton.style.position = 'fixed';
toggleModeButton.style.top = '20px';
toggleModeButton.style.right = '20px';
toggleModeButton.style.padding = '10px 15px';
toggleModeButton.style.backgroundColor = '#333';
toggleModeButton.style.color = '#fff';
toggleModeButton.style.border = 'none';
toggleModeButton.style.cursor = 'pointer';
document.body.appendChild(toggleModeButton);

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Light mode CSS (will be applied when the class is toggled)
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .light-mode {
        background-color: #f4f4f4;
        color: #333;
    }
    .light-mode header {
        background-color: #ddd;
        color: #333;
    }
    .light-mode nav a {
        color: #333;
    }
    .light-mode nav a:hover {
        color: #000;
    }
`;
document.head.appendChild(styleSheet);
