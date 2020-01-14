let nomagicnumbers2 = 2;
let nomagicnumbers5 = 5;
let nomagicnumbers8 = 8;
function convert(...args){
    let enterArr = [...args];
    let finishArr = [];
    for(let i = 0; i < enterArr.length; i++) {
  if(typeof enterArr[i] === 'number'){
       finishArr.push(String(enterArr[i]));
        } else if(typeof enterArr[i] === 'string'){
       finishArr.push(Number(enterArr[i]));
        }
    }
    return finishArr;
}
function executeforEach(args, func){
    let array = [...args];
    for(let i = 0; i < array.length; i++){
        func(array[i]);
    }
}
function mapArray(args, func) {
    let finishArr = [];
    executeforEach(args, (el) => finishArr.push(func(Number(el))));
    return finishArr;
}
function filterArray(args, func) {
    let array = [];
    let finishArr = [];
    executeforEach(args, (el) => array.push(func(el)));
    for(let i = 0; i < array.length; i++){
     if(array[i]) {
       finishArr.push(args[i]);
     }
   } 
    return finishArr;
}
filterArray([nomagicnumbers2, nomagicnumbers5, nomagicnumbers8], (el) => el % nomagicnumbers2 === 0);
function flipOver(string) {
    let finishStr = ' ';
    for(let i = string.length-1; i >= 0; i--) {
        finishStr = finishStr + string[i];
    }
    return finishStr;
}
function makeListFromRange(range) {
    let array = [];
    let from = range[0];
    let to = range[1];
    for (let i = from; i <= to; i++) {
        array.push(i);
    }
    return array;
}
function substitute(array) {
    let lowest = 30;
    return mapArray(array, function(el) {
 el = el < lowest ? '*' : el; return el; 
});
}
function getPastDay(date, day) {
    let msInDay = 864e5;
    return new Date(date - msInDay * day ).getDate();
}
function formatDate(date) {
    let max = 10;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours() < max ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < max ? `0${date.getMinutes()}` : date.getMinutes();
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}
