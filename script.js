// 1. Оголосіть змінну і присвойте в неї число. Перевірте, чи ця змінна має тип "number" і виведіть результат в консоль.

let num = 50;

console.log(num);
console.log(typeof(num));

/* 2. Оголосіть змінну name і присвойте їй ваше ім'я. Оголосіть змінну lastName і присвойте в неї Ваше прізвище.
Виведіть повідомлення у консоль у форматі `Мене звати {ім'я}, {прізвище}` використовуючи ці змінні.*/

let name = "Yana";
let lastName = "Hurarii";

console.log(`Мене звати ${name} ${lastName}`);



// 3. Оголосіть змінну з числовим значенням і виведіть в консоль її значення всередині рядка.

let amount = 20 + 9;

const birthday = '2'+'9' 

console.log(
  `Коли мені виповнилося ${birthday} років, то знайомий подарував ${amount} троянд`
);

amount = 30;

console.log("Зараз мені вже більше" + " " + amount + " " + "років");
