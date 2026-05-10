<script setup>
import BaseSlider from '@/components/base/BaseSlider.vue';
import BaseButton from './base/BaseButton.vue';
</script>

<template>
	<div class="column" id="select-level">
		<h3 class="headline">Erfahrung mit Pizzateig</h3>
		<div class="row">
			<BaseButton class="button-left" id="beginner-level">Anfänger</BaseButton>
			<BaseButton class="button-right" id="pro-level">Profie</BaseButton>
		</div>
	</div>
	<div class="column" id="select-dough-time">
		<h3 class="headline">Teigruhe</h3>
		<div class="row">
			<BaseButton class="button-left text" id="three-hours">3h</BaseButton>
			<BaseButton class="text" id="twenty-four-hours">24h</BaseButton>
			<BaseButton class="button-right text" id="forty-eight-hours">48h</BaseButton>
		</div>
	</div>
	<div class="column" id="select-number-of-pizza">
		<h3 class="headline">Pizzen</h3>
		<p class="text">Anzahl der Pizzen: <span class="headline" id="pizza-count">NaNa</span> </p>
		<BaseSlider min="1" max="30" value="8" id="slider-number-of-pizza"/>
	</div>
	<div class="column" id="select-size-of-pizza">
		<h3 class="headline">Welchen durchmesser soll die pizza haben?</h3>
		<p class="text">Durchmesser pro Pizza: <span class="headline" id="pizza-size">NaNa</span><span class="headline">cm</span></p>
		<BaseSlider min="15" max="50" value="25" id="slider-size-of-pizza"/>
	</div>

</template>

<style scoped>
#twenty-four-hours,
#pro-level {
	background: var(--primary-weak);
}

.button-left {
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}

.button-right {
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
}
</style>