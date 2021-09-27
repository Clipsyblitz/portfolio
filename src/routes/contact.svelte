<script>
	let form = {
		name: '',
		surname: '',
		mail: '',
		subject: '',
		message: ''
	};
</script>

<div class="flex justify-center ">
	<div class="flex flex-col justify-center items-center mt-20 bg-gray-100 w-4/12 rounded-3xl p-8">
		<div class=" flex md:text-4xl mb-8 border-b-4">
			<p>Contact me</p>
		</div>

		<div class="flex flex-col items-center justify-center md:text-3xl">
			<form>
				<div class="flex flex-col mb-4">
					<label class="mb-2" for="name">Name</label>
					<input class="rounded-2xl" id="name" bind:value={form.name} />
				</div>
				<div class="flex flex-col mb-4">
					<label for="surname">Surname</label>
					<input class="rounded-2xl" id="surname" bind:value={form.surname} />
				</div>

				<div class="flex flex-col mb-4">
					<label class="mb-2" for="mail">Mail</label>
					<input class="rounded-2xl" id="mail" bind:value={form.mail} />
				</div>
				<div class="flex flex-col mb-4">
					<label class="mb-2" for="subject">Subject</label>
					<input class="rounded-2xl" id="subject" bind:value={form.subject} />
				</div>
				<div class="flex flex-col">
					<label class="mb-2" for="content">Message</label>
					<input class="rounded-2xl" id="content" bind:value={form.message} />
				</div>
			</form>
		</div>
	</div>
</div>
