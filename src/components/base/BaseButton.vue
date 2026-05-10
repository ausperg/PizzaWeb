<script setup>
</script>

<template>
	<button class="text"><slot /></button>
</template>

<style scoped>
button:hover {
	background-color: var(--bg-light);
}

button {
	height: 2.5rem;
	width: 6rem;
	background-color: var(--bg);
	border: 1px solid var(--border);
	cursor: pointer;
}
</style>