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
	import inView from '../utils/inviewAction.js';

	export let page;

	const links = [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'Portfolio',
			href: '/portfolio'
		},
		{
			text: 'Contact',
			href: '/contact'
		}
	];

	export let inViewport = true;

	let scrollY;
</script>

<svelte:window bind:scrollY />

<div
	class="header mt-10"
	use:inView
	on:enter={() => (inViewport = true)}
	on:exit={() => (inViewport = false)}
>
	<div class="flex flex-col items-center mb-10">
		<img class="w-1/5 mb-8 rounded-full " src="/assets/pp.jpg" alt="Malone JULIENNE" />
		<p class="md:text-6xl sm:text-3xl" style="color: #13293d;">Malone JULIENNE</p>
	</div>
	<div class="font-mono flex justify-around m-4 text-blue-500">
		{#each links as { text, href }}
			{#if page.path === href}
				<a class="md:text-4xl" {href}>
					<mark style="background-color: #d81159; color: #e8f1f2">{text}</mark>
				</a>
			{:else}
				<a class="md:text-4xl" {href}>{text}</a>
			{/if}
		{/each}
	</div>
</div>
{#if !inViewport}
	<div
		class="fixed top-0 flex items-center justify-between w-screen h-12"
		style="background: white;"
	>
		<div class="flex ml-4">
			<img src="/assets/terminal.svg" alt="terminal icon" />
			<a class="md:text-2xl ml-4" style="color: #13293d" href="/"> Malone JULIENNE </a>
		</div>
		<div class="flex justify-around w-1/5">
			{#each links as { text, href }}
				{#if page.path === href}
					<a class="md:text-2xl" {href}>
						<mark style="background-color: #d81159; color: #e8f1f2">{text}</mark>
					</a>
				{:else}
					<a class="md:text-2xl" style="color: #3b82f6;" {href}>{text}</a>
				{/if}
			{/each}
		</div>
	</div>
{/if}

<slot />
