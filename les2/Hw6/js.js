var a = parseInt(prompt('Введите любое число от нуля до пятнадцати для переменной "а": ')); // parseInt - преобразования строки в число
var b = parseInt(prompt('Введите любое число от нуля до пятнадцати для переменной "b": '));
var y = prompt('Введите арифметическую операцию: sum-сумма, sub-разность, multi-умножение, divis-деление');
var c;

function sum(a, b) { return a + b };
function sub(a, b) { return a - b };
function multi(a, b) { return a * b };
function divis(a, b) { return a / b };
function mathOperation(a, b, y) {
    switch (y) {
        case "sum": return sum(a, b);
        case "sub": return sub(a, b);
        case "multi": return multi(a, b);
        case "divis": return divis(a, b);
    };
}
if (y == "sum" || y == "sub" || y == "multi" || y == "divis") {
    switch (y) {
        case "sum": alert("Сумма чисел равна " + mathOperation(a, b, y));
            break;
        case "sub": alert("Разность чисел равна " + mathOperation(a, b, y));
            break;
        case "multi": alert("Произведение чисел равно " + mathOperation(a, b, y));
            break;
        case "divis": alert("Частное двух чисел " + mathOperation(a, b, y));
            break;
    }
}
else {
    alert("Вы ввели неверное значение!");
}