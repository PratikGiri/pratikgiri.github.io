const body = document.body

const btnTheme = document.querySelector('.fa-sun')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const isLight = () => body.classList.contains('light')

const setTheme = (bodyClass, btnClass) => {

	while (body.classList.length > 0) {
		body.classList.remove(body.classList.item(0));
	}
	btnTheme.classList.remove('fa-sun');
	btnTheme.classList.remove('fa-moon');

	addThemeClass(bodyClass, btnClass)

}

const toggleTheme = () =>
	isLight() ? setTheme('dark', 'fa-sun') : setTheme('light', 'fa-moon')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)
