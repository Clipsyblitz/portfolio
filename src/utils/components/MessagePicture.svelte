<script>
    export let side;
</script>

<div>
    <img
        class="rounded-full w-12 ml-4 mr-4"
        src={side === 'right' ? '/assets/pp.jpg' : '/assets/user.svg'}
        alt="user icon"
    />
</div>