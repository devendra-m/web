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


const Foodname = (function(){
	let foodUrl = '/data/Food_Name.json';
	return {
		await load(){

			const response = await fetch(foodUrl);
			
			if(response.ok){
				const foodName = response.json;
				
				var name = Main.query(document,'.name');
				var names = Main.query(document,'.names');
				
				const ul = Main.newElem('ul',{'class':'items'});
				
				for(const item of Object.values(foodName)){
					const li = Main.newElem('li',{'class':'item'});	
					const labelName = Main.newElem('span',{'class':'label'});
					labelName.id = item.Food_Code;
					labelName.innerHTML = item.Food_Description_EN;
									
					Main.subElem(ul,[{'e':li,'>':[{'e':labelName}]}]);		
				}
																	
				Main.subElem(names,[{'e':ul}]);
			}					
		}
	}
})();
