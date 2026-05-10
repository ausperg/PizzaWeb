<script setup>
import BaseBox from './base/BaseBox.vue';

</script>

<template>
	<BaseBox class="column">
		<div class="column" id="ingredients">
			<h3 class="headline">Zutaten</h3>
			<p class="text less-line-spacing">Mehl: <span class="headline" id="flour">NaNa</span> g</p>
			<p class="text less-line-spacing">Salz: <span class="headline" id="salt">NaNa</span> g</p>
			<p class="text less-line-spacing">Wasser: <span class="headline" id="water">NaNa</span> ml</p>
			<p class="text less-line-spacing">Olivenöl: <span class="headline" id="oil">NaNa</span> ml</p>
			<p class="text less-line-spacing">Frische Hefe: <span class="headline" id="yeast">NaNa</span>
				 g / Trocken Hefe: <span class="headline" id="dry-yeast">NaNa</span> g</p>
		</div>
		<div class="column" id="preparation">
			<h3 class="headline">Zubereitung</h3>
			<p class="text less-line-spacing">1. Mehl in die Schüssel geben.</p>
			<p class="text less-line-spacing">2. Wasser, Olivenöl und Salz dazugeben (etwas Wasser für den vierten
				Schritt aufheben).</p>
			<p class="text less-line-spacing">3. Alles gut vermengen.</p>
			<p class="text less-line-spacing">4. Hefe mit dem restlichen Wasser vermischen und in den Teig geben.
			</p>
			<p class="text less-line-spacing">5. Gut kneten, ca. 10–20 Minuten.</p>
			<p class="text less-line-spacing">6. Den Teig gehen lassen (für den 16- bis 24-Stunden-Teig an einem
				kühlen
				Ort). Ca. 3–4 Stunden vor dem Backen den Teig bei Raumtemperatur gehen lassen.</p>
			<p class="text less-line-spacing">7. Den Teig ca. 30 Minuten vor dem Backen portionieren.</p>
			<p class="text less-line-spacing">PS: Ein Teigling sind 350g Teig.</p>
		</div>
	</BaseBox>
</template>

<style scoped>
.recipe-box {
	gap: 2rem;
	background: var(--bg);
	border-radius: 12px;
	width: 85%;
	padding: 2rem;
}

#preparation {
	display: block;
}

.less-line-spacing {
	margin: 0.2rem;
}

@media (max-width: 50rem) {
	.recipe-box {
		background: var(--bg);
		border-radius: 12px;
		width: 85%;
		padding: 2rem;
	}
}
</style>