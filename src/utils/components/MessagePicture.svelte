<script>
    export let side;
</script>

<div>
    <img
        class="rounded-full md:w-12 w-6 ml-2 mr-2"
        src={side === 'right' ? '/assets/pp.jpg' : '/assets/user.svg'}
        alt="user icon"
    />
</div>