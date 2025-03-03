let letter = prompt("Mời bạn nhập vào một ký tự: ");

if(letter.length === 1 && isNaN(letter) === true) {
    console.log("Ký tự " + letter + " là chữ cái");
} else {
    console.log();
    console.log(letter + " không phải là chữ cái");   
}