function checkDay(){

//	let day=prompt('Please Enter a number');
	let d = new Date();
    let n = d.getDay()
    document.getElementById("display").innerHTML = n;

	switch  (n){
		case 0:
			day ='Sunday';
			console.log('Sunday');
			document.getElementById("display").innerHTML = "Hey it Sunday Welcome to Sunday"
			break;
		case 1:
			day ='Monday';
			console.log('Monday');
			document.getElementById("display").innerHTML = "Hey it Monday Welcome to Monday";
			break;
		case 2:
			day ='Tuesday';
			console.log('Tuesday'); 
			document.getElementById("display").innerHTML = "Hey it Tuesday Welcome to Tuesday"
			break;
		case 3:
			day ='Wednesday';
			console.log('Wednesday');
			document.getElementById("display").innerHTML = "Hey it Wednesday Welcome to Wednesday"
			break;
		case 4:
			day ='Thursday';
			console.log('Thursday');
			document.getElementById("display").innerHTML = "Hey it Thursday Welcome to Thursday"
			break;
		case 5:
			day ='Friday';
			console.log('Friday');
			document.getElementById("display").innerHTML = "Hey it Friday Welcome to Friday"
			break;
		case 6:
			day ='Saturday';
			console.log('Saturday');
			document.getElementById("display").innerHTML = "Hey it Saturday Welcome to Saturday"
			break;	
	}

}