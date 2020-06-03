/*source https://www.reddit.com/r/mpmb/comments/cuy9ze/code_content_request_school_of_chaos_for_wizard/ */

var iFileName = "Wizard - School of Chaos concept by kairotox7.js";
RequiredSheetVersion(12.999);

SourceList["KT:CH"] = {
	name : "kairotox7: School of Chaos",
	abbreviation : "KT:CH",
	date : "2020/06/01"
};

AddSubClass("wizard", "school of chaos", {
	regExpSearch : /^((?=.*wizard)(?=.*school)(?=.*chaos)|(?=.*chaos)(?=.*(mage|magus))).*$/i,
	subname : "Chaos Mage",
	source : ["KT:CH", 1],
	fullname : "School of Chaos",
	features : {
		"subclassfeature2" : {
			name : "Fractured Mind",
			source : ["KT:CH", 1],
			minlevel : 2,
			description : desc([
				"Whenever you would learn a spell, roll (or otherwise randomly determine) which spell of that spell level to learn. (From the wizard spell list.) I.E: If you would learn a level 3 spell, randomly determine a 3rd level wizard spell to learn instead. For the first spell learned at each spell level, roll for an additional spell of that spell level, and gain a spell slot of that level",
				"Whenever you attempt to copy a spell into your spellbook, roll a d6, and on a 6, the gold and time you must spend to copy the spell into your spellbook is halved."
			]),
		},
		"subclassfeature2.1" : {
			name : "Tumultuous Spellcasting",
			source : ["KT:CH", 1],
			minlevel : 2,
			description : desc([
				"Whenever you cast a damaging spell, roll a d6. The number corresponds to which modifier to add to the damage dice, In STR(1), DEX(2), CON(3), INT(4), WIS(5), and CHA(6) order. Calculate spellcasting as normal and add the modifier to each damage die at the end. Negative damage would heal the target."
			]),
		},
		"subclassfeature6" : {
			name : "Unstable Reality",
			source : ["KT:CH", 1],
			minlevel : 6,
			description : desc([
				"Whenever you cast a spell with a creature as a target, you may roll a d6. On a 6, the spell is twinned, and another creature within 10ft is also targeted, chosen randomly."
			]),
		},
		"subclassfeature10" : {
			name : "Quantum Superposition",
			source : ["KT:CH", 1],
			minlevel : 10,
			description : desc([
				"Whenever you would be dealt damage, roll a d6. On a 6, take no damage."
			]),
		},
		"subclassfeature14" : {
			name : "Chaos Theory",
			source : ["KT:CH", 1],
			minlevel : 14,
			description : desc([
				"Once per long rest, if your health falls to 0 hitpoints, roll your max hit die, and heal that amount as if you had taken a short rest then teleport to a random location within 60 feet. To determine random location, roll a d8 to determine direction, ( 1 being north) then roll a d12 to determine distance. Then pick the nearest unoccupied space",
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});