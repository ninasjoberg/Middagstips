var background = document.getElementsByTagName('body')[0];
var foodDish = document.getElementById('foodP');
var foodLink = document.getElementById('link');
var foodLinkParent = document.getElementById('link-parent');

clickFunktion();

function clickFunktion(){ 
	if(document.getElementById('veg').checked === true){
		checkedVeg();
	}else{
		var randomIndex = Math.floor(Math.random() * food.length);
		var dish = food[randomIndex];
		foodDish.innerHTML = dish.title;
		foodLinkParent.innerHTML = `<a id="link" target="_blank" href="${dish.url}">Recept Länk</a>`; 
	}	
}

function isVegTrueFilter(food){
	if(food.isVeg === true){
		return true;
	}
}

function checkedVeg(){
	var filteredVeg = food.filter(isVegTrueFilter);
	var randomIndex = Math.floor(Math.random() * filteredVeg.length);
	var dishVeg = filteredVeg[randomIndex];
	foodDish.innerHTML = dishVeg.title;
	foodLinkParent.innerHTML = `<a id="link" target="_blank" href="${dishVeg.url}">Recept Länk</a>`; 
}


/*
function clickFunktion(){ 
	var theList = [];
	if(document.getElementById('veg').checked === true){
		theList = food.filter(isVegTrueFilter);
	}else{
		theList = food;
	}	
	getFood(theList);
}

function getFood(list) {
	var randomIndex = Math.floor(Math.random() * list.length);
	foodDish.innerHTML = list[randomIndex].title;
	foodLinkParent = `<a id="link" target="_blank" href="${dish.url}">Recept Länk</a>`; 
}
*/