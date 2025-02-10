/** Part for the starting instanciation */
/** creating the hero Heracles */
const heracles = new Hero(
	"Héraclès",
	20,
	10,
	"path/to/heracles.png",
	new Weapon("Sword", 10, "path/to/sword.png"),
	new Shield("Shield", 5, "path/to/shield.png"),
);

/** Creating his weapon and associating it */
const weapon = new Weapon("sword", 10, "./images/sword.svg");
heracles.weapon = weapon;

/** Creating his shield and associating it */
const shield = new Shield("shield", 10, "./images/shield.svg");
heracles.shield = shield;

/** Creating all of his adversaries */
const bird1 = new Monster("Bird 1", 10, 5, "path/to/bird1.png", 1, 2);
const bird2 = new Monster("Bird 2", 10, 5, "path/to/bird2.png", 3, 4);
const bird3 = new Monster("Bird 3", 10, 5, "path/to/bird3.png", 5, 6);

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate("fighters");
fighterHtml.createTemplate(heracles, bird1);

/** Your code goes here */

/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = () => {
	if (openingModal) {
		const heroInfo = new HeroInfoTemplate("heroInfo");
		heroInfo.createHeroInfoTemplate(heracles);
		document.getElementById("heroInfo").style.display = "flex";
		openingModal = false;
	}
};

const closeModal = () => {
	const heroInfo = document.getElementById("heroInfo");
	heroInfo.style.display = "none";
	heroInfo.innerHTML = "";
	openingModal = true;
};

const arena = new Arena(heracles, [bird1, bird2, bird3]);

const ArenaHTML = new ArenaTemplate("arena");
ArenaHTML.createArena(arena);
