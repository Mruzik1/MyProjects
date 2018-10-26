var arr = [59, 12, [12, 43, [31, 58, [-24, -25]]]];
res = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j].length > 1) {
                for (var k = 0; k < arr[i][j].length; k++) {
                    if (arr[i][j][k].length > 1) {
                        for (var r = 0; r < arr[i][j][k].length; r++) {
                            res += arr[i][j][k][r];
                        }
                    }
                    else {res += arr[i][j][k];}
                }
            }
            else {res += arr[i][j];}
        }
    }
    else {res += arr[i];}
}
console.log(res);