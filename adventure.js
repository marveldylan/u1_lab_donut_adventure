class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.objects = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories'];
    }

    talkSass() {
        let tossUp = Math.random();

        if(tossUp > 0.5) {
           console.log(this.catchPhrases[0]);
        } else {
            console.log(this.catchPhrases[1]);
        }

    }

    announceHealth() {
        console.log(`${this.name}: My current health is ${this.health}!`);
    }

    battle() {
        console.log('I\'m ready to rumble');
    }
}

let DougieDonut = new Hero("Dougie the Donut");


class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.objects = {
            pepperoniStars: 5,
            cheeseGrease: 10    
        };
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer'];
    }

    talkSmack() {
        let tossUp = Math.random();

        if(tossUp > 0.5) {
           console.log(this.catchPhrases[0]);
        } else {
            console.log(this.catchPhrases[1]);
        }

    }

    announceHealth() {
        console.log(`${this.name}: My current health is ${this.health}!`);
    }

    battle() {
        console.log('I\'m gonna flatten you like a slice of pepperoni!');
    }
}

let PizzaRat = new Enemy ('Pizza Rat');