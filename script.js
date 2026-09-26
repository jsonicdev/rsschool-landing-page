const themeSwitch = document.querySelector('.theme__switch')

themeSwitch.addEventListener('click', () => {
	const isDark = document.body.classList.toggle('dark')

	localStorage.setItem('theme', isDark ? 'dark' : 'light')
})

const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
	menu.classList.toggle('active')
})
