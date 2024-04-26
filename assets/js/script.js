// let x = [1, 5, 6, 8, 9, 1, 3, 4];

// let y = [6, 7, 9, 6, 2, 3, 4, 8];

// let sum1 = 0;
// let sum2 = 0;
// let mijin1 = 0;
// let mijin2 = 0;

// for (let i = 0; i < x.length; i++) {
//   sum1 += x[i];
// }

// mijin1 = sum1 / x.length;

// for (let i = 0; i < y.length; ) {
//   sum2 += y[i];
// }

// mijin2 = sum2 / y.length;

// console.log(mijin1 * mijin2);

// 2

// let x =[2,1,-8,5,-9,4];

// let y =[4,5,-7,4,-8,3];

// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i< x.length; i++){
//     if(x[i]>0){
//         sum1++
//     }  
// }
// for (let i = 0; i< y.length; i++){
//     if(y[i]>0){
//         sum2++
//     }
// }
// console.log(sum1+sum2)


// 3


let x = [8,-8,7,5,66,-88,-5];

let y = [-7,55,99,-99,7,3,-6];

let sum1 = 0;
let sum2 = 0;

for(let i = 0; i< x.length; i++){
    if(x[i]<0){
        sum1++
    }
}
for(let i = 0; i<y.length; i++){
    if(x[i]<0){
        sum2++
    }
}
console.log(sum1+sum2);
