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

					card.innerHTML += ` <div class="coffee__${num}-img"
					data-title=${product.name}
					data-description=${product.description}
					data-price=${product.price}></div>
					 <div class="coffee__1-desc">
									<h4>${product.name}</h4>
									<p>${product.description}</p>
									<span>$${product.price}</span>
							</div>
					`
					cardContainer.append(card)

					card.addEventListener('click', () => {
						openModal(product, 'coffee', num)
					})
				})
			}

			function renderTea(products) {
				cardContainer.innerHTML = ''

				products.forEach((product, index) => {
					const num = index + 1

					const card = document.createElement('div')

					card.classList.add('coffee__1-container')

					card.innerHTML += `<div class="tea__${num}-img"
					data-title=${product.name}
					data-description=${product.description}
					data-price=${product.price}></div>
					 <div class="coffee__1-desc">
									<h4>${product.name}</h4>
									<p>${product.description}</p>
									<span>$${product.price}</span>
							</div>
					`
					cardContainer.append(card)
					card.addEventListener('click', () => {
						openModal(product, 'tea', num)
					})
				})
			}

			function renderDessert(products) {
				cardContainer.innerHTML = ''

				products.forEach((product, index) => {
					const num = index + 1

					const card = document.createElement('div')

					card.classList.add('coffee__1-container')

					card.innerHTML += ` <div class="dessert__${num}-img" 
					data-image="dessert__${num}-img"
					data-title=${product.name}
					data-description=${product.description}
					data-price=${product.price}></div>
					 <div class="coffee__1-desc">
									<h4>${product.name}</h4>
									<p>${product.description}</p>
									<span>$${product.price}</span>
							</div>
					`
					cardContainer.append(card)
					card.addEventListener('click', () => {
						openModal(product, 'dessert', num)
					})
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

			function openModal(product, category, num) {
				const modal = document.createElement('div')
				const basePrice = Number(product.price)

				modal.classList.add('modal')

				modal.innerHTML += `
			<div class="modal__content">
				<div id="modal__img" class="${category}__${num}-img"></div>
				<div class="modal__desc">
					<h4>${product.name}</h4>
					<p>${product.description}</p>
					<div>
						<p>Size</p>
						<div class="size__btns">
							<button class="sizeBtn" data-price="0"><span class="letter">S</span><span class="letter2">${product.sizes.s.size}</span></button>
							<button class="sizeBtn" data-price="0.50"><span class="letter">M</span><span class="letter2">${product.sizes.m.size}</span></button>
							<button class="sizeBtn" data-price="1.00"><span class="letter">L</span><span class="letter2">${product.sizes.l.size}</span></button>
						</div>
					</div>
					<div>
						<p>Additives</p>
						<div class="additives__btns">
							<button class="addBtn" data-price="0.50"><span class="numbers">1</span><span class="numbers2">${product.additives[0].name}</span></button>
							<button class="addBtn" data-price="0.50"><span class="numbers">2</span><span class="numbers2">${product.additives[1].name}</span></button>
							<button class="addBtn" data-price="0.50"><span class="numbers">3</span><span class="numbers2">${product.additives[2].name}</span></button>
						</div>
					</div>
					<p id="modal__price">Total: <span class="total-price">$${product.price}</span></p>
					<div class="modal__warn">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  				<g clip-path="url(#clip0_147811_7611)">
   					 <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
    			<path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
   				 <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
  				</g>
 					 <defs>
  			  <clipPath id="clip0_147811_7611">
    		  <rect width="16" height="16" fill="white" />
	 				 </clipPath>
 					 </defs>
					</svg>
					<p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
					</div>
					<button class="modal__close">Close</button>
				</div>
			</div>
		`

				document.body.append(modal)
				modal.classList.add('active')
				document.body.classList.toggle('no-scroll')
				const closeModal = modal.querySelector('.modal__close')

				closeModal.addEventListener('click', () => {
					modal.remove()
					document.body.classList.remove('no-scroll')
				})
				const selectBtns = document.querySelectorAll('.sizeBtn')
				const addBtns = modal.querySelectorAll('.addBtn')
				const totalPrice = modal.querySelector('.total-price')
				let sizePrice = 0
				let extraPrice = 0

				if (selectBtns) {
					selectBtns.forEach(btn => {
						btn.addEventListener('click', () => {
							selectBtns.forEach(rm => {
								rm.classList.remove('active')
							})
							btn.classList.add('active')

							sizePrice = Number(btn.dataset.price)

							const total = basePrice + sizePrice + extraPrice

							totalPrice.textContent = `$${total.toFixed(2)}`
						})
					})
				}
				if (addBtns) {
					addBtns.forEach(btn => {
						btn.addEventListener('click', () => {
							addBtns.forEach(rm => {
								rm.classList.remove('active')
							})
							btn.classList.add('active')

							extraPrice = Number(btn.dataset.price)

							const total = basePrice + sizePrice + extraPrice

							totalPrice.textContent = `$${total.toFixed(2)}`
						})
					})
				}
			}
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
