//Tar in elemet som jag skapat i min html-fil. 
var foodDish = document.getElementById('food-title');
var foodLinkParent = document.getElementById('link-parent');

//För att en maträtt och länk ska synas direkt när användaren kommer in på sidan körs denna 
//funktion en gång direkt. 
getNewDish(food);

//Nedan funktion anropas om man klickar på knappen "middagstips". onClick inlagt i html-filen.
//Funktionen kollar om rutan för vegetariska maträtter är ikryssad eller inte. Checkbox är inlagt i 
//html-filen. Vill användaren se bara vegetariska recept körs en filterfunktion som går igenom 
//alla objekt i min lista food och tar ut de objekt där jag anget "isVeg: true". 
//Sen anropas funktionen GetNewDish. 
function clickFunktion(){ 
	if(document.getElementById('veg').checked === true){
		var filteredVeg = food.filter(function(food){
			return food.isVeg;
		});
		getNewDish(filteredVeg);
	}else{
		getNewDish(food);
	}
}

//Nedan funktion tar ut ett random värde från listan food eller filteredVeg, beronde på vilket
//argument som skickats med i föregående funktion. Sedan sätts titel och länk från listan
//till innerHtml så att det blir tillgängligt på websidan. Länken skapas med ett nytt a element 
//i denna js fil för att enkelt få med rätt url samtidigt som texten "Recept länk" visas. 
function getNewDish(foodList){
	var randomIndex = Math.floor(Math.random() * foodList.length);
	var dish = foodList[randomIndex];
	foodDish.innerHTML = dish.title;
	foodLinkParent.innerHTML = `<a id="link" target="_blank" href="${dish.url}">Recept Länk</a>`; 
}

