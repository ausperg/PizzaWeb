<script setup>
</script>

<template>
	<input type="range" class="slider">
</template>

<style scoped>
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