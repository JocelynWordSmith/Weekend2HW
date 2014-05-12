console.log("working")


//fighter class
//for all classes, stats are 
//[str, int, char, dext]
var fighter = {
	race: 'human',
	gender: 'male',
	focus: 'melee',
	stats: [18, 8, 7, 4],
	health: 90,
	level: 1
};

//magic class
var mage = {
	race: 'elf',
	gender: 'male',
	focus: 'magic',
	stats: [6, 18, 9, 4],
	health: 60,
	level: 1
};

//stealth class
var rogue = {
	race: 'nymph',
	gender: 'female',
	focus: 'stealth',
	stats: [7, 12, 8, 14],
	health: 70,
	level: 1
};

//tank class
var heavy = {
	race: 'ent-moot',
	gender: 'none',
	focus: 'deffense',
	stats: [12, 2, 2, 18],
	health: 130,
	level: 1
};

//inventory
var bag = {
	weapon: 'none',
	armor: 'none',
	items: {
		message: 'Find me at the Inn',
		potion: [1, 2, 1]
	}
};
var player = {};

//displays a class on the document page
function chooseAvatar(number) {

	if (number == 1) {
		player = fighter;
		var x = fighter
		document.body.innerHTML = "";
		document.write(
			'race: ', x.race, 
			'<br>gender: ', x.gender, 
			"<br>focus: ", x.focus, 
			'<br>stats ', x.stats, 
			'<br>health: ', x.health ); 
		
	}
	else if (number == 2) {
		player = mage;
		var x = mage
		document.body.innerHTML = "";
		document.write(
			'race: ', x.race, 
			'<br>gender: ', x.gender, 
			"<br>focus: ", x.focus, 
			'<br>stats ', x.stats, 
			'<br>health: ', x.health ); 
		
	}
	else if (number == 3) {
		player = rogue;
		var x = rogue
		document.body.innerHTML = "";
		document.write(
			'race: ', x.race, 
			'<br>gender: ', x.gender, 
			"<br>focus: ", x.focus, 
			'<br>stats ', x.stats, 
			'<br>health: ', x.health ); 
		
	}
	else if (number == 4) {
		player = heavy;
		var x = heavy
		// document.body.innerHTML = "";
		document.write(
			'race: ', x.race, 
			'<br>gender: ', x.gender, 
			"<br>focus: ", x.focus, 
			'<br>stats ', x.stats, 
			'<br>health: ', x.health ); 
		
	}
};
// adds one to the level, and one to each stat.
function levelUp (avatar) {
	avatar.level = (avatar.level +1);
	avatar.stats =avatar.stats.map(function(x){
		return (x + 1);
	});
};
// equipes an iron dagger and helmet, adding one to your str
// and one to your health
function equipIron (avatar) {
	bag.weapon = 'iron dagger';
	bag.armor = 'iron helm';
	avatar.stats[0] = avatar.stats[0] + 1;
	avatar.health = avatar.health + 10;
}
// adds potions unless they are full
function potBag () {
	bag.items.potion = bag.items.potion.map(function(x){
		if (x >= 5) {
			console.log("sorry you  have too many of this potion");
			return x;
		}
		else {
			return x+1;
		}
	})
};
// adds health, int. and str. if potions are available
function usePot () {
	bag.items.potion = bag.items.potion.map(function(x,y){
		if (x > 0 && y == 0) {
			player.health = player.health + 10;
			return x - 1;
		}
		else if (x > 0 && y == 1) {
			player.stats[1] = player.stats[1] + 1;
			return x - 1;
		}
		else if (x > 0 && y == 2) {
			player.stats[0] = player.stats[0] + 1;
			return x - 1;
		}	
	})
};
function totalstats (chartype) {
	var total = chartype.stats.reduce(function(a, b) {
    return a + b;
});
};

// function avghealth () {
// 	var phealth = [fighter.health, mage.health, rogue.health, heavy.health,].reduce(function(a, b) {
// 		return ((a + b)\4);
// 	})
// }




