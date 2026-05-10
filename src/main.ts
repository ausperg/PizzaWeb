import "@/assets/main.css"

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// Profi Pizza 24h 20cm
const rFlour = 100;
const rSalt = 3;
const rWaterBeginner = 65;
const rWaterPro = 70;
const rOil = 3;
const rYeast3h = 1.0;
const rYeast24h = 0.2;
const rYeast48h = 0.1;
const rPizzaSize = 20; // 20cm

function getElement(id: string): HTMLElement {
	const el = document.getElementById(id);
	if (!el) throw new Error(`Element with id "${id}" not found!`);
	return el;
}

function getInputElement(id: string): HTMLInputElement {
	const el = document.getElementById(id);
	if (!el) throw new Error(`Element mit id "${id}" nicht gefunden!`);
	if (!(el instanceof HTMLInputElement)) throw new Error(`Element mit id "${id}" ist kein Input!`);
	return el;
}

const btnDarkMode = getElement("darkmode-btn");

const sliderPizzaNumber = getInputElement("slider-number-of-pizza");
const sliderPizzaSize = getInputElement("slider-size-of-pizza");
const pizzaCount = getElement("pizza-count");
const pizzaSize = getElement("pizza-size");
const flour = getElement("flour");
const salt = getElement("salt");
const water = getElement("water");
const oil = getElement("oil");
const yeast = getElement("yeast");
const dryYeast = getElement("dry-yeast");

const btnBeginner = getElement("beginner-level");
const btnPro = getElement("pro-level");
const btn3H = getElement("three-hours");
const btn24H = getElement("twenty-four-hours");
const btn48H = getElement("forty-eight-hours");

let isPro = true;
let doughTime = 24;
let isDarkMode = true;

pizzaCount.innerHTML = sliderPizzaNumber.value;
sliderPizzaNumber.style.background = getSliderPercent(sliderPizzaNumber);

pizzaSize.innerHTML = sliderPizzaSize.value;
sliderPizzaSize.style.background = getSliderPercent(sliderPizzaSize);

setIngredients();

sliderPizzaNumber.oninput = function (this: GlobalEventHandlers): void {
	const tmp = this as HTMLInputElement;
	pizzaCount.innerText = tmp.value;
	tmp.style.background = getSliderPercent(tmp);
	setIngredients();
}

sliderPizzaSize.oninput = function (this: GlobalEventHandlers): void {
	const tmp = this as HTMLInputElement;
	pizzaSize.innerText = tmp.value;
	tmp.style.background = getSliderPercent(tmp);
	setIngredients();
}

function getSliderPercent(slider: HTMLInputElement): string {
	let percent = 100 / (Number(slider.max) - Number(slider.min)) * (Number(slider.value) - Number(slider.min));
	let ret = 'linear-gradient(90deg, var(--primary-weak) ' + percent + '%, var(--bg) ' + percent + '%)';
	return (ret);
}

btnDarkMode.addEventListener("click", function () {

	if (isDarkMode) {
		document.documentElement.style.setProperty('--bg-dark', 'hsl(0, 0%, 90%)');
		document.documentElement.style.setProperty('--bg', 'hsl(0, 0%, 95%)');
		document.documentElement.style.setProperty('--bg-light', 'hsl(0, 0%, 100%)');

		document.documentElement.style.setProperty('--hedline', 'hsl(0, 0%, 10%)');
		document.documentElement.style.setProperty('--text', 'hsl(0, 0%, 20%)');

		document.documentElement.style.setProperty('--primary-strong', 'hsl(46, 87%, 50%);');
		document.documentElement.style.setProperty('--primary-weak', 'hsl(46, 87%, 70%)');
		isDarkMode = false;
	}
	else {
		document.documentElement.style.setProperty('--bg-dark', 'hsl(0, 0%, 0%)');
		document.documentElement.style.setProperty('--bg', 'hsl(0, 0%, 10%)');
		document.documentElement.style.setProperty('--bg-light', 'hsl(0, 0%, 20%)');

		document.documentElement.style.setProperty('--hedline', 'hsl(0, 0%, 90%)');
		document.documentElement.style.setProperty('--text', 'hsl(0, 0%, 70%)');

		document.documentElement.style.setProperty('--primary-strong', 'hsl(46, 87%, 50%);');
		document.documentElement.style.setProperty('--primary-weak', 'hsl(46, 87%, 30%)');
		isDarkMode = true;
	}
});

btnBeginner.addEventListener("click", function () {
	isPro = false;
	this.style.background = 'var(--primary-weak)';
	btnPro.style.background = 'var(--bg)';
	setIngredients();
});

btnPro.addEventListener("click", function () {
	isPro = true;
	this.style.background = 'var(--primary-weak)';
	btnBeginner.style.background = 'var(--bg)';
	setIngredients();
});

btn3H.addEventListener("click", function () {
	doughTime = 3;
	this.style.background = 'var(--primary-weak)';
	btn48H.style.background = 'var(--bg)';
	btn24H.style.background = 'var(--bg)';
	setIngredients();
});

btn24H.addEventListener("click", function () {
	doughTime = 24;
	this.style.background = 'var(--primary-weak)';
	btn3H.style.background = 'var(--bg)';
	btn48H.style.background = 'var(--bg)';
	setIngredients();
});

btn48H.addEventListener("click", function () {
	doughTime = 48;
	this.style.background = 'var(--primary-weak)';
	btn3H.style.background = 'var(--bg)';
	btn24H.style.background = 'var(--bg)';
	setIngredients();
});

function setIngredients() {
	let rFleche = Math.pow(rPizzaSize / 2, 2) * Math.PI;
	let newFleche = Math.pow(Number(sliderPizzaSize.value) / 2, 2) * Math.PI;

	let factor = Number(sliderPizzaNumber.value) * newFleche / rFleche;
	flour.innerHTML = (rFlour * factor).toFixed(0);
	salt.innerHTML = (rSalt * factor).toFixed(0);
	if (isPro)
		water.innerHTML = (rWaterPro * factor).toFixed(0);
	else
		water.innerHTML = (rWaterBeginner * factor).toFixed(0);
	oil.innerHTML = (rOil * factor).toFixed(0);
	switch (doughTime) {
		case 3:
			yeast.innerHTML = (rYeast3h * factor).toFixed(1);
			dryYeast.innerHTML = (rYeast3h * factor / 3).toFixed(1);
			break;
		case 24:
			yeast.innerHTML = (rYeast24h * factor).toFixed(1);
			dryYeast.innerHTML = (rYeast24h * factor / 3).toFixed(1);
			break;
		case 48:
			yeast.innerHTML = (rYeast48h * factor).toFixed(1);
			dryYeast.innerHTML = (rYeast48h * factor / 3).toFixed(1);
			break;
		default:
			yeast.innerHTML = (rYeast24h * factor).toFixed(1);
			dryYeast.innerHTML = (rYeast24h * factor / 3).toFixed(1);
			break;
	}
}
