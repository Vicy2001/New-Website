const toggleBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleBtn.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Lade gespeichertes Theme oder Standard
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Klick-Handler
toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
});

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

const mailText = document.getElementById("mailText");
  mailText.addEventListener("focus", () => {
    mailText.style.height = "200px";
  });