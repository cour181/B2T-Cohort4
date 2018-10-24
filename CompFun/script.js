function sForm() {
	let name = document.getElementById('flname').value;
	let email = document.getElementById('email').value;
	let summary =document.getElementById('textArea').value;
	document.getElementById('display').innerHTML = "Hello " + name + "Your email is " +email + " Your summary is " + summary + "   CORRRECT!!!";
//	document.getElementById('display').innerHTML = "your summary is " + summary + "   CORRRECT!!!";    //

}