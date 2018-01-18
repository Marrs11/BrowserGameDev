class Player {
	constructor (var health, var name){
		this.health = 100;
		this.name = "Steve";
	}

	var damagePlayer (var damageAmount){
		health = health - damageAmount;
		return health
	}	
}