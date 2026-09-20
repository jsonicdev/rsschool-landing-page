const themeSwitch = document.querySelector('.theme__switch')

themeSwitch.addEventListener('click', () => {
	const isDark = document.body.classList.toggle('dark')

	localStorage.setItem('theme', isDark ? 'dark' : 'light')
})
