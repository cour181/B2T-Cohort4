function cArray(){

	let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
  	let o = ["th", "st", "nd", "rd"];
  //	for(let i = 0, i < 5, i++){
  	console.log("1"+o[1]+" choice is "+color[0]+"<br/"+"2"+o[2]+" choice is "+color[1]+"<br/"+"3"+o[2]+" choice is "+color[2]+"<br/"+"4"+o[0]+" choice is "+color[3]+"<br/"+"etc");
  	document.getElementById('display').innerHTML = "1"+o[1]+" choice is "+color[0]+"."+"<br/"+"2"+o[2]+" choice is "+color[1]+"<br/"+"3"+o[2]+" choice is "+color[2]+"<br/"+"4"+o[0]+" choice is "+color[3]+"<br/"+"etc";
  	document.getElementById('display').innerHTML += '<br/>'+"2"+o[2]+" choice is "+color[1]+"."+"<br/";
  	document.getElementById('display').innerHTML += '<br/>'+"3"+o[3]+" choice is "+color[2]+"."+"<br/";
  	document.getElementById('display').innerHTML += '<br/>'+"4"+o[0]+" choice is "+color[3]+"."+"<br/";
  	document.getElementById('display').innerHTML += '<br/>'+"etc"+"."+"<br/";
}


//function mergeSort(arrA,arrB) {
//  let singleSorted = [];
//  while (arrA.length && arrB.length) {
//    if (arrA[0] < arrB[0]) {
//      singleSorted.push(arrA[0]);
//      arrA.shift();
//    } else {
//      singleSorted.push(arrB[0]);
//      arrB.shift();
//    }
//  }
//  return singleSorted.concat(arrA,arrB);
//}