let a = +prompt('Enter a:');
let b = +prompt('Enter b:');
let c = +prompt('Enter c:');
if (isNaN(a) || isNaN(b) || isNaN(c)) {
 alert('input values should be ONLY numbers'); 
} else if (a <= 0 || b <= 0 || c <= 0) {
 alert('A triangle must have 3 sides with a positive definite length'); 
} else if(a + b > c && c + b > a && a + c > b) {
    if (a === b && a === c && b === c) {
 console.log('equilateral triangle'); 
} else if (a !== b && a !== c && b !== c) {
 console.log('scalene triangle'); 
} else {
 console.log('isosceles triangle'); 
}
  } else if (a + b < c || c + b < a || a + c < b) {
 console.log('Triangle doesn’t exist'); 
}
