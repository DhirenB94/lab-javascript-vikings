// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength= strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(amountOfDamage) {
        this.health -= amountOfDamage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    } 
    receiveDamage(amountOfDamage) {
        super.receiveDamage(amountOfDamage); //can also super here as it this part is the same!!
        if (this.health >0) {
            return `${this.name} has received ${amountOfDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(amountOfDamage) {
        super.receiveDamage(amountOfDamage);
        if (this.health >0) {
            return `A Saxon has received ${amountOfDamage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
        }
    }



// War
class War {
    constructor() {
     this.vikingArmy = [];
     this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        //random viking
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length); //gets a random number - eg 7
        const randomViking = this.vikingArmy[randomVikingIndex]; //uses this number as an index position and gets the viking in that postition
                                                                // eg this.vikingArmy[7] - the 7th viking
        //same as writing - const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
                                        
        //random saxon
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

       const damage = randomSaxon.receiveDamage(randomViking.attack());

       if (randomSaxon.health <= 0) {
           this.saxonArmy.splice(randomSaxonIndex, 1);
                                //saxons index position     //number of elements removed
       }

       return damage;
    }
    saxonAttack() {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

       const damage = randomViking.receiveDamage(randomSaxon.attack());

       if (randomViking.health <= 0) {
           this.vikingArmy.splice(randomVikingIndex, 1);
       }

       return damage;
    }
    


    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length <=0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }

    }

}









//SUPER BONUS
/* dont use specific arrays 

optimisedAttack(attacker, defender) {
    const randomAttackerIndex = Math.floor(Math.random() * attacker.length);
    const randomAttacker = attacker[randomAttackerIndex];

    const randomDefenderIndex = Math.floor(Math.random() * defender.length);
    const randomDefender = defender[randomDefenderIndex];

   const damage = randomDefender.receiveDamage(randomAttacker.attack());

   if (randomDefender.health <= 0) {
      defender.splice(randomDefenderIndex, 1);
   }
   return damage;
}

const bigWar = new War();

//1st you need to poulate the bigWar as War has no arguements. Populate with however many addViking/addSaxons you want

bigWar.optimisedAttack(this.vikingArmy, this.saxonArmy) = viking attack
                        //attacker      //defender
                        and vice-versa

*/