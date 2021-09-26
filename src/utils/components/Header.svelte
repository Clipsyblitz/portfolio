<script>
	import inView from '../actions/inviewAction.js';
	import { slide } from 'svelte/transition';

	export let page;

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
		<div class="font-mono flex text-blue-500 text-center">
			<div class="flex-1 flex justify-center mr-auto">
				<a class="md:text-4xl hover:underline" class:active={'/' === page.path} href="/"> Home </a>
			</div>
			<div class="flex-1 flex justify-center">
				<a
					class="md:text-4xl hover:underline"
					class:active={'/portfolio' === page.path}
					href="/portfolio"
				>
					Portfolio
				</a>
			</div>
			<div class="flex-1 flex justify-center ml-auto">
				<a
					class="md:text-4xl hover:underline"
					class:active={'/contact' === page.path}
					href="/contact"
				>
					Contact
				</a>
			</div>
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
			<div class="flex justify-around w-2/5 mr-8 text-blue-500">
				<a class="md:text-2xl hover:underline" class:active={'/' === page.path} href="/">Home</a>
				<a
					class="md:text-2xl hover:underline"
					class:active={'/portfolio' === page.path}
					href="/portfolio"
				>
					Portfolio
				</a>
				<a
					class="md:text-2xl hover:underline"
					class:active={'/contact' === page.path}
					href="/contact">Contact</a
				>
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
		class="fixed right-0 w-24 h-full top-12 flex flex-col text-right border-l-2 border-gray-100 bg-white text-blue-500"
		in:slide={{ duration: 1500 }}
		out:slide
	>
		<div class="md:text-2xl mt-5 mr-2 ">
			<a class="hover:underline" class:active={'/' === page.path} href="/">Home</a>
		</div>
		<div class="md:text-2xl mt-5 mr-2">
			<a class="hover:underline" class:active={'/portfolio' === page.path} href="/portfolio">
				Portfolio
			</a>
		</div>
		<div class="md:text-2xl mt-5 mr-2">
			<a class="hover:underline" class:active={'/contact' === page.path} href="/contact">
				Contact
			</a>
		</div>
	</div>
{/if}

<style>
	.active {
		background-color: #d81159;
		color: white;
		text-decoration: none;
	}
</style>
