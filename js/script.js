"use strict";

// 1. C помощью prompt спросить как зовут пользователя.
// Вывести имя пользователя с помощью alert.

let userName = prompt("What is your name?");
alert(userName);
// 2. Создать 2 переменные.
// Провести между ними следующие математические операции: сложение, вычитание, умножение, деление и возведение в степень.
// Результат выполнения каждой операции вывести в alert

let a = 2;
let b = 19;

let sum = a + b;
alert(sum);

let subtr = b - a;
alert(subtr);

let multiplication = a * b;
alert(multiplication);

let division = b / a;
alert(division);

let power = b ** a;
alert(power);

let reminder = b % a;
alert(reminder);

console.log(`New feature`)