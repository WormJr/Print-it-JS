const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imgSlide = document.querySelector('.banner-img')
const tagLine = document.querySelector('p');
const arrowLeft = document.querySelector('#banner .arrow_left');

// Evenements sur le click de la flèche de gauche ( appel de la fonction nextSlide avec le sens -1 en parametre )
arrowLeft.addEventListener('click', (e) => {
	console.log('je vais a gauche');
	nextSlide(-1);
})

// Eenement click sur la flèche de droite ( appel de la fonction nextSlide) avec le sens 1 en parametre 
const arrowRight = document.querySelector('#banner .arrow_right');
arrowRight.addEventListener('click', (e) => {
	console.log('je vais a droite');
	nextSlide(1);
})

const dotsSlider = document.querySelector('div .dots');

const bulletSlider = `<div class='dot'></div>`;

for (let slide of slides) {
	dotsSlider.insertAdjacentHTML('afterbegin', bulletSlider);
}

const dotList = document.querySelectorAll('.dots .dot');
dotList[0].classList.add('dot_selected');


// Fonction changement image dans le slide et changement de tagline 
let numero = 0;

const nextSlide = (sens) => {
	numero = (numero + sens + slides.length) % slides.length;
	updateSlide();
}

// Fonction fléchés qui explique ce qu'il se passe au click -> on change l'image le texte et on fais appel a la fonction upadate Dots.
const updateSlide = () => {
	imgSlide.src = "./assets/images/slideshow/" + slides[numero].image;
	tagLine.innerHTML = slides[numero].tagLine;
	updateDots();
}


// Fonction fléché qui explique la mise a jour des bullets points du slider, il active le point qui est égal a l'image affichés mais enleve l'activation des autres 
const updateDots = () => {
	dotList.forEach((dot, index) => {
		if (index === numero) {
			dot.classList.add('dot_selected')
		} else {
			dot.classList.remove('dot_selected')
		}
	});
};

// Ajout d'un évenement qui permet au click sur le bullet point d'afficher le slide correspondant (image, texte)
dotList.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		numero = index;
		updateSlide();
	})
})

// Ajout d'un défilement automatique vers la droite toutes les 4 secondes
setInterval("nextSlide(1)", 4000);