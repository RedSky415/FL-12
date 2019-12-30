let doYouWant = window.confirm('Do you want to play a game?')
if (!doYouWant) {
 alert("'You did not become a billionaire, but can.") 
} else {
    let again = true;
    while (again) {
        //let numberRange = 9;
        let rangeTo=8;
        let Prize = 0;
        let PrizeNow = 0;
        let range = Math.floor(Math.random(0,rangeTo));
        let ma = 100;
        let attemptsNext = 3;
        let attempts = 3;
        let two = 2;
        while (attempts > 0) {
            let chosen = +prompt('Please choose a roulette pocket number from 0 to 8' + 
                '\nAttempts left: ' + attempts +
                '\nTotal Prize: ' + PrizeNow + '$' +
                '\nPossible prize on current attempt: ' + Prize + '$');
             if (range === chosen) {
                PrizeNow = Prize;
                Prize = Prize + PrizeNow;
                let continueQ = window.confirm('Congratulation, you won!\nYour prize is: ' + PrizeNow + 
                    '$\nDo you want to continue?');
                if (continueQ) {
                    attempts = attemptsNext;
                    ma = ma * two;
                    range = Math.floor(Math.random(0,rangeTo) );
                } else {
                    attempts = 0;
                } 
            } else {
                ma = ma / two;
                attempts= attempts-1;
            }     
        }
        alert('Thank you for your participation. Your prize is: ' + Prize + '$.');
        again = confirm('Do you want to play again?');        
    }
}