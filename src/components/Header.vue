<script setup>

</script>

<template>
	<header>
		<h1 class="headline" id="page-titel">Pizzateig Rechner</h1>
		<button id="darkmode-btn"></button>
	</header>
</template>

<style scoped>
header {
	display: flex;
	align-items: center;
	padding: 4rem;
}

#page-titel {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
}

#darkmode-btn {
	position: absolute;
	right: 5%;
	width: 35px;
	height: 35px;
	cursor: pointer;
	border-radius: 5px;
	background-image: url('/dark-mode.png');
	background-position: center;
}
</style>