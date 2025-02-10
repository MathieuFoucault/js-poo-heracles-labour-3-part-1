class Hero extends Fighter {
	constructor(name, strength, dexterity, image, weapon = null, shield = null) {
		super(name, strength, dexterity, image);
		this.weapon = weapon;
		this.shield = shield;
	}

	getDamage() {
		return super.getDamage() + (this.weapon ? this.weapon.damage : 0);
	}

	getDefense() {
		return super.getDefense() + (this.shield ? this.shield.protection : 0);
	}
}
