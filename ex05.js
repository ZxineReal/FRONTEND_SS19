let str = String(prompt("Mời bạn nhập vào một chuỗi: "));

if (str.trim().includes(" ")){
    console.log("Chuỗi chứa dấu cách");   
} else {
    console.log("Chuỗi không chứa dấu cách");   
}