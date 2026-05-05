<script setup>
</script>

<template>
	<div class="column" id="select-level">
		<h3 class="headline">Erfahrung mit Pizzateig</h3>
		<div class="row">
			<button class="button-left text" id="beginner-level">Anfänger</button>
			<button class="button-right text" id="pro-level">Profie</button>
		</div>
	</div>
	<div class="column" id="select-dough-time">
		<h3 class="headline">Teigruhe</h3>
		<div class="row">
			<button class="button-left text" id="three-hours">3h</button>
			<button class="text" id="twenty-four-hours">24h</button>
			<button class="button-right text" id="forty-eight-hours">48h</button>
		</div>
	</div>
	<div class="column" id="select-number-of-pizza">
		<h3 class="headline">Pizzen</h3>
		<p class="text">Anzahl der Pizzen: <span class="headline" id="pizza-count">NaNa</span> </p>
		<input type="range" min="1" max="30" value="8" class="slider" id="slider-number-of-pizza">
	</div>
	<div class="column" id="select-size-of-pizza">
		<h3 class="headline">Welchen durchmesser soll die pizza haben?</h3>
		<p class="text">Durchmesser pro Pizza: <span class="headline" id="pizza-size">NaNa</span><span class="headline">
				cm</span></p>
		<input type="range" min="15" max="50" value="25" class="slider" id="slider-size-of-pizza">
	</div>
</template>

<style scoped>
#twenty-four-hours,
#pro-level {
	background: var(--primary-weak);
}

button:hover {
	background-color: var(--bg-light);
}

.button-left {
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}

.button-right {
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
}

.slider {
	-webkit-appearance: none;
	appearance: none;
	/*to hide the defaul appearance*/
	width: 20rem;
	height: 0.5rem;
	border-radius: 5px;
	outline: none;
	opacity: 0.7;
	-webkit-transition: .2s;
	transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background: var(--primary-weak);
	cursor: pointer;
}
</style>