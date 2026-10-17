<script>
const testimonials = [
						{"text":"Working with Devendra has been a huge relief for me - I have been able to get all the little things moving forward that have been bugging for ages. He is very efficient in everything he does and communication with him has been very easy. I can highly recommend him!","author":"Kimmo Helle","website":"www.veloshop.fi"},	
						{
							"text":"Devendra is absolutely the best in Magento Platform. Great communication, and awesome work done with utter most efficiency. Concerns are addressed immediately, and updates are made to satisfaction. Highly recommend to anyone who wants no compromise in developing their Magento based applications. We will keep using Devendra’s expertise on our upcoming projects developments as well.",
							"author":"Aran",
							"website":"www.global-supply.co.uk"
						},
						{												
							"text":"Devendra was extremely helpful and efficient in his approach to both projects. He was able to add the google shopping app to our website, www.turkishemporium.co.uk with no difficulty, and we have already experienced an increase in orders as a result. Integrating orders received on the site with orderhub was more difficult, but Devendra overcame every obstacle along the way and the integration now works very well, making invoicing and order handling much easier than before. I would wholeheartedly recommend Devendra for any magento project as he has proven to be an expert developer.",
							"author":"Andrew Strachan",
							"website":"www.turkishemporium.co.uk",
						},
						{
							"text":"Devendra is very reliable to work with. He sorted out our PCI DSS compliances as well as our security issues with our website. We are a Magento based website and he has sorted many issues we have had no matter how big the issue or small.",
							"author":"Tarik Akgun",
							"website":"www.mysocks.co.uk"
						},
						{
							"text":"In the past I have employed freelancers, but not anymore. Working with Devendra has enabled me to accelerate my deployment of my Magento 2.2 store. His replies are speedy, his descriptions are clear and easy to understand (nothing too technical), his ability to fix issues and recommend workarounds has proved invaluable. I can only offer a glowing recommendation on his contribution to the ongoing development of www.cxonline.co.uk.",
							"author":"Ged Bourke",
							"website":"www.cxonline.co.uk"
						},
						{
							"text":"It is obvious that Devendra has substantial experience with back-end Magento work. He hammered through the shared task list with bravour and had a gentle communication-touch throughout the whole process. I can truly recommend him.",
							"author":"Jan Palm",
							"website":"www.legebutikken.no"
						},
						{
							"text":"Devendra recently worked on a Magento to third party order software project for me and I was very impressed by his work. Devendra was very efficient in his work along with fast polite email response and he was always very willing to follow up and investigate any additional questions and queries. I would certainly recommend Devendra and will most definitely be using him again myself.",
							"author":"Colin Chalkley",
							"website":"www.dogandfield.co.uk"
						},
						{
							"text":"Devendra developed an extension to integrate our Magento store with Zoho Creator. He was very responsive with emails, solved all the issues found in testing and charged us what he quoted. Very happy with the result. This custom extension has saved us a huge amount of time.",
							"author":"Ellen",
							"website":"www.shockcraft.co.nz"
						},
						{
							"text":"Devendra got us up and running very quickly with Magento to channel gabber order integration and it worked straight away without any conflicts. We asked to get the code re-written to use cURL which was done very quickly and responses to questions were very quick, positively recommend.",
							"author":"Jake Boyle",
							"website":"www.shoe-trees.co.uk"
						},
						{
							"text":"We have been working with Devendra for almost a year for our website and are really happy about his work! Always very reliable and available for our different projects. We'd recommend Devendra to anyone!",
							"author":"Coralie Simoneau",
							"website":""
						},
						{
							"text":"I have worked with Devendra for some Magento extensions, his development speed is really good and he delivers accurate results. In case of bugs, he takes it serious and solves it very quickly too.",
							"author":"Vincent Andre",
							"website":"www.arctic.ac"
						},
						{
							"text":"Devendra is a good developer that answers emails fast and can put extra priority in a project is there you are short of time.",
							"author":"Johan Strand",
							"website":"www.kabelbutiken.com"
						},
						{
							"text":"Devendra is very profesional, trustworthy, reliable and a great web developer who takes responsibility and care about each detail. He made all his job on time and was very helpful for a Magento extension I needed. I really like working with him in my project and will recommend any person to work with him. Thanks very much Devendra",
							"author":"Daniela Castellanos",
							"website":"www.castellanoethnicorigins.com"
						},
						{
							"text":"Devendra has worked on a number of sites for us over the past 2 years and so far have been perfectly happy with the quality of work. He's has a great attitude, always answers emails promptly and is very easy to work with. His estimates have been accurately and he has always been able to meet even the tightest deadlines we've set. I'd happily recommend Devendra to anyone",
							"author":"Tim Rees",
							"website":"www.refurbthat.com"
						},
						{
							"text":"I have used and am using his skills regularly for Magento projects. Changing admin functionalities, integration with external systems, additional front end functions. I found Devendra very dedicated to his work and extremely service oriented to help at any time.",
							"author":"Rene Verspuij",
							"website":"www.dymo-store.nl"
						},
						{
							"text":"Devendra was very helpful on my Magento project, he is really experienced and was always happy to help with anything we needed. I am happy to recommend him on future projects",
							"author":"Guy Azouri",
							"website":"www.thenandnowshop.com"
						}
					];
					
function createTestimonials(){
	const item = "<span></span><ul class=\"items projects\"><li class=\"author\"></li><li class=\"website\"></li></ul>";	
	const ulTest = document.querySelector('div.testimonials ul');
	
	for (const itemTest of testimonials) {
		const list = document.createElement('li');	
		list.className = 'testimonial';	
		list.innerHTML = item;
		ulTest.appendChild(list);

		const text = list.querySelector('span');
		
		text.textContent = itemTest.text;
		text.style.fontStyle = 'italic';
		
		const author = list.querySelector('.projects .author');
		author.textContent = itemTest.author;
		
		const website = list.querySelector('.projects .website');
		website.textContent = itemTest.website;
	}
	

	return ulTest.querySelectorAll('li.testimonial').length;	
	
}

let slideIndex = 1;
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".testimonials ul li.testimonial");
  
  if (n > slides.length) {
	  slideIndex = 1
  }
  if (n < 1) {
	  slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if(slideIndex > slides.length) slideIndex = 1;
	
  slides[slideIndex-1].style.display = "block";     
}

function testimonialsSelect(){

	const box = document.querySelector('.testimonials');
	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');

	// 2. Trigger an action when the mouse enters the element
	box.addEventListener('mouseenter', () => {
	  prev.style.display = 'block';
	  next.style.display = 'block';
	
	  prev.style.backgroundColor = 'rgb(85 64 175)';
	  next.style.backgroundColor = 'rgb(85 64 175)';	  
	});
	
	// 2. Trigger an action when the mouse enters the element
	box.addEventListener('mouseleave', () => {
	  prev.style.display = 'none';
	  next.style.display = 'none';	  
	});
}

class Icon {
  param;
 
  constructor(param) {
    this.param = param;
  }

  github(){
	const github = document.querySelector(this.param.selector);
	const top = github.querySelector('.top');
	const bottom = github.querySelector('.bottom');
	
	github.style.setProperty('--container-height',this.param.height + 'px');
	github.style.setProperty('--container-width',this.param.width + 'px');

	top.style.setProperty('--height',Math.floor(50 * this.param.height / 100) + 'px');
	top.style.setProperty('--width',Math.floor(65 * this.param.height / 100) + 'px');
	
	bottom.style.setProperty('--height',Math.floor(30 * this.param.height / 100) + 'px');
	bottom.style.setProperty('--width',Math.floor(30 * this.param.height / 100) + 'px');
	
	top.style.setProperty('--pseudo-before-height',Math.floor(25 * this.param.height / 100) + 'px');
	top.style.setProperty('--pseudo-before-width',Math.floor(25 * this.param.height / 100) + 'px');
	
	top.style.setProperty('--pseudo-after-height',Math.floor(30 * this.param.height / 100) + 'px');
	top.style.setProperty('--pseudo-after-width',Math.floor(30 * this.param.height / 100) + 'px');
  }

  mail() {
	const mail = document.querySelector(this.param.selector);
	const radius = Math.floor(this.param.height / 10);
	
	mail.style.setProperty('--height',this.param.height + 'px');
	mail.style.setProperty('--width',this.param.width + 'px');

	mail.style.setProperty('--borderRadius',radius + 'px');
	mail.style.setProperty('--pseudo-height',this.param.width + 'px');
	mail.style.setProperty('--pseudo-width',this.param.width + 'px');

  }
  
  linked(){
	  const container = document.querySelector(this.param.selector);
	  const linkedIcon = container.querySelector('.linkedin-icon-bg');
	  const i = container.querySelector('.i');
	  const n = container.querySelector('.n');
	  const radius = Math.floor(this.param.height / 10);
	 
	  container.style.setProperty('--container-height',this.param.height + 'px');
	  container.style.setProperty('--container-width',this.param.width + 'px');
	  
	  linkedIcon.style.setProperty('--borderRadius',radius + 'px');
	  linkedIcon.style.setProperty('--height',this.param.height + 'px');
	  linkedIcon.style.setProperty('--width',this.param.width + 'px');
	  
	  i.style.setProperty('--height',Math.floor(45 * this.param.height / 100) + 'px');
	  i.style.setProperty('--width',Math.floor(15 * this.param.height / 100) + 'px');
	  i.style.setProperty('--bottom',Math.floor(15 * this.param.height / 100) + 'px');
	  i.style.setProperty('--left',Math.floor(15 * this.param.height / 100) + 'px');
	  
	  i.style.setProperty('--pseudo-after-height',Math.floor(17 * this.param.height / 100) + 'px');
	  i.style.setProperty('--pseudo-after-width',Math.floor(17 * this.param.height / 100) + 'px');
	  i.style.setProperty('--pseudo-after-bottom',Math.floor(52 * this.param.height / 100) + 'px');
	  i.style.setProperty('--pseudo-after-left','-'+Math.floor(2 * this.param.height / 100) + 'px');
	  
	  n.style.setProperty('--height',Math.floor(45 * this.param.height / 100) + 'px');
	  n.style.setProperty('--width',Math.floor(15 * this.param.height / 100) + 'px');
	  n.style.setProperty('--bottom',Math.floor(15 * this.param.height / 100) + 'px');
	  n.style.setProperty('--left',Math.floor(40 * this.param.height / 100) + 'px');
	  
	  n.style.setProperty('--pseudo-before-height',Math.floor(45 * this.param.height / 100) + 'px');
	  n.style.setProperty('--pseudo-before-width',Math.floor(35 * this.param.height / 100) + 'px');
	  n.style.setProperty('--pseudo-before-bottom','0px');
	  n.style.setProperty('--pseudo-before-left','-'+Math.floor(12 * this.param.height / 100) + 'px');
	  
	  n.style.setProperty('--pseudo-after-height',Math.floor(35 * this.param.height / 100) + 'px');
	  n.style.setProperty('--pseudo-after-width',Math.floor(15 * this.param.height / 100) + 'px');
	  n.style.setProperty('--pseudo-after-bottom','0px');
	  n.style.setProperty('--pseudo-after-left',Math.floor(15 * this.param.height / 100) + 'px');
  }
}

function onload(){
	len = createTestimonials();
	testimonialsSelect();
	slideIndex = Math.floor(Math.random() * len); 
	showSlides(slideIndex);
	
	const gitHubIcon = new Icon({selector:".github_container",height:"40",width:"40"});
	gitHubIcon.github();
	
	const mailIcon = new Icon({selector:".letter",height:"40",width:"50"});
	mailIcon.mail();
	
	const linkedIcon = new Icon({selector:".container",height:"40",width:"40"});
	linkedIcon.linked();
}

</script>
