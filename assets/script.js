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
arrowLeft.addEventListener('click', (e) => {
	console.log('je vais a gauche');
	nextSlide(-1);
})

const arrowRight = document.querySelector('#banner .arrow_right');
arrowRight.addEventListener('click', (e) => {
	console.log('je vais a droite');
	nextSlide(1);

	/* dotList[0].classList.remove('dot_selected');
	dotList[1].classList.add('dot_selected'); */ 
	
	
})

const dotsSlider = document.querySelector('div .dots');

const bulletSlider = `<div class='dot'></div>`;

for (let slide of slides) {
	dotsSlider.insertAdjacentHTML('afterbegin', bulletSlider);
}

const dotList = document.querySelectorAll('.dots .dot');
dotList[0].classList.add('dot_selected');
console.log(dotList);


// Fonction changement image dans le slide et changement de tagline 
let numero = 0;
function nextSlide(sens) {
	numero = numero + sens;
	imgSlide.src ="./assets/images/slideshow/" + slides[numero].image;
	tagLine.innerHTML = slides[numero].tagLine;
}