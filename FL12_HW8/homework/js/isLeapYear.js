function isLeapYear(date){
    let year = new Date(date).getFullYear();

    if((year % 400 === 0) || (year % 4 === 0)){
        return `${year} is a leap year`;
    }else if((year % 100 === 0) || (new Date(date).getTime())){
        return `${year} is not a leap year`;
    }
    return new Date(date);
}

isLeapYear('2020-01-01 00:00:00');