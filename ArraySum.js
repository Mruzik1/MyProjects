var arr = [59, 12, [12, 43, [31, 58, [-24, -25]]]];
res1 = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j].length > 1) {
                for (var k = 0; k < arr[i][j].length; k++) {
                    if (arr[i][j][k].length > 1) {
                        for (var r = 0; r < arr[i][j][k].length; r++) {
                            res1 += arr[i][j][k][r];
                        }
                    }
                    else res1 += arr[i][j][k];
                }
            }
            else res1 += arr[i][j];
        }
    }
    else res1 += arr[i];
}
console.log(res1);

// Методы

var arr = [59, 12, [12, 43, [31, 58, [-24, -25]]]];
res = 0;

arr.forEach(function (it1) {
    if (it1 instanceof Array) {
        it1.forEach(function (it2) {
            if (it2 instanceof Array){
                it2.forEach(function (it3) {
                    if (it3 instanceof Array) {
                        it3.forEach(function (it4) {
                            res += it4;
                        });
                    }
                    else res += it3;
                });
            }
            else res += it2;
        });
    }
    else res += it1;
});

console.log(res);