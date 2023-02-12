// 1
const zp_cleaner = 40000;
const zp_teacher = 22000;
console.log (zp_cleaner + zp_teacher);

// 2
let city = "Владивосток ";
let number = "2000";
console.log(city + number);

// 3
let a =128;
let b =254;
let c =137;
let d =201;
console.log (a+b+c+d);

// 4
let x=2;
let y=5;
console.log (2**5);

// 5
console.log ("Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!")

// 6
const greetings = "Привет";
const name = "Кот";
console.log (greetings +","+ name );

// 7
let time;
time=34;
console.log ('Старт поездки. Осталось минут: ' + time);
time -=15;
console.log ('Немного сторис в соцсетях. Осталось минут: ' + time);
time -=10;
console.log ('Немного не новостей, но событий. Осталось минут: ' + time);
time =0;
console.log ('Вы приехали. Добро пожаловать в Москву');

// 8
let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;
console.log (fahrenheit + ' градуса по Фаренгейту — это' + celsius + ' градуса по Цельсию.');

// *
let deposit = 30000;
console.log ( 'Ваш депозит на начало расчётного периода составлял ' + deposit + ' руб.');
let bid = 18.5;
console.log ('Согласно вашему тарифу, вам была присвоена ставка ' + 18.5 +'%');
let growth = 150;
console.log ('К концу расчётного периода прирост составил '+ growth + 'руб., и на данный момент ваш депозит составляет  ' + (deposit + growth) + ' руб.');

//** 
let sum = prompt('Введите сумму пожалуйста');
let percent = 7;
console.log ('Через год у вас будет ' + ( Number(sum) + Number(sum * percent/100) ) + ' руб. на счету');



