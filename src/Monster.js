class Monster extends Fighter {
	constructor(name, strength, dexterity, image) {
		super(name, strength, dexterity, image);
	}

	getDamage() {
		return super.getDamage();
	}

	getDefense() {
		return super.getDefense();
	}
}
