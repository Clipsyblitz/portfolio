<script>
	import Conversation from '../utils/components/Conversation.svelte';
	let messages = [
		{
			p: 0,
			message: "What is your profession ?"
		},
		{
			p: 1,
			message: "I am currently studying computer engineering in the 5th year at Polytech Grenoble."
		}
	]
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

<div class="mt-20">
	<Conversation {messages}/>
</div>
