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
			Icon.github({selector:".github_container",height:"40",width:"40"});
			Icon.mail({selector:".letter",height:"40",width:"50"});
			Icon.linked({selector:".container",height:"40",width:"40"});		
			
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
				
				var name = Main.query(document,'.food .name');
				var add = Main.query(document,'.food .add');
				
				var deleteRecord = Main.query(document,'.food .delete');
				
				add.addEventListener('click', (event) => {
					
					const rows = Main.queryAll(document,'.food li.row');
					const row = Main.query(document,'.food ul.template');
					
					const lastRow = rows[rows.length - 2];
	
					const li = Main.newElem('li',{'class':'row'});	
					const ul = Main.newElem('ul');	
					
					ul.innerHTML = row.innerHTML;
					
					Main.subElem(li,[{'e':ul}]);
												
					lastRow.after(li);
				});				

				name.addEventListener('input', (event) => {
					
					var items = Main.query(document,'.food .items');
					
					if(items)
						items.remove();
					
					const ul = Main.newElem('ul',{'class':'items'});
					ul.style.position = 'absolute';
					ul.left = event.target.offsetLeft;
					ul.top = event.target.offsetTop + event.target.height;
					
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
					Main.subElem(event.target.parentElement,[{'e':ul}]);
				});												
																	
				
			}					
		},
		
		deleteRow(elem){
			const row = elem.closest('li.row');
			row.remove();
		}
	}
})();
