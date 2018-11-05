function getFormValue(){

	let nameVal = document.getElementById('fname').value;
	let name2Val = document.getElementById('lname').value;

	console.log(nameVal + name2Val);
//	console.log(name2Val);
	document.getElementById('display').innerHTML = 'Hello ' +nameVal + ' ' +name2Val;
//	document.getElementById('display').innerHTML = name2Val;


}