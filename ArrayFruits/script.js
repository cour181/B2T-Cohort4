
function addFruit(){
	let fruitFront = prompt ("Please Enter New fruit").toLowerCase();
//	console.log(fruit);
	fruit.unshift(fruitFront);
//	console.log(fruit);
	fruit.sort();
	document.getElementById("fruitInArray").innerHTML = fruit.join(" with ")
}

	let fruit = ["apple " , "orange " , "kiwi "];
	document.getElementById("fruitInArray").innerHTML = fruit;

