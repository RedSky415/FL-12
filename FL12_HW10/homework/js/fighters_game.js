class Fighter {
    constructor(fighter) {
        this.name = fighter.name;
        this.damage = fighter.damage;
        this.hp = fighter.hp;
        this.max = fighter.hp;
        this.strength = fighter.strength;
        this.agility = fighter.agility;
        this.MatchWon = 0;
        this.MatchLost = 0;
    }

    get getName() {
        return this.name
    }

    get getDamage() {
        return this.damage
    }

    get getHealth() {
        return this.hp
    }

    get getMaxHealth() {
        return this.maxHp
    }

    get getStrength() {
        return this.strength
    }

    get getAgility() {
        return this.agility
    }

    get getWins() {
        return this.MatchWon
    }

    get getLosses() {
        return this.MatchLost
    }

  logCombatHistory() {
        console.log(`Name: ${this.name}, Wins : ${this.MatchWon}, Losses : ${this.MatchLost}`)
    }

    attack(defender) {
        let maxAttack = 100;
        let probabilityAF = defender.getStrength + defender.getAgility;
        const result = Math.ceil(Math.random() * Math.floor(maxAttack)) <= probabilityAF;
        if (result) {
            defender.dealDamage(this.getDamage);
            console.log(`${this.name} makes ${this.damage} damage to ${defender.name}`);
        } else {
            console.log(`${this.name} attack missed`);
        }
    }

    dealDamage(damage) {
        this.hp -= damage;
        this.hp <= 0 ? this.MatchWon++ : null;
    }

    heal(healPoint) {
        const condition = healPoint + this.getHealth < this.getMaxHealth;
        condition ? this.hp += healPoint : this.hp = this.max;
        console.log(`Heal TRUE : HP = ${this.hp}`)
    }

    addWin() {
        return this.getMatchWon++;
    }

    addLoss() {
        return this.getMatchLost++;
    }
}


let firsFighter = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});
let secondFighters = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90});
battle(firsFighter, secondFighters)



    let firstFighter = new Fighter(firstFighter);
    let secondFighter = new Fighter(secondFighter);

    if (firstFighter.getHealth() === 0) {
        console.log(`${firstFighter.getName()} is dead and can't fight.`);
        
    }
    if (secondFighter.getHealth() === 0) {
        console.log(`${secondFighter.getName()} is dead and can't fight.`);
        
    }

    while (firstFighter.getHealth() > 0 || secondFighter.getHealth() > 0) {
        firstFighter.attack(secondFighter);
        secondFighter.attack(firstFighter);
    }
    let victoriousFighter =
        firstFighter.getHealth() === 0 ? firstFighter : secondFighter;
    let looserFighter =
        firstFighter.getHealth() === 0 ? secondFighter : firstFighter;
    console.log(` ${victoriousFighter.getName()} has won`);
    victoriousFighter.addWin();
    looserFighter.addLoss();

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth && secondFighter.getHealth) {
        firstFighter.attack(secondFighter);
        if (secondFighter.getHealth) {
            secondFighter.attack(firstFighter);
            if (firstFighter.getHealth) {
                battle(firstFighter, secondFighter)
            } else {
                secondFighter.addWin;
                firstFighter.addLoss;
                console.log(`${secondFighter.getName} has won`)
            }
        } else {
            console.log(`${firstFighter.getName} has won `)
        }
    } 
}

 battle(firsFighter, secondFighters)
 console.log(firsFighter.attack(secondFighters));
 console.log(secondFighters.getHealth);