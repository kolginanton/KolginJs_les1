var a = parseInt(prompt('Введите любое число для переменной "а": ')); // parseInt - преобразования строки в число
var b = parseInt(prompt('Введите любое число для переменной "b": '));
var c; // результат действия с переменными

if (a >= 0 && b >= 0) { alert(c = a - b); }
else if (a < 0 && b < 0) { alert(c = a * b); }
else { alert(c = a + b); }