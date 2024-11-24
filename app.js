
//  const person = parseInt(prompt('жашын канчада?'))
// if (person >=13 && person <=19) {
//     alert('ты подросток');
// } else if (person >=20 && person <=65){
//     alert('ты взрослый');
// } else {
//     alert('ты пенсионер');
// }

//  const person = parseInt(prompt('канча бал?'))
//  if (person >=60 && person <=80) {
//     alert('начар')
//  } else if (person >=80 && person <=100 ) {
//     alert ('дагы оку')
//  } else {
//     alert('стипендия аласын')
//  }
 


// const num = parseInt(prompt('сан жаз'))
// if (num % 2 === 0){
//     alert('жуп сан')
// }
// else {
//      alert('так сан')
//  }


// const food = prompt('он жаз')
// switch (food) {
//    case 'жашыл':
//     alert('арбуз');
//     break;
//     case 'кызыл':
//     alert('алма');
//     break;
// }

alert('алертге мезгилдерди чыгарабыз')
const period = parseInt(prompt('1 - 12ге чейин сан жаз'))

switch (period) {
case 1:
    alert('кыш');
break; 
    case 2:
        alert('кыш');
    break;
    case 3:
        alert('жаз');
    break;
    case 4:
        alert('жаз');
    break;
    case 5:
        alert('жаз');
    break;
    case 6:
        alert('жай');
    break;
    case 7:
        alert('жай');
    break;
    case 8:
        alert('жай');
    break;
    case 9:
        alert('куз');
    break;
    case 10:
        alert('куз');
    break;
    case 11:
        alert('куз');
    break;
    case 12:
        alert('кыш');
    break;
    default:
        alert('мындай мезгил жок')
}



alert('алертге айларды чыгарабыз')
const month = parseInt(prompt('1 - 12ге чейин сан жаз'))

switch (month) {
case 1:
    alert('Январь');
break; 
    case 2:
        alert('Февраль');
    break;
    case 3:
        alert('Март');
    break;
    case 4:
        alert('Апрель');
    break;
    case 5:
        alert('Май');
    break;
    case 6:
        alert('Июнь');
    break;
    case 7:
        alert('Июль');
    break;
    case 8:
        alert('Август');
    break;
    case 9:
        alert('Сентябрь');
    break;
    case 10:
        alert('Октябрь');
    break;
    case 11:
        alert('Ноябрь');
    break;
    case 12:
        alert('Декабрь');
    break;
    default:
        alert('мындай ай жок')
}

alert('Калькулятор')
let num1 = prompt ('Введите первое число:');
num1 = Number(num1);

let num2 = prompt('Введите второе число:');
num2 = Number(num2);


let operator = prompt('Введите оператор (/,+,*,-)');


switch (operator) {
    case '+':
        alert (num1 + num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
        alert (num1 / num2);
        break;
    case '*':
        alert (num1 * num2); 
        default:
            alert('Мындай сан жок!')
}