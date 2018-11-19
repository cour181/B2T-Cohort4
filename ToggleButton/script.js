
let toggleButton = document.getElementById('toggleButton');

function changeToggleButton(){
	if (toggleButton.value === 'ON'){
		toggleButton.value = 'OFF';
	}else {
		toggleButton.value = 'ON';
	}
}

document.getElementById('toggleButton').addEventListener('click', changeToggleButton);

let myBox = document.getElementById('myBox');

function changeBoxColor(){
	if (toggleButton.value === 'ON'   &&    myBox.style.backgroundColor === 'green'){
		myBox.style.backgroundColor = 'red';
	}else {
		myBox.style.backgroundColor = 'green';
	}
}


document.getElementById('myBox').addEventListener('mouseover', changeBoxColor);
document.getElementById('myBox').addEventListener('mouseleave', changeBoxColor);

//function onoff(){
//  currentvalue = document.getElementById('onoff').value;
//  if(currentvalue == "Off"){
//    document.getElementById("onoff").value="On";
//  }else{
//    document.getElementById("onoff").value="Off";
//  }
//}