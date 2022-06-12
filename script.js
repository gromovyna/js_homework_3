do {
    a = parseInt (prompt(`Введите цифру а`).replaceAll(" ",""));
} while(isNaN(a) || a < 1);

do {
    b = parseInt (prompt(`Введите цифру b, которая больше ${a}`).replaceAll(" ",""));
} while(a >= b || isNaN(b));

do {
    h = parseInt (prompt (`Введите шаг, который меньше ${b -a}`).replaceAll(" ",""));
}while  (h > b - a || isNaN(h));

for(sum = 0; a <= b; a += h) {
    factorial = 1;

    for(i = 1; i <= a; i++) {
        factorial *= i;
    }
    sum += factorial;
};
console.log(`Сумма всех факториалов равна ${sum}`);
