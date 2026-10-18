const Main = (function(){
		
	return {
		newElem(type,params){
			const elem = document.createElement(type);
			
			for(const param in params){
				elem.setAttribute(param,params[param]);
			}
			
			return elem;
		},
		setStyle(elem,params){		
			for(const name in params){
				elem.style.setProperty(name,params[name]);
			}
		},
		subElem(parent,params){
			for(const index in Object.values(params)){
				parent.append(Object.values(params)[index]['e']);
	
				if(Object.values(params)[index]['>'])
					this.subElem(Object.values(params)[index]['e'],Object.values(params)[index]['>']);			
			}		
													
		},		
		query(elem,selector){
			return elem.querySelector(selector);
		},
		
		queryAll(elem,selector){
			return elem.querySelectorAll(selector);
		},
		
		onload(){				
			Foodname.load();
		}
	}
})();

window.promiseFood = null;

const Foodname = (function(){
	const foodUrl = '/data/Food_Name.json';
	return {
		async load(){

			const response = await fetch(foodUrl);

			if(response.ok){
				const foodName = await response.json();
				window.promiseFood = foodName;
				
				var name = Main.query(document,'.name');

				name.addEventListener('input', (event) => {
					var names = Main.query(document,'.names');
					var items = Main.query(document,'.items');
					
					if(items)
						items.remove();
					
					const ul = Main.newElem('ul',{'class':'items'});
					for(const item of Object.values(foodName)){
						
						const regex = new RegExp(".*"+event.target.value+".*", "i");
						
						if(event.target.value.length > 0 && item.Food_Description_EN.match(regex)){
						
							const li = Main.newElem('li',{'class':'item'});	
							const labelName = Main.newElem('span',{'class':'label'});
							labelName.id = item.Food_Code;
							labelName.innerHTML = item.Food_Description_EN;
											
							Main.subElem(ul,[{'e':li,'>':[{'e':labelName}]}]);		
						}
					}
					Main.subElem(names,[{'e':ul}]);
				});												
																	
				
			}					
		}
	}
})();
