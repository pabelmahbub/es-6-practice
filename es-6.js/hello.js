console.log('HEllo');
const classic = 'One';

console.log(classic);


//backup
function add (num1, num2= 78){
    return num1 + num2;

}
let total = add(13,7);

// If second value is not provided

let newTotal = add(13);
console.log(total);
console.log(newTotal);