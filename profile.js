<script>

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

	const gitHubIcon = new Icon({selector:".github_container",height:"40",width:"40"});
	gitHubIcon.github();
	
	const mailIcon = new Icon({selector:".letter",height:"40",width:"50"});
	mailIcon.mail();
	
	const linkedIcon = new Icon({selector:".container",height:"40",width:"40"});
	linkedIcon.linked();
}

</script>
