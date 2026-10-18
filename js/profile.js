const Icon = (function() {
  param;
 
  return{
	  github(param){
		const github = document.querySelector(param.selector);
		const top = github.querySelector('.top');
		const bottom = github.querySelector('.bottom');
		
		github.style.setProperty('--container-height',param.height + 'px');
		github.style.setProperty('--container-width',param.width + 'px');

		top.style.setProperty('--height',Math.floor(50 * param.height / 100) + 'px');
		top.style.setProperty('--width',Math.floor(65 * param.height / 100) + 'px');
		
		bottom.style.setProperty('--height',Math.floor(30 * param.height / 100) + 'px');
		bottom.style.setProperty('--width',Math.floor(30 * param.height / 100) + 'px');
		
		top.style.setProperty('--pseudo-before-height',Math.floor(25 * param.height / 100) + 'px');
		top.style.setProperty('--pseudo-before-width',Math.floor(25 * param.height / 100) + 'px');
		
		top.style.setProperty('--pseudo-after-height',Math.floor(30 * param.height / 100) + 'px');
		top.style.setProperty('--pseudo-after-width',Math.floor(30 * param.height / 100) + 'px');
	  }

	  mail(param) {
		const mail = document.querySelector(param.selector);
		const radius = Math.floor(param.height / 10);
		
		mail.style.setProperty('--height',param.height + 'px');
		mail.style.setProperty('--width',param.width + 'px');

		mail.style.setProperty('--borderRadius',radius + 'px');
		mail.style.setProperty('--pseudo-height',param.width + 'px');
		mail.style.setProperty('--pseudo-width',param.width + 'px');

	  }
	  
	  linked(param){
		  const container = document.querySelector(param.selector);
		  const linkedIcon = container.querySelector('.linkedin-icon-bg');
		  const i = container.querySelector('.i');
		  const n = container.querySelector('.n');
		  const radius = Math.floor(param.height / 10);
		 
		  container.style.setProperty('--container-height',param.height + 'px');
		  container.style.setProperty('--container-width',param.width + 'px');
		  
		  linkedIcon.style.setProperty('--borderRadius',radius + 'px');
		  linkedIcon.style.setProperty('--height',param.height + 'px');
		  linkedIcon.style.setProperty('--width',param.width + 'px');
		  
		  i.style.setProperty('--height',Math.floor(45 * param.height / 100) + 'px');
		  i.style.setProperty('--width',Math.floor(15 * param.height / 100) + 'px');
		  i.style.setProperty('--bottom',Math.floor(15 * param.height / 100) + 'px');
		  i.style.setProperty('--left',Math.floor(15 * param.height / 100) + 'px');
		  
		  i.style.setProperty('--pseudo-after-height',Math.floor(17 * param.height / 100) + 'px');
		  i.style.setProperty('--pseudo-after-width',Math.floor(17 * param.height / 100) + 'px');
		  i.style.setProperty('--pseudo-after-bottom',Math.floor(52 * param.height / 100) + 'px');
		  i.style.setProperty('--pseudo-after-left','-'+Math.floor(2 * param.height / 100) + 'px');
		  
		  n.style.setProperty('--height',Math.floor(45 * param.height / 100) + 'px');
		  n.style.setProperty('--width',Math.floor(15 * param.height / 100) + 'px');
		  n.style.setProperty('--bottom',Math.floor(15 * param.height / 100) + 'px');
		  n.style.setProperty('--left',Math.floor(40 * param.height / 100) + 'px');
		  
		  n.style.setProperty('--pseudo-before-height',Math.floor(45 * param.height / 100) + 'px');
		  n.style.setProperty('--pseudo-before-width',Math.floor(35 * param.height / 100) + 'px');
		  n.style.setProperty('--pseudo-before-bottom','0px');
		  n.style.setProperty('--pseudo-before-left','-'+Math.floor(12 * param.height / 100) + 'px');
		  
		  n.style.setProperty('--pseudo-after-height',Math.floor(35 * param.height / 100) + 'px');
		  n.style.setProperty('--pseudo-after-width',Math.floor(15 * param.height / 100) + 'px');
		  n.style.setProperty('--pseudo-after-bottom','0px');
		  n.style.setProperty('--pseudo-after-left',Math.floor(15 * param.height / 100) + 'px');
	  }
	}
})();

function onload(){
	Icon.github({selector:".github_container",height:"40",width:"40"});
	Icon.mail({selector:".letter",height:"40",width:"50"});
	Icon.linked({selector:".container",height:"40",width:"40"});	
}
