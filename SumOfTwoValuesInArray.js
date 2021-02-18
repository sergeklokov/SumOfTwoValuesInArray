// sumOFTw0Values.js
//
// Given an array of integers and a value,
// determine if there are any two integers in the array
// whose sum is equal to the given value.
// Return true it the sum exists and
// return false it it does not.
//
// https://www.educative.io/m/sum-of-two-values
//
// c++ syntax
// bool Find_sum_oF_two(vector<int>& A, int val) {

let findSumOfTwoLoop = function (A, val) {
    for (let i = 0; i < A.length; i++) {
        const ei = A[i];

        for (let j = i + 1; j < A.length; j++) {
            const ej = A[j];
            if (ei+ej == val){
                //console.log(ei + ' + ' + ej + ' = ' + val);
                return {
                    result: true,
                    a: ei,
                    b: ej
                };
            }
        }
    }

    return {
        result: false,
        a: undefined,
        b: undefined
    };

}

let findSumOfTwoSet = function(A, val) {
    let setA = new Set();

    for(let i in A){
        const e = A[i];

        if (setA.has(val - e)) {
            //console.log((val - e) + ' + ' + e + ' = ' );
            return {
                result: true,
                a: val - e,
                b: e
            }
        }
        else {
            setA.add(e);
        }
    };

    return {
        result: false,
        a: undefined,
        b: undefined
    };

}

let v = [18, 18, 5, 7, 1, 2, 8, 4, 3];
let test = [3, 20, 1, 2, 7];

for (i = 0; i < test.length; i++) {
    let output = findSumOfTwoLoop(v, test[i]);

    if (output.result)
        console.log("findSumOfTwoLoop(v, " + test[i] + ") =  (" + output.a + "," + output.b + ")");
}

console.log("============== let's try other method =========" );

for (i = 0; i < test.length; i++) {
    let output = findSumOfTwoSet(v, test[i]);

    if (output.result)
        console.log("findSumOfTwoLoop(v, " + test[i] + ") =  (" + output.a + "," + output.b + ")");
}



