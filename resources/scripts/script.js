document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const rootElement = document.documentElement;

  if (localStorage.getItem('theme') === 'dark') {
    rootElement.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Light Mode';
  }

  toggleButton.addEventListener('click', () => {
    const isDark = rootElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleButton.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
});
