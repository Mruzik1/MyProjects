var c = prompt('Напишите любое предложение', 'Beans is good!');
var yourChar = prompt('Укажите символ, который хотите найти в предложении\n' + c + '\nРегистр учитовать!');
var value;
var count = 0;
var arr = [];
for (var i = 0; i < c.length; i++) {
    arr[i] = c.charAt(i);
    value = c.charAt(i);
    if (value == yourChar) {
        count++;
    }
}
alert('В данной строке ' + count + ' символ(а)/(ов).')