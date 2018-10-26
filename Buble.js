var array = [12, 53, -23, 3.1415, -0.5, 354];
var arrCount = array.length - 1;
var reverse;
for (var i = 0; i < arrCount; i++) {
    for (var j = 0; j < arrCount - i; j++) {
        if (array[j] > array[j+1]) {
            reverse = array[j];
            array[j] = array[j+1];
            array[j+1] = reverse;
        }
    }
}

console.log(array);