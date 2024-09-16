const fs = require('fs');

function decodeValue(value, base) {
    return parseInt(value, base); 
}

function lagrangeInterpolation(points) {
    let result = 0;
    let k = points.length;

    for (let i = 0; i < k; i++) {
        let term = points[i].y;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                term *= (0 - points[j].x) / (points[i].x - points[j].x);
            }
        }
        result += term;
    }
    return result;
}

function solveSecretFromJson(data) {
    let points = [];
    for (let key in data) {
        if (key !== "keys") {
            let x = parseInt(key); 
            let base = parseInt(data[key].base);
            let y_value = data[key].value;
            let y = decodeValue(y_value, base);
            points.push({ x: x, y: y });
        }
    }
    
    let c = lagrangeInterpolation(points);
    c=(Math.round(c));  

    return c;
}

// Allow the user to specify the file name via command-line arguments
const fileName = process.argv[2] || 'testcase.json';

fs.readFile(fileName, 'utf8', (err, jsonData) => {
    if (err) {
        console.error(err);
        return;
    }

    let data = JSON.parse(jsonData);
    let constantC = solveSecretFromJson(data);
    console.log("The constant term `c` is:", constantC);
});
