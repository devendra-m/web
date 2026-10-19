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
				var calculate = Main.query(document,'.food .calculate');
				
				var deleteRecord = Main.query(document,'.food .delete');
				
				calculate.addEventListener('click', (e) => this.submit(e));
				
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
								
								labelName.addEventListener('click',(e) => Foodname.nameSelected(e,event.target,ul));
												
								Main.subElem(ul,[{'e':li,'>':[{'e':labelName}]}]);		
							}
						}
						Main.subElem(event.target.parentElement,[{'e':ul}]);
					});	
				}
		},
		nameSelected(event, name, names){
			const foodId = Main.query(name.closest('li.row'),'[name="id[]"]');
			
			name.value = event.target.innerHTML;
			foodId.value = event.target.id;		
			
			names.remove();	
		},
		deleteRow(elem){
			const row = elem.closest('li.row');
			row.remove();
		},
		async submit(e){
			const content = Main.query(document,'.content');
			const contentHtml = content.innerHTML;
			content.innerHTML = '';
						
			const response = await fetch('/data/Nutrient_Name.json');
			
			if(response.ok){
				const nutritionName = await response.json();
			
				const table = Main.newElem('table',{'class':'table'});
				const tr = Main.newElem('tr');
				const td = Main.newElem('td');
				
				Main.subElem(content,[{'e':table}]);		
				Main.subElem(table,[{'e':tr,'>':{'e':td}}]);						
				
				for(const item of Object.values(nutritionName)){		
							
					let tr = Main.newElem('tr');
					let td = Main.newElem('td',{'class':'column-1'});
					let span = Main.newElem('span',{'class':'name'});
					span.innerHTML = item.Nutrient_Name_EN;
					
					Main.subElem(table,[{'e':tr,'>':{'e':td,'>':span}}]);		
					
					tr = Main.newElem('tr');
					td = Main.newElem('td',{'class':'column-2'});
					span = Main.newElem('span',{'class':'amount'});
					span.innerHTML = '';
				
					Main.subElem(table,[{'e':tr,'>':{'e':td,'>':span}}]);		
				}
				
			}
		}
	}
})();
