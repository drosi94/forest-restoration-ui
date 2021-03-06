if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
  document.documentElement.setAttribute('data-theme', 'forest')
} else {
  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add('light')
  document.documentElement.setAttribute('data-theme', 'emerald')
}
