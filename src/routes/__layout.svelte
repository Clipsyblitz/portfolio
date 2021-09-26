<script context="module">
	export function load({ page }) {
		return {
			props: {
				page
			}
		};
	}
</script>

<script>
	import '../app.postcss';

	import Header from '../utils/components/Header.svelte';
	import Footer from '../utils/components/Footer.svelte';

	export let page;
</script>

<Header {page} />

<slot />

<Footer />
