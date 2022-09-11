// let userName = prompt('Кто там?', '')

// const { multiply } = require("lodash");

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

// function exponentiateNumber(){
//     let number = 10**10;
//     alert(number);
// }

// let messageShow = (numSum, numSer) =>{
//     return alert(numSum - numSer);
// }

// messageShow(100,50);

// exponentiateNumber();

/*let testFun = prompt('Введите логин','')
if(testFun === 'Admin'){
    let passWordText = prompt('Введите пароль', '')
    if(passWordText === '123456'){
        alert('Вы успешно вошли')
    } else{
        alert('Пароль неверный')
    }
} else{
    alert('Неверный логин или пароль')
}
*/
/*function merHwl(numberOne, numberTwo){
    return numberOne**numberTwo
}

merHwl(3,4);
*/

// let newsGo = new Object();
// let newsApi = {
//     name: "Alex",
//     age: "28"
// };

// alert(newsApi.name)


// function nameFamily(name,age){
//     return{
//         name: name,
//         age: age
//     }
// }

// let userXml = nameFamily("XML", 35)
// // alert(userXml.age);

// let users = {
//     family: "Frolov",
//     yarh: "2",
//     weight: "75",
//     growth: "178"
// }

// for (let keys in users){
//     alert(users[keys])
// }

// for (let keygen in users){
//     alert(keygen)
// }


// let user = new Object()
// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete user[name]


// const userTest = {
//     name: "Alex"
// };

// userTest.name = "Ivan";

// alert(userTest.name)

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for (let keys in salaries){
//     sum += salaries[keys]
// }

// alert(sum)


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// multiplyNumeric(menu);

// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

// function multiplyNumeric(obj){
//     for (let keys in obj){
//         if(typeof obj[keys] == 'number'){
//             obj[keys] *= 2;
//         }
//     }
// };

/*let calculator = {
    sum(){
        return this.a + this.b
    },

    mul(){
        return this.a * this.b
    },

    read(){
        this.a = +prompt('a', 0);
        this.b = +prompt('b', 0);
    }
};


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);
*/

function TestFamily(family,age) {
    this.family = family;
    this.age = age;
}

let users = new TestFamily("Frolov", 30); 

alert(users.family);
alert(users.age);