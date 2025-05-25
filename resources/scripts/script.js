const toggleButton = document.getElementById('darkModeToggle');
const rootElement = document.documentElement;

// Load saved mode on page load
if (localStorage.getItem('theme') === 'dark') {
  rootElement.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  rootElement.classList.toggle('dark-mode');
  const theme = rootElement.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});