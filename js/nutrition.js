window.promiseCache = null;
const Foodname = (function(){
	const foodUrl = '/data/Food_Name.json';
	return {
		async load(){

			const response = await fetch(foodUrl);

			if(response.ok){
				const foodName = await response.json();
				window.promiseCache = foodName;
				
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
					
					Foodname.loadNames();
				});				

				this.loadNames();																														
			}					
		},
		loadNames(){
			const names = Main.queryAll(document,'.food .name');
			
			const foodName = window.promiseCache;
			
			for(const name of names){
				name.addEventListener('input', (event) => {
						if (event.defaultPrevented) {
							return;
						}
						var items = Main.query(document,'.food .items');
						
						if(items)
							items.remove();
						
						const ul = Main.newElem('ul',{'class':'items'});
						ul.style.position = 'absolute';
						ul.left = event.target.offsetLeft;
						ul.top = event.target.offsetTop + event.target.height;
						
						for(const item of Object.values(foodName)){
							
							const regex = new RegExp(".*"+event.target.value, "i");
							
							if(event.target.value.length > 0 && item.Food_Description_EN.match(regex)){
							
								const li = Main.newElem('li',{'class':'item'});	
								const labelName = Main.newElem('span',{'class':'label'});
								labelName.id = item.Food_Code;
								labelName.innerHTML = item.Food_Description_EN;
								
								labelName.addEventListener('click',(e) => Foodname.nameSelected(e,event.target));
												
								Main.subElem(ul,[{'e':li,'>':[{'e':labelName}]}]);		
							}
						}
						Main.subElem(event.target.parentElement,[{'e':ul}]);
					});	
				}
		},
		nameSelected(event, name){
			const foodId = name.closest('li.row [name="id"]');
			
			name.value = event.target.innerHTML;
			foodId.value = event.target.id;
			
		},
		deleteRow(elem){
			const row = elem.closest('li.row');
			row.remove();
		}
	}
})();
