const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

const navHeight = navbar.getBoundingClientRect().height;

function handleIntersection(entries) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			navbar.classList.add('sticky');
		} else {
			navbar.classList.remove('sticky');
		}
	});
}

const options = {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`
};

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(header);

// toggle menu

const menu = document.querySelector('.nav__toggle-menu');
const navlist = document.querySelector('.nav__list');
menu.addEventListener('click', () => {
	navlist.classList.toggle('active');
	menu.classList.toggle('active');
});

const navlink = document.querySelectorAll('.nav__link');
navlink.forEach((link) => {
	link.addEventListener('click', () => {
		if (menu.classList.contains('active') || navlist.classList.contains('active')) {
			navlist.classList.toggle('active');
			menu.classList.toggle('active');
		}
	});
});
