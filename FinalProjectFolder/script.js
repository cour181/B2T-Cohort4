function addNotesForm(){

	let met = prompt ('Add Addional notes','');

//	alert('add Notes');
}
function myTextArea(){
	// let text=document.getElementById('').innerHTML;
	// myTextArea.value = myTextArea.value('text');

	// console.log(text);
	// console.log('met');
	// document.getElementById('myTextArea').innerHTML;

		let d = new Date();
	var textArea = document.getElementById('textArea').value; 
	var results = document.getElementById('results').innerHTML;
	document.getElementById('results').innerHTML = results + "<br>" + textArea +"<br>" + d.toString() + "<hr>";
	let met = document.getElementById('met').value;
	let vet = document.getElementById('vet').innerHTML;

	document.getElementById('vet').innerHTML = vet + "<br>" + textArea +"<br>" + d.toString() + "<hr>"
	console.log(textArea);
	console.log(vet);
}