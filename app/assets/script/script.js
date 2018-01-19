var name;
var health;
var playerDamage;
var damageAmount;

class Player {

	constructor (name, health){
        _name = name;
        this.health = health;
        this.health = 100;
		this.name = "Steve";
	}

	playerDamage = (damageAmount){
    health -= damageAmount;
    return health;
	};;;;
}
