let transfer = prompt("Mời bạn nhập đơn vị tiền cần chuyển (VND-->USD) || (USD-->VND: ");
let transferedMoney = 0;
if (transfer === "VND-->USD"){
    let money = prompt("Mời bạn nhập số tiền cần chuyển: ");
    transferedMoney = money / 23000;
    console.log(transferedMoney + " USD");
    
} else if (transfer === "USD-->VND"){
    let money = prompt("Mời bạn nhập số tiền cần chuyển: ");
    transferedMoney = money * 23000;
    console.log(transferedMoney + " VND");
} else {
    console.log("Cú pháp không hợp lệ!");
}