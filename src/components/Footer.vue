<script setup>
	import { ref } from 'vue'
	const year = ref(new Date().getFullYear())
</script>

<template>
	<footer>
		<p class="text">Pizzateig Rechner - © {{ year }} by APM</p>
	</footer>
</template>

<style scoped>
footer {
	position: relative;
	text-align: center;
	width: 100%;
	margin-top: 5rem;
	margin-bottom: 2rem;
}
</style>