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


function TestFamily(family,age) {
    this.family = family;
    this.age = age;
}

let users = new TestFamily("Frolov", 30); 

alert(users.family);
alert(users.age);
*/

// function SmallUser() {
//     this.name = "Jack";
//     return;

// }

// alert(new SmallUser().name );


// function Calculator() {

//     this.read = function() {
//         this.a = +prompt('a', "введите число");
//         this.b = +prompt('b', "введите число");
//     }
//     this.sum = function() {
//         return this.a + this.b;
//     }
//     this.mull = function() {
//         return this.a * this.b;
//     };
// }   

// let calculator = new Calculator();
// calculator.read();

// alert("Сумма = " + calculator.sum());
// alert("Умножение = " + calculator.mull());

// function Accumulator(startingValue){
//     this.value = startingValue;
//     this.read = function() {
//         this.value += +prompt('add', 0);
//     };
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read?.();
// alert(accumulator.value);
/*
let id = Symbol("id");
alert(id.description);

let numberTest = 1000000000;
let numberTestName = 1e6;
alert(numberTestName);

let ms = 1e-6;
alert(ms);
alert(0xff);

let num = 255;
alert(num.toString(8));

let bestNumber = 3.1523;
alert(Math.floor(bestNumber));

let fixNumber = 3.7;
alert(fixNumber.toFixed(2));

alert( isNaN(fixNumber));
*/

// let randomNumber = 4.3;

// alert(Math.random());
// alert(Math.max(3, 4, 123, 33, 42, 12));
// alert(Math.min(3, 4, 123, 33, 42, 12));
// alert(Math.pow(2, 10));

// let numberOne = prompt("Введите число 1");
// let numberTwo = prompt("Введите число 2");
// alert(numberOne + numberTwo);

// let numOne = 6.35;
// alert(1.35.toFixed(1));
// alert(Math.floor(numOne));


/*function readNumber() {
    let num = parseInt(prompt("Введите число 1"));

    if( num === null || num === undefined ) {
        return null;
    }

    return +num;
}

alert(readNumber());
*/


/*unction randomNumber(numberMin, numberMax) {
   return numberMin + Math.random() * (numberMax - numberMin);
}

alert(randomNumber(1, 5));
*/

// function randomFullNumber(numberMin, numberMax) {
//     return numberMin + Math.random() * (numberMax - numberMin);
// }

// alert(Math.round(randomFullNumber(1,5)));



let atrr = new Array();
let arr = [];

let fruits = ["Orange" , "Apple", "Lime"];

// alert( fruits.length);
fruits[2] = "Mango";
// fruits[3] = "Ananas";
// alert( fruits[0]);
// alert( fruits[1]);
// alert( fruits[2]);
// alert( fruits[3]);

// alert( fruits);

// let test = [ 'Apple', { name: 'Alex'}, true, function() { alert('123');}]

// alert( test[1].name)
// test[3]();

let testFruits = [ "Яблоко", "Апельсин", "Слива"];


// delete testFruits[2];
// alert( testFruits[2])

// alert(testFruits.length);

// testFruits.splice(2,2);
// alert(testFruits);

//alert(testFruits)

//alert(testFruits[testFruits.length - 1]);
//alert(testFruits.at(-2));

// alert(testFruits.pop());
// alert(testFruits);

// testFruits.push("Банан");
// alert(testFruits);

// alert( testFruits.shift());
// alert( testFruits);
// testFruits.unshift('Клубника','Груша');
// alert(testFruits);

// for (let i = 0; i < testFruits.length; i++) {
//     alert(testFruits[i]);
// }
// for (let listFruits of testFruits) {
//     alert(listFruits);
// }

// for (let nameFruits in testFruits) {
//     alert(testFruits[nameFruits]);
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 8, 6],
//     [7, 8, 9]
//   ];
  
//   alert( matrix[1][1] );

//[ "Яблоко", "Апельсин", "Слива"].forEach(alert);

let arg = [1, 2, 3];

// alert( arg.indexOf(3));
// alert( arg.indexOf(false) );
// alert( arg.indexOf(null));

// arg.sort();
// alert(arg);

// arg.reverse();
// alert(arg);
// alert( arg.includes(1));

// let names = 'Ivan, Maks, Masha';

// for (let list of names){
//     alert(list);
// }

// let str = ["background-color", "list-style-image", "-webkit-transition"] 

// function camelize(str) {
//     return str
//     .split('-')
//     .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join('');
// }


// alert(camelize)


// let arb = [5, 2, 1, -10, 8];

// arb.sort((a, b) => b - a)
// alert(arb);

// let map = new Map();

// map.set("1", "str1");
// map.set(1, "num2");
// map.set(true, 'bool1');

// alert(map.get(1));
// alert(map.get("1"));
// alert(map.size);


// let john = { name: "John" };
// let ben = { name: "Ben" };

// // let visitsCountMap = new Map();


// let visitsCountObj = {}
// visitsCountObj[ben] = 234;
// visitsCountObj[john] = 123;

// alert(visitsCountObj["[object Object]"]);



// visitsCountMap.set(john, 123);
// alert(visitsCountMap.get(john));



// let hmap = new Map();
// hmap.set("1", "str1").set(1, "num1").set(true, 'bool1');

// for ( let testOne of hmap.keys() ) {
//     alert(testOne);
// }

// for ( let testTwo of hmap.values() ) {
//     alert(testTwo);
// }

// for ( let testFree of hmap){
//     alert(testFree);
// }

// hmap.forEach((value, key, map) => {
//     alert('${key}: ${value}');
// })

// let mapNew = new Map([
//     ['1', 'str1'],
//     [1,'num1'],
//     [true, 'bool1']

// ]);

// alert(mapNew.get('1'));

// let obj = {
//     name: "John",
//     age: 30
// };

// let nMap = new Map(Object.entries(obj));
// alert(nMap.get('age'));

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ])

// alert(prices.orange);

// let map = new Map();

// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries());

// alert(map.get('banana'));

// let set = new Set();


// let set = new Set(["apple" , "orange" , "banana"]);

// for ( let value of set)

// set.forEach((value, valueAgaing, set) => {
//         alert(value);
//     })

// function unique(arr){
//     return Array.from(new Set(arr));
// }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

  
//   alert( unique(values) ); // Hare,Krishna,:-O
 
// function aclean(test){
//     let map = new Map();

//     for ( let word of test){
//         let sorted = word.toLowerCase().split(" ").sort().join();
//         map.set(sorted, word);
//     }

//     return Array.from(map.values()); //
// }

// let test = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(test) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// let john = { name : "John"}

// john = null;

// alert(john)
// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(pete);
// set.add(mary);

// alert(set.size);

// for ( let userName of set) {
//     alert(userName.name);
// }


// let john = { name: "John"};
// let array = [john];
// john = null;

// let join = { name: "John" };

// let map = new Map();
// map.set(join, "...");

// join = null;

// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obh, "ok");

// weakMap.set("test", "Whoops");


// let join = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(join, "...");
// join = null;

// let visitsCountMap = new Map();
// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let cache = new Map();

// function process(obj) {
//     if (!cache.has(obj)) {
//         let result = obj;

//         cache.set(obj, result);
//     }
//     return cache.get(obj);
// }

// let obj = {};

// let result1 = process(obj);

// let result2 = process(obj);

// obj = null;

// alert(cache.size);


// let cache = new WeakMap();

// function process(obj) {
//     if (!cache.has(obj)) {
//         let result = obj;

//         cache.set(obj, result)
//     }

//     return cache.get(obj);
// }

// let obj = {}

// let result1 = process(obj);
// let result2 = process(obj);

// obj = null;

// let visitedSet = new WeakSet();

// let john = { name: "John"};
// let pete = { name: "Pete"};
// let mary = { name: "Mary"};

// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(john);


// alert(visitedSet.has(john));

// alert(visitedSet.has(mary));

// john = null

// let mesagges = [
//     {text: " Hello", from: "John"},
//     {text: "Hov hoes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ]

// let readMessages = new WeakSet();

// readMessages.add(mesagges[0]);
// readMessages.add(mesagges[1]);

// readMessages.add(mesagges[0]);

// alert("Read message 0: " + readMessages.has(mesagges[0]));

// mesagges.shift();

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "Hello", from: "John"},
//     {text: "Hov hoes?", from: "Alice"}
// ]

// let readMap = new WeakMap();

// readMap.set(messages[0], new Date(2017, 1, 1));


// let hmap = new Map();
// hmap.set("1", "str1").set(1, "num1").set(true, 'bool1');

// for ( let testOne of hmap.keys() ) {
//     alert(testOne);
// }

// for ( let testTwo of hmap.values() ) {
//     alert(testTwo);
// }

// for ( let testFree of hmap){
//     alert(testFree);
// }

// hmap.forEach((value, key, map) => {
//     alert('${key}: ${value}');
// })

// let nmap = new Map();

// nmap.set(true, 'str1')

// for ( let name of nmap){
//     alert(name)
// }

// let salaries = {
//     "John": 100,
//     "Peter": 300,
//     "Mary": 250
// };

// function sumSalaries(salaries) {

// }

// alert( sumSalaries(salaries))

// let user = {
//     name: 'John',
//     age : 30
// };

// function count(obj1){
//     return Object.keys(obj1).length;
// }

// alert(count(user));

let array = ["Ivan", "Kantor"];

//let [firstName, surname] = array;

//  
// alert(surname);

// let [firstName, , ,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( title ); 

// let user = {
//     name : "John",
//     age: 30
// };

// for (let [key,value] of Object.entries(user)){
//     alert(`${key}:${value}`);
// }

// let user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// for ( let [key, value] of user){
//     alert(`${key}: ${value}`);
// }

// let guest = "Jave";
// let admin = "Pete";

// [quest, admin] = [admin, guest];

// alert(`${quest} ${admin}`);

// let array2 = ["test1", "test2", "test3", "test4", "test5"];

// [test1, test2, test3, test4, test5] = array2;

// alert(array2)

// let user = { name: "John", years: 30 };

// // [name, age, isAdmin] = user
// let {name, years: age, isAdmin = false} = user;


// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   function topSalary(salary) {
//     let max = 0;
//     let maxName = null;
//     for ( const [name, salary] of Object.entries(salaries)){
//         if ( max < salary){
//             max = salary;
//             maxName = name;
//         }
//     }
//     return alert(maxName);
//   }

//   topSalary()