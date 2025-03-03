let number1 = prompt("Mời bạn nhập vào số thứ nhất: ");
let number2 = prompt("Mời bạn nhập vào số thứ hai: ");
let number3 = prompt("Mời bạn nhập vào số thứ ba: ");
let biggestNumber = 0;

number1 > number2? 
biggestNumber = number1
: number2 > number3? 
biggestNumber = number2
: biggestNumber = number3;

alert(`Số lớn nhất trong ba số là: ${biggestNumber}`);
