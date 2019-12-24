  
let a = +prompt('Enter a:');
let b = +prompt('Enter b:');
let c = +prompt('Enter c:');
let koef = 4;
let koef2 = 2;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
console.log('Invalid input data'); 
} else {
let inD = b*b - koef*a*c;
if (inD < 0) {
console.log('no solution');
} else if (inD === 0) {
let x = - b / (koef2 * a);
console.log('x ='+ x);
} else if (inD > 0) {
let D = Math.sqrt(inD);
let x1 = (- b + D) / (koef2 * a);
let x2 = (- b - D) / (koef2* a);
console.log('x1 = ' + x1);
console.log('x2 = ' + x2);
}
}