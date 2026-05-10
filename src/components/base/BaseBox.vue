<script setup>
</script>

<template>
		<div class="box">
			<slot />
		</div>
</template>

<style scoped>
.box {
	gap: 2rem;
	background: var(--bg);
	border-radius: 12px;
	width: 85%;
	padding: 2rem;
}
</style>