// HW 3
// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). 
// Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). 
// Посчитать сумму факториалов* чисел которые попадаются во время перебора.
// debugger;


// do {
//     a = parseInt(prompt("Введите значение a").replaceAll(" ", ""));
// } while(isNaN(a) || a < 1);

// do {
//     b = parseInt(prompt(`Введите значение b, которое больше ${a}`).replaceAll(" ", ""));
// } while(a >= b || isNaN(b));

// do {
//     h = parseInt(prompt(`Введите шаг, который меньше ${b - a}`).replaceAll(" ", ""));
// } while(h > b - a || isNaN(h));


// for(sum = 0; a <= b; a += h) {
//     factorial = 1;
//     console.log(`Факториал числа ${a}`);

//     for(i = 1; i <= a; i++) {
//         factorial *= i;
//     }
//     console.log(`Равно ${factorial}`);
//     sum += factorial;
// };
// console.log(`Сумма всех факториалов равна ${sum}`);

// 5! = 1 * 2 * 3 * 4 * 5;
// a = 10;

// a = 2;
// b = 10;

// console.log(a, b);



//Buenos🌺Aires


// debugger;
// city = "buenos aires"; // new york
// upperCity = "";
// for(i = 0; i < city.length; i++) {
//     // console.log(city[i]); // city[0], city[1], city[2].....city[11]
//     // if(i === 0 || city[i - 1] === " ") {
//     //     upperCity += city[i].toUpperCase();
//     // } else {
//     //     upperCity += city[i];
//     // }
//     if(i === 0) {
//         upperCity += city[i].toUpperCase();
//     } else if(city[i] === " ") {
//         upperCity += city[i + 1].toUpperCase();
//     } else {
//         upperCity += city[i];
//     }


//     console.log(upperCity);
// };


// HW 4


// Тернарный оператор
// debugger;


// fruit = prompt("Какой фрукт вы бы хотели съесть?");
// answer = fruit === "apple" 
//     ? "I give you an apple" 
//     : fruit === "melon" 
//     ? "I give you a melon" 
//     : "I give you a banana";

// if(fruit === "apple") {
//     answer = "I give you an apple"
// } else if(fruit === "melon") {
//     answer = "I give you a melon"
// } else {
//     answer = "I give you a banana";
// }

// alert(answer);


// несколько && || (конечный результат)
// пример "Вы что нибудь хотите?" "Вам принести мороженное?" "Вам принести шоколданое?"

// fruit = "" || false || 0;

// console.log(fruit);

// fruit = "" && false && 0;

// console.log(fruit);

// fruit = "melon";

// if(fruit === "melon") alert("Hello melon!");
// alert("Hello something");
debugger;
x = 2 + 2;

switch (x) {
    case 4:
        console.log('Меньше 10');
        break;
    case 5:
        console.log('Меньше 5');
        break;
}