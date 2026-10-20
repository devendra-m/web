window.promiseCache = null;
window.lastKeyTime = 0;
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
						
					  const currentTime = event.timeStamp;
					 
					  console.log(currentTime - window.lastKeyTime);
					  console.log(currentTime);
					  					  					
					  // Calculate the interval (if it's not the very first keystroke)
					  if (window.lastKeyTime > 0 && (currentTime - window.lastKeyTime) < 100) {
						window.lastKeyTime = currentTime;
						return;
					  }
					  
					  window.lastKeyTime = currentTime;
					  
					 

					  // Update the reference for the next key press
					 
											
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
								//const item = JSON.parse(match[0]);
								const li = Main.newElem('li',{'class':'item'});	
								const labelName = Main.newElem('span',{'class':'label'});
								labelName.id = item.Food_Code;
								labelName.innerHTML = item.Food_Description_EN;
								
								labelName.addEventListener('click',(e) => Foodname.nameSelected(e,event.target,ul));
												
								Main.subElem(ul,[{'e':li,'>':[{'e':labelName}]}]);		
							}
						}
						//}
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
			
			var foodIds = Main.queryAll(document,'.food_id');		
			
			//var weightGrams = Main.queryAll(document,'input[foodId*="["]');		
								
			const content = Main.query(document,'.content');
			const contentHtml = content.innerHTML;
			content.innerHTML = '';
						
			const response = await fetch('/data/Nutrient_Name.json');
			const response1 = await fetch('/data/Nutrient_Amount.json');
						
			if(response.ok && response1.ok){
				const nutritionName = await response.json();
				const nutritionAmount = await response1.json();
	
				const nutritionAmounts = [{}];
				
				
				//const matches = nutritionAmount.matchAll(test);
				
				for(const foodId of foodIds){	
					
					/*
					Main.query(foodId.closest('li.row'),'.weightGram');
					
					const match = foodId.name.match(regex);
					console.log(match);
					console.log(foodId.name);
					const index = match[1];
					
					const weightGram = Main.query(document,'weightGrams['+index+']');
					*/
					const weightGram = Main.query(foodId.closest('li.row'),'.weightGram');
					
					const foodWeight = weightGram.value;
					//let foodNutritionAmount = 0;
					//let nutritionAmountRow = null;
					
					for(const item of nutritionAmount){						
						if(item.Food_Code === foodId.value){
							const foodNutritionAmount = nutrition.Nutrition_Amount * foodWeight / 100; 
							
							for(const nutrition of nutritionAmounts){
								if(nutrition.nutrition_code === item.Nutrition_Code){
									nutrition.nutrition_amount += foodNutritionAmount;
								}
							}							
							
							nutritionAmounts.push({'nutrition_code':item.Nutrition_Code,'nutrition_amount':foodNutritionAmount});						
						}
					}
					
					/*const test = /\{"Food_Code":${foodId}.*?\}/g;
					const matches = nutritionAmount.matchAll(test);

					
					for(const match of matches){
						
						const nutrition = match[0];
						const foodNutritionAmount = nutrition.Nutrition_Amount * foodWeight / 100; 
						nutritionAmounts.push({'nutrition_code':nutrition.Nutrition_Code,'nutrition_amount':foodNutritionAmount});						
					}*/
					//const nutritionAmountRow = nutritionAmount.find(item => item.Food_Code === foodId.value);
					//console.log(nutritionAmountRow);
					//const foodNutritionAmount = Math.floor(nutritionAmountRow.Nutrition_Amount * foodWeight / 100); 
					
					
				
					//console.log({'nutrition_code':nutritionAmountRow.Nutrition_Code,'nutrition_amount':foodNutritionAmount});
					
					nutritionAmounts.push({'nutrition_code':nutritionAmountRow.Nutrition_Code,'nutrition_amount':foodNutritionAmount});
				}
				
				const table = Main.newElem('table',{'class':'table'});
				let tr = Main.newElem('tr');
				let td = Main.newElem('td',{'class':'column-1'});

				let span = Main.newElem('span',{'class':'name'});
				span.innerHTML = 'Nutrition Name';
				
				Main.subElem(table,[{'e':tr,'>':[{'e':td,'>':[{'e':span}]}]}]);		
				
				td = Main.newElem('td',{'class':'column-2'});
				span = Main.newElem('span',{'class':'amount'});
				span.innerHTML = 'Nutrition Amount';
								
				Main.subElem(table,[{'e':tr,'>':[{'e':td,'>':[{'e':span}]}]}]);
				Main.subElem(content,[{'e':table}]);								
				
				for(const item of Object.values(nutritionName)){		
					
					let nutritionAmountRow = 0;
					for(const nutritionAmount of nutritionAmounts){
						if(nutritionAmount.Nutrition_Code === item.Nutrition_Code){
							nutritionAmountRow = nutritionAmount;
						}
					}
					tr = Main.newElem('tr');
					td = Main.newElem('td',{'class':'column-1'});
					span = Main.newElem('span',{'class':'name'});
					span.innerHTML = item.Nutrient_Name_EN;
					
					Main.subElem(table,[{'e':tr,'>':[{'e':td,'>':[{'e':span}]}]}]);		
					
					td = Main.newElem('td',{'class':'column-2'});
					span = Main.newElem('span',{'class':'amount'});
					span.innerHTML = nutritionAmountRow.nutrition_amount;																
										
					Main.subElem(table,[{'e':tr,'>':[{'e':td,'>':[{'e':span}]}]}]);		
				}
				
			}
		}
	}
})();
