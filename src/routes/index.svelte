<script>
	import Conversation from '../utils/components/Conversation.svelte';
	let messages = [
		{
			p: 0,
			message: "Hello Malone, can you please introduce yourself?"
		},
		{
			p: 1,
			message: "Hello ! So my name is Malone JULIENNE and I am 22."
		},
		{
			p: 0,
			message: "Thank you. What is your profession ? Are you still a student?"
		},
		{
			p: 1,
			message: "Yes, I am currently 5th year student in <b >computer engineering</b> at Polytech Grenoble."
		},
		{
			p: 0,
			message: "What is it consist?"
		},
		{
			p: 1,
			message:
				"I was able to learn to master many technologies such as <b >Java</b>, <b >C</b>, <b >Python</b> or even <b >Angular</b>, <b >ReactJs</b> and <b >SQL</b> during this technical training."
		},
		{
			p: 0,
			message: "Why do you learn computer engineering?"
		},
		{
			p: 1,
			message:
				"IT has always been a topic of interest to me, as are <b >new technologies</b>. It's boat I know, but I'm really <b >passionate</b> and that's why I give 100% of myself in my work, because I love what I do."
		},
		{
			p: 1,
			message:
				"In other words, <b >code</b>, <b >create</b> and <b >learn</b>. Choosing another specialty now seems impossible to me."
		},
		{
			p: 0,
			message: "I have please a last question for you: Where do you see yourself in 5 years?"
		},
		{
			p: 1,
			message:
				"I am an <b >ambitious</b> person and that is why in the near future I see myself joining a company that matches my values ​​in which I could learn and improve myself. Also, in the more or less distant future, I will like to start my own business."
		}
	];
</script>

<!-- <div class="text-justify leading-loose md:text-xl">
	I am currently studying computer engineering in the 4th year at Polytech Grenoble.<br /> I was
	able to learn to master many technologies such as Java, C, Python or even Angular, ReactJs and SQL
	during this technical training. <br />IT has always been a topic of interest to me, as are new
	technologies. It's boat I know, but I'm really passionate and that's why I give 100% of myself in
	my work, because I love what I do. In other words, code, create and learn. Choosing another
	specialty now seems impossible to me. <br />I am an ambitious person and that is why in the near
	future I see myself joining a company that matches my values ​​in which I could learn and improve.
	Also, in the more or less distant future, I will like to start my own business.
</div> -->

<div class="mt-20 text-pink-300">
	<Conversation {messages} />
</div>
