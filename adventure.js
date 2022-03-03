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
        console.log(`My current health is ${this.health}!`);
    }

    battle() {
        console.log('I\'m ready to rumble');
    }
}

const DougieDonut = new Hero("Dougie the Donut");