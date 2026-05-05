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

const btnDarkMode = document.getElementById("darkmode-btn");

const sliderPizzaNumber = document.getElementById("slider-number-of-pizza");
const sliderPizzaSize = document.getElementById("slider-size-of-pizza");
const pizzaCount = document.getElementById("pizza-count");
const pizzaSize = document.getElementById("pizza-size");
const flour = document.getElementById("flour");
const salt = document.getElementById("salt");
const water = document.getElementById("water");
const oil = document.getElementById("oil");
const yeast = document.getElementById("yeast");
const dryYeast = document.getElementById("dry-yeast");

const btnBeginner = document.getElementById("beginner-level");
const btnPro = document.getElementById("pro-level");
const btn3H = document.getElementById("three-hours");
const btn24H = document.getElementById("twenty-four-hours");
const btn48H = document.getElementById("forty-eight-hours");

var isPro = true;
var doughTime = 24;
var isDarkMode = true;

pizzaCount.innerHTML = sliderPizzaNumber.value;
pizzaSize.innerHTML = sliderPizzaSize.value;
sliderPizzaNumber.style.background = getSliderPercent(sliderPizzaNumber);
sliderPizzaSize.style.background = getSliderPercent(sliderPizzaSize);

setIngredients();

sliderPizzaNumber.oninput = function () {
	pizzaCount.innerText = this.value;
	this.style.background = getSliderPercent(this);
	setIngredients();
}

sliderPizzaSize.oninput = function () {
	pizzaSize.innerText = this.value;
	this.style.background = getSliderPercent(sliderPizzaSize);
	setIngredients();
}

function getSliderPercent(slider) {
	var percent = 100 / (slider.max - slider.min) * (slider.value - slider.min);
	var ret = 'linear-gradient(90deg, var(--primary-weak) ' + percent + '%, var(--bg) ' + percent + '%)';
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
	var rFleche = Math.pow(rPizzaSize / 2, 2) * Math.PI;
	var newFleche = Math.pow(sliderPizzaSize.value / 2, 2) * Math.PI;

	var factor = sliderPizzaNumber.value * newFleche / rFleche;
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
