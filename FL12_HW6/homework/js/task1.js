  
let a = +prompt('Enter a:');
let b = +prompt('Enter b:');
let c = +prompt('Enter c:');



if (isNaN(a) || isNaN(b) || isNaN(c)) 
    console.log('Invalid input data');
 else {
   let inD = b*b - 4*a*c;
    
    if (inD < 0) {
        console.log("no solution");
    } else if (inD === 0) {
       let  x = - b / (2 * a);
        console.log("x ="+ x);
    } else if (inD > 0) {
    	let D = Math.sqrt(inD);
        let x1 = (- b + D) / (2 * a);
        let x2 = (- b - D) / (2 * a);
        console.log("x1 = " + x1);
        console.log("x2 = " + x2);

    }
}