<script>
	import MessageBubble from './MessageBubble.svelte';
	export let messages;
</script>

<div class="m-auto md:max-w-screen-xl sm:max-w-screen-sm rounded-3xl bg-gray-100">
	<div
		class="rounded-t-3xl flex justify-center items-center md:text-4xl border-b-4 border-gray-300 p-4 bg-gray-200"
		style="color: #13293d"
	>
		<p>New conversation</p>
	</div>
	<div>
		{#each messages as {p, message}}
			<MessageBubble side={p % 2 === 0 ? 'left' : 'right'}>{message}</MessageBubble>
		{/each}
	</div>
</div>
