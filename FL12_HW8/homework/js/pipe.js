function addOne(x) {    
    return x + 1;
}
function pipe(a, ...funcs) {
      for(let i = 0; i < funcs.length; i++){
        a = funcs[i](a);
    }
    return a;
}

pipe(1, addOne, addOne);