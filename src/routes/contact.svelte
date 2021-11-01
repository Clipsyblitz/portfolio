<script>
	import { onMount } from 'svelte';
	import Swal from 'sweetalert2';

	$: isCaptchaValidate = false;

	function verifyUser() {
		isCaptchaValidate = true;
	}

	onMount(
		() => {
			window.isCaptchaValidate;
			window.verifyUser = verifyUser;
		},
		() => (window.verifyUser = null)
	);

	let form = {
		name: '',
		surname: '',
		mail: '',
		subject: '',
		text: ''
	};

	let emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

	let emailRegTest;

	const handleChange = () => {
		emailRegTest = emailReg.test(form.mail);
	};

	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		}
	});

	const sendEmail = () => {
		let header = new Headers();
		header.append('Accept', '*/*');
		header.append('Content-type', 'application/json');
		fetch('/api/mail', {
			method: 'POST',
			headers: header,
			body: JSON.stringify({
				to: 'malone.julienne@gmail.com',
				from: 'portfolio-mj@outlook.com',
				subject: form.subject,
				text: form.text + `\n\n Send by ${form.name} ${form.surname} from ${form.mail}`
			})
		})
			.then(() =>
				Toast.fire({
					icon: 'success',
					title: 'Mail sent successfully'
				})
			)
			.catch(() =>
				Toast.fire({
					icon: 'error',
					title: 'Error while sending'
				})
			);
	};
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<div class="flex justify-center ">
	<div class="flex flex-col justify-center items-center mt-20 w-4/12 rounded-3xl p-8">
		<div class="flex text-2xl md:text-4xl mb-8 border-b-4 w-max">
			<p>Contact me</p>
		</div>

		<div class="flex flex-col items-center justify-center md:text-3xl">
			<form>
				<div class="flex flex-col mb-4">
					<label class="mb-2" for="name">Name</label>
					<input
						class="shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 border-green-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
						id="name"
						bind:value={form.name}
					/>
				</div>
				<div class="flex flex-col mb-4">
					<label for="surname">Surname</label>
					<input
						class="shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 border-green-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
						id="surname"
						bind:value={form.surname}
					/>
				</div>

				<div class="flex flex-col mb-4">
					<label class="mb-2" for="mail">Mail</label>
					<input
						class={`shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 ${
							emailRegTest ? 'border-green-400' : 'border-red-400'
						} focus:outline-none focus:ring-2 focus:ring-blue-400`}
						id="mail"
						bind:value={form.mail}
						on:input={handleChange}
					/>
				</div>
				<div class="flex flex-col mb-4">
					<label class="mb-2" for="subject">Subject</label>
					<input
						class="shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 border-green-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
						id="subject"
						bind:value={form.subject}
					/>
					<div class="flex flex-col">
						<label class="mb-2" for="content">Message</label>
						<textarea
							class="shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 border-green-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
							id="content"
							bind:value={form.text}
						/>
					</div>
				</div>
				<div class="flex justify-center ">
					<div
						class="g-recaptcha mt-8 mb-8"
						data-sitekey="6LfjiZocAAAAAFIR3g5dhAdBzrACfglTAgwE0taF"
						data-callback="verifyUser"
					/>
				</div>
			</form>
			<button
				on:click={sendEmail}
				style="color: white; background: #d81159;"
				class=" p-4 rounded-3xl hover:opacity-50"
				disabled={!isCaptchaValidate}>Send</button
			>
		</div>
	</div>
</div>
