const themeSwitch = document.querySelector('.theme__switch')
const links = document.querySelectorAll('.navbar__container a')

const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const cardContainer = document.querySelector('.menu__grid-container')

const coffeeBtn = document.getElementById('coffeeBtn')
const teaBtn = document.getElementById('teaBtn')
const dessertBtn = document.getElementById('dessertBtn')

const gridBtn = document.getElementById('gridBtn')

let currentSlider = 0
let products = []

if (coffeeBtn && teaBtn && dessertBtn) {
	fetch('./products.json')
		.then(response => response.json())
		.then(data => {
			products = data

			const coffee = products.filter(product => product.category === 'coffee')
			const tea = products.filter(product => product.category === 'tea')
			const dessert = products.filter(product => product.category === 'dessert')

			renderCoffee(coffee)
			renderTea(tea)
			renderDessert(dessert)

			renderCoffee(coffee)
			setActive(coffeeBtn)

			function renderCoffee(products) {
				cardContainer.innerHTML = ''

				products.forEach((product, index) => {
					const num = index + 1

					const card = document.createElement('div')

					card.classList.add('coffee__1-container')

					card.innerHTML += ` <div class="coffee__${num}-img"></div>
					 <div class="coffee__1-desc">
									<h4>${product.name}</h4>
									<p>${product.description}</p>
									<span>$${product.price}</span>
							</div>
					`
					cardContainer.append(card)
				})
			}

			function renderTea(products) {
				cardContainer.innerHTML = ''

				products.forEach((product, index) => {
					const num = index + 1

					const card = document.createElement('div')

					card.classList.add('coffee__1-container')

					card.innerHTML += `<div class="tea__${num}-img"></div>
					 <div class="coffee__1-desc">
									<h4>${product.name}</h4>
									<p>${product.description}</p>
									<span>$${product.price}</span>
							</div>
					`
					cardContainer.append(card)
				})
			}

			function renderDessert(products) {
				cardContainer.innerHTML = ''

				products.forEach((product, index) => {
					const num = index + 1

					const card = document.createElement('div')

					card.classList.add('coffee__1-container')

					card.innerHTML += ` <div class="dessert__${num}-img"></div>
					 <div class="coffee__1-desc">
									<h4>${product.name}</h4>
									<p>${product.description}</p>
									<span>$${product.price}</span>
							</div>
					`
					cardContainer.append(card)
				})
			}

			function setActive(button) {
				coffeeBtn.classList.remove('active')
				teaBtn.classList.remove('active')
				dessertBtn.classList.remove('active')

				button.classList.add('active')
			}

			coffeeBtn.addEventListener('click', () => {
				setActive(coffeeBtn)
				renderCoffee(coffee)
			})
			teaBtn.addEventListener('click', () => {
				setActive(teaBtn)
				renderTea(tea)
			})
			dessertBtn.addEventListener('click', () => {
				setActive(dessertBtn)
				renderDessert(dessert)
			})
		})

	gridBtn.addEventListener('click', () => {
		cardContainer.classList.add('show')
		gridBtn.classList.add('deactive')
	})
}

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
		slide.classList.remove('active', 'fade')
	})

	dots.forEach(dot => {
		dot.classList.remove('active')
	})

	slides[index].classList.add('active', 'fade')
	dots[index].classList.add('active')

	currentSlider = index
}

if (next && prev) {
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
}

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		showSlide(index)
	})
})
