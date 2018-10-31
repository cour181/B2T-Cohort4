function fizzBuzz(){
		document.getElementById('display').innerHTML = '';
//		for (let i= 1; i < 1100; i++)
//		{
//			if (i%3 ==0 i % 5 == 0)
//			{
//				console.log(i + "FizzBuzz" );
//			}
//			else if (1%3 === 0)
//			{
//				console.log(i+ "Fizz");
//			}
//			else if (1%5 ===0)
//		}
//		{
//			console.log(1+"Buzz");
//		}
//		else
//		{
//			console.log(i);
//		}
//		document.getElementById('display').innerHTML = '';
//}
for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
}
