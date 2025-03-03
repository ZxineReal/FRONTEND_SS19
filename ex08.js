let month = Number(prompt("Mời bạn nhập vào một tháng: "));

let spring = "mùa xuân";
let summer = "mùa hè";
let autumn = "mùa thu";
let winter = "mùa đông";
let season = "";

switch (month) {
    case 1:
        season += spring;
        break;
    case 2:
        season += spring;
        break;
    case 3:
        season += spring;
        break;
    case 4:
        season += summer;
        break;
    case 5:
        season += summer;
        break;
    case 6:
        season += summer;
        break;
    case 7:
        season += autumn;
        break;
    case 8:
        season += autumn;
        break;
    case 9:
        season += autumn;
        break;
    case 10:
        season += winter;
        break;
    case 11:
        season += winter;
        break;
    case 12:
        season += winter;
        break;
    default:
        season += "Tháng không hợp lệ!";
        break;
}

console.log(season);
