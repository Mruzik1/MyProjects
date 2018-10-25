var value;
var count = 0;
var arr = [];
function countCh(st, chr) {
    for (var i = 0; i < st.length; i++) {
        arr[i] = st.charAt(i);
        value = st.charAt(i);
        if (value == chr) {
            count++;
        }
    }
}

countCh(prompt('Напишите любое предложение', 'Beans is good!'), prompt('Введите символ:', 'B'));
alert('В данной строке ' + count + ' символ(а)/(ов).')