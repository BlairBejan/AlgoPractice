class Knight{
    constructor(health, stamina){
        this.health = health;
        this.stamina = stamina;
    }
    takeDamage(dmg){
      this.health = this.health - dmg;
      return this;
    }
}
let blairKnight = new Knight(100, 200);
console.log(blairKnight.takeDamage(3));
