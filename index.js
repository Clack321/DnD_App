function getRoll() {

    let value1 = Math.floor(Math.random() * 6 + 1);
    let value2 = Math.floor(Math.random() * 6 + 1);
    let value3 = Math.floor(Math.random() * 6 + 1);
    let value4 = Math.floor(Math.random() * 6 + 1);
    let smallest = min(min(value1, value2), min(value3, value4));
    let total = value1 + value2 + value3 + value4;
    return total;
}

function calc_Modifier(mainAttribute) {

    return ((mainAttribute - 10) / 2);
}

function get_classString(Class) {

    switch(Class) {

        case 1:
            return "Barbarian";
        case 2:
            return "Bard";
        case 3:
            return "Cleric";
        case 4:
            return "Druid";
        case 5:
            return "Fighter";
        case 6:
            return "Monk";
        case 7:
            return "Paladin";
        case 8:
            return "Ranger";
        case 9:
            return "Rouge";
        case 10:
            return "Sorcerer";
        case 11:
            return "Warlock";
        case 12:
            return "Wizard";
        default:
            return "No-Class";
    }

}

function get_raceString(Race) {

    switch(race) {

        case 1:
            return "Aarakocra";
        case 2:
            return "Aasimar";
        case 3:
            return "Bugbear";
        case 4:
            return "Centaur";
        case 5:
            return "Changeling";
        case 6:
            return "Dragonborn";
        case 7:
            return "Dwarf";
        case 8:
            return "Elf";
        case 9:
            return "FearlTiefling";
        case 10:
            return "Firblog";
        case 11:
            return "Genasi";
        case 12:
            return "Gith";
        case 13:
            return "Gnome";
        case 14:
            return "Goblin";
        case 15:
            return "Goliath";
        case 16:
            return "Half-Elf";
        case 17:
            return "Halfing";
        case 18:
            return "Half-Orc";
        case 19:
            return "Hobgoblin";
        case 20:
            return "Human";
        case 21:
            return "Kalashtar";
        case 22:
            return "Kenku";
        case 23:
            return "Kobold";
        case 24:
            return "Lizardfolk";
        case 25:
            return "Loxodon";
        case 26:
            return "Minotaur";
        case 27:
            return "Orc";
        case 28:
            return "Shifter";
        case 29:
            return "SimicHybrid";
        case 30:
            return "Tabaxi";
        case 31:
            return "Tiefling";
        case 32:
            return "Tortle";
        case 33:
            return "Triton";
        case 34:
            return "Vedalken";
        case 35:
            return "Viashino";
        case 36:
            return "Warforged";
        case 37:
            return "Yuan-tiPureblood";
        default:
            return "No-Class";
    }
}
function roll_Class() {

   return Math.floor(Math.random() * 12 + 1);
}

function roll_Race() {

    return Math.floor(Math.random() * 37 + 1);
 }

/*function character() {

    this.strength = getRoll();
    this.dexterity = getRoll();
    this.constitution = getRoll();
    this.intelligence = getRoll();
    this.widsom = getRoll();
    this.charisma = getRoll();

    this.rawStrMod = calc_Modifier(this.strength);
    this.rawDexMod = calc_Modifier(this.dexterity);
    this.rawConstMod = calc_Modifier(this.constitution);
    this.rawIntMod = calc_Modifier(this.intelligence);
    this.rawWisMod = calc_Modifier(this.widsom);
    this.rawCharMod = calc_Modifier(this.charisma);

    this.raceStrMod = calc_Modifier(this.strength);
    this.raceDexMod = calc_Modifier(this.dexterity);
    this.raceConstMod = calc_Modifier(this.constitution);
    this.raceIntMod = calc_Modifier(this.intelligence);
    this.raceWisMod = calc_Modifier(this.widsom);
    this.raceCharMod = calc_Modifier(this.charisma);
    
}*/
function main() {

}
$(main);


