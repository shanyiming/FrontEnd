const convert = (s, numRows) => {
    if (numRows < 2) {
      return s;
    }
    const matrix = [];
    for (let i = 0; i < numRows; i++) {
        matrix.push([]);
    }
    let k = 0;
    let i = 0;
    let res = '';
    while (k < s.length) {
        while(i < matrix.length && k < s.length) {
            matrix[i].push(s[k]);
            i++;
            k++;
        }
        i = i-2;
        while (i >= 0 && k < s.length) {
            matrix[i].push(s[k])
            i--;
            k++;
        }
        i = i+2;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            res += matrix[i][k];
        }
    }
    return console.log(res);
};

let s = "PAYPALISHIRING";
convert(s,5);