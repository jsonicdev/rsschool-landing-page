const themeSwitch = document.querySelector('.theme__switch')
const links = document.querySelectorAll('.navbar__container a')

const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentSlider = 0

themeSwitch.addEventListener('click', () => {
	const isDark = document.body.classList.toggle('dark')

	localStorage.setItem('theme', isDark ? 'dark' : 'light')
})

burger.addEventListener('click', () => {
	menu.classList.toggle('active')
	document.body.classList.toggle('no-scroll')
})

function closeMenu() {
	menu.classList.remove('active')
	document.body.classList.remove('no-scroll')
}

links.forEach(link => {
	link.addEventListener('click', () => {
		closeMenu()
	})
})

document.addEventListener('keydown', event => {
	if (event.key === 'Escape') {
		closeMenu()
	}
})

function showSlide(index) {
	slides.forEach(slide => {
		slide.classList.remove('active')
	})

	dots.forEach(dot => {
		dot.classList.remove('active')
	})

	slides[index].classList.add('active')
	dots[index].classList.add('active')

	currentSlider = index
}

next.addEventListener('click', () => {
	let nextSlide = currentSlider + 1

	if (nextSlide >= slides.length) {
		nextSlide = 0
	}

	showSlide(nextSlide)
})

prev.addEventListener('click', () => {
	let prevSlide = currentSlider - 1

	if (prevSlide < 0) {
		prevSlide = slides.length - 1
	}

	showSlide(prevSlide)
})

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		showSlide(index)
	})
})
