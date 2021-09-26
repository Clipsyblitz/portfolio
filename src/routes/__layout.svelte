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
	import { slide } from 'svelte/transition';
	import { svg_element } from 'svelte/internal';

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

	export let isInViewport = true;

	let scrollY;
	let innerWidth;

	let isMenuActive = false;
</script>

<svelte:window bind:scrollY bind:innerWidth />

{#if innerWidth > 500}
	<div
		class="header mt-10"
		use:inView
		on:enter={() => {
			isInViewport = true;
			isMenuActive = false;
		}}
		on:exit={() => (isInViewport = false)}
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
{/if}

{#if innerWidth < 500 || !isInViewport}
	<div
		class="fixed top-0 flex items-center justify-between w-screen h-12 shadow"
		style="background: white;"
		transition:slide
	>
		<a class="flex ml-4" href="/">
			<img src="/assets/terminal.svg" alt="terminal icon" />
			<p class="md:text-2xl ml-4" style="color: #13293d">Malone JULIENNE</p>
		</a>

		{#if innerWidth >= 500}
			<div class="flex justify-around w-2/5 mr-8">
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
		{:else}
			<div class="w-24 flex justify-end">
				<img
					on:click={() => (isMenuActive = !isMenuActive)}
					class="mr-2"
					src={isMenuActive ? '/assets/x.svg' : '/assets/menu.svg'}
					alt="menu icon"
				/>
			</div>
		{/if}
	</div>
{/if}

{#if isMenuActive && innerWidth < 500}
	<div
		class="fixed right-2 w-24 h-full top-12 flex flex-col text-right border-l-2 border-gray-100"
		in:slide={{ duration: 1500 }}
		out:slide
	>
		{#each links as { text, href }}
			{#if page.path === href}
				<a class="md:text-2xl mt-5" {href}>
					<mark style="background-color: #d81159; color: #e8f1f2">{text}</mark>
				</a>
			{:else}
				<a class="md:text-2xl mt-5" style="color: #3b82f6;" {href}>{text}</a>
			{/if}
		{/each}
	</div>
{/if}

<slot />

<div class="md:h-40 flex items-center border-t-2 justify-center">
	<div class="w-4/5 flex items-center justify-around text-2xl">
		<a class="flex flex-col items-center" href="https://github.com/Clipsyblitz">
			<img class="md:w-12" src="/assets/github.svg" alt="github icon" />
			{#if innerWidth >= 500}
				<p>Clipsyblitz</p>
			{/if}
		</a>
		<a class="flex flex-col items-center" href="https://www.linkedin.com/in/malone-julienne/">
			<img class="md:w-12" src="/assets/linkedin.svg" alt="linkedin icon" />
			{#if innerWidth >= 500}
				<p>Malone JULIENNE</p>
			{/if}
		</a>
		<a class="flex flex-col items-center" href="/contact">
			<img class="md:w-12" src="/assets/mail.svg" alt="mail icon" />
			{#if innerWidth >= 500}
				<p>Mail</p>
			{/if}
		</a>
	</div>
</div>
