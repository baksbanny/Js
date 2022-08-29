// let userName = prompt('Кто там?', '')

// if(userName === 'Админ')
// {
//     let password = prompt('Пароль?', '')

//     if(password === 'Я главный'){
//         alert('Здравствуйте!')
//     } else if(password === '' || password === null){
//         alert('Отменено')
//     } else{
//         alert('Неверный пароль')
//     }
// } else if(userName === '' || userName === null){
//     alert('Отменено');
// } else{
//     alert('Я вас не знаю')
// }
// let a = prompt('Введите число');
// switch(a){
//     case '0':
//     alert('test')
//     break;
//     case '10':
//     alert('test2')
//     break;
//     default:
//         alert('5555')
//         break;
// }

// let browser;

// if(browser == 'Edge'){
//     alert("You've got the Edge!");
// } else if(browser || 'Chrome' || 'Firefox' || 'Safari' || 'Opera'){
//     alert('Okay we support these browsers too')
// } else{
//     alert('we hope that this page looks ok!')
// }

// const number = +prompt('Введите число 0 и 3', '');
// switch(number){
//     case 0:
//         alert('Вы ввели число 0')
//         break;
//     case 1:
//         alert('Вы ввели число 1')
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
// }

// function showTest(){
//     alert('Привет')
// }
// showTest()

// function showMessage(text,textName){
//     alert(text + ' ' + textName);
// }

// showMessage('test', 'Привет');

// let sum = (a, b) => a - b;

// alert(sum(10,5));

// let name = c => c * c;
// alert(name(4));

// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no();
// }

// ask(
//     'Вы согласны',
//     () => alert('вы согласились'),
//     () => alert('Вы не согласны')
// )

function exponentiateNumber(){
    let number = 10**10;
    alert(number);
}

let messageShow = (numSum, numSer) =>{
    return alert(numSum - numSer);
}

messageShow(100,50);

exponentiateNumber();

