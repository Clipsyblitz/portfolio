<script>
	import Swal from 'sweetalert2/dist/sweetalert2.all.js';

	$ :isFormValid = false;

	let form = {
		name: '',
		surname: '',
		mail: '',
		subject: '',
		text: ''
	};

	let emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

	let formValidator = {
		name: false,
		surname: false,
		mail: false,
		subject: false,
		text: false
	};

	const handleChange = (inputName) => {
		if (inputName === 'mail') {
			formValidator[inputName] = emailReg.test(form.mail);
		} else {
			formValidator[inputName] = form[inputName] !== '';
		}
		
		isFormValid = formValidator.mail && formValidator.name && formValidator.subject && formValidator.surname && formValidator.text
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

	const onSubmit = () => {
		sendEmail();
	};

	const sendEmail = async () => {
		grecaptcha.ready(() => {
			grecaptcha
				.execute('6LcoXA4dAAAAADFIB6p4xf3eTnZQRr1-hDu39xWm', { action: 'contactMail' })
				.then(async (t) => {
					let header = new Headers();
					header.append('Accept', '*/*');
					header.append('Content-type', 'application/json');
					const response = await fetch('/api/mail', {
						method: 'POST',
						body: JSON.stringify({
							token: t,
							mailContent: {
								to: 'malone.julienne@gmail.com',
								subject: form.subject,
								text: form.text + `\n\n Send by ${form.name} ${form.surname} from ${form.mail}`
							}
						})
					});
					if (response.status === 200) {
						Toast.fire({
							icon: 'success',
							title: 'Mail sent successfully'
						});
					} else {
						Toast.fire({
							icon: 'error',
							title: 'Error while sending'
						});
					}
				});
		});
	};
</script>

<svelte:head>
	<script
		src="https://www.google.com/recaptcha/api.js?render=6LcoXA4dAAAAADFIB6p4xf3eTnZQRr1-hDu39xWm"
		async
		defer></script>
</svelte:head>

<div class="flex justify-center ">
	<div class="flex flex-col justify-center items-center mt-20 w-4/12 rounded-3xl p-8">
		<div class="flex text-2xl md:text-4xl mb-8 border-b-4 w-max">
			<p>Contact me</p>
		</div>

		<div class="flex flex-col items-center justify-center md:text-3xl">
			<form on:submit|preventDefault={onSubmit}>
				<div class="flex flex-col mb-4">
					<label class="mb-2" for="name">Name</label>
					<input
						class={`shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 ${
							formValidator.name ? 'border-green-400' : 'border-red-400'
						} focus:outline-none focus:ring-2 focus:ring-blue-400`}
						id="name"
						bind:value={form.name}
						on:input={() => handleChange('name')}
					/>
				</div>
				<div class="flex flex-col mb-4">
					<label for="surname">Surname</label>
					<input
						class={`shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 ${
							formValidator.surname ? 'border-green-400' : 'border-red-400'
						} focus:outline-none focus:ring-2 focus:ring-blue-400`}
						id="surname"
						bind:value={form.surname}
						on:input={() => handleChange('surname')}
					/>
				</div>

				<div class="flex flex-col mb-4">
					<label class="mb-2" for="mail">Mail</label>
					<input
						class={`shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 ${
							formValidator.mail ? 'border-green-400' : 'border-red-400'
						} focus:outline-none focus:ring-2 focus:ring-blue-400`}
						id="mail"
						bind:value={form.mail}
						on:input={() => handleChange('mail')}
					/>
				</div>
				<div class="flex flex-col mb-4">
					<label class="mb-2" for="subject">Subject</label>
					<input
						class={`shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 ${
							formValidator.subject ? 'border-green-400' : 'border-red-400'
						} focus:outline-none focus:ring-2 focus:ring-blue-400`}
						id="subject"
						bind:value={form.subject}
						on:input={() => handleChange('subject')}
					/>
				</div>
				<div class="flex flex-col mb-4">
					<label class="mb-2" for="content">Message</label>
					<textarea
						class={`shadow-md bg-gray-50 rounded-2xl pr-3 pl-3 text-gray-600 border-l-8 ${
							formValidator.text ? 'border-green-400' : 'border-red-400'
						} focus:outline-none focus:ring-2 focus:ring-blue-400`}
						id="content"
						bind:value={form.text}
						on:input={() => handleChange('text')}
					/>
				</div>
				<div class="flex justify-center mt-8">
					<button
						disabled={!isFormValid}
						type="submit"
						style="color: white; background: #d81159;"
						class={`p-4 rounded-3xl hover:opacity-50 disabled:opacity-50`}>Send</button
					>
				</div>
				<div>{isFormValid}</div>
				<div>{JSON.stringify(formValidator)}</div>
			</form>
		</div>
	</div>
</div>
