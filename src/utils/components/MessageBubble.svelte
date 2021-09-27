<script>
	import MessagePicture from './MessagePicture.svelte';
	export let side;

	let sideStyle = {
		left: 'rounded-br-2xl',
		right: 'rounded-bl-2xl'
	};

	let sideColor = {
		left: 'background: rgba(216, 17, 89, 1);',
		right: 'background: rgba(59, 130, 246, 1);'
	};
</script>

<div class={`flex items-end justify-${side === 'right' ? 'end' : 'start'} pt-5 pb-5 w-11/12`}>
	{#if side === 'left'}
		<MessagePicture {side} />
	{/if}
	<div
		class={`shadow-xl flex items-center justify-start rounded-t-2xl font-sans leading-loose text-xs md:text-2xl max-h-40 p-4 whitespace-wrap text-left ${sideStyle?.[side]}`}
		style={`${sideColor?.[side]} max-width: 70%; color: #efefef;`}
	>
		<slot />
	</div>
	{#if side === 'right'}
		<MessagePicture {side} />
	{/if}
</div>
