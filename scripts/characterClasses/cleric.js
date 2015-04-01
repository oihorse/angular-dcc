/**
 * Created by chris on 2/28/15.
 */
var Cleric;
Cleric = {

    hitPointDie: 8,
    diety: "",
    spellCheck: 0,
    attackBonus: ["0", "1", "2", "2", "3", "4", "5", "5", "6", "7"],
    critDie: ["1d8", "1d8", "1d10", "1d10", "1d12", "1d12", "1d14", "1d14","1d16"],
    actionDie: ["1d20", "1d20", "1d20", "1d20", "1d20", "1d20 + 1d14", "1d20 + 1d16", "1d20 + 1d20", "1d20 + 1d20", "1d20 + 1d20"],
    willPowerBonus:[1, 1, 2, 2, 3, 4, 4, 5, 5, 6],
    fortitudeBonus:[1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
    reflexBonus: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]


};

Cleric.getClericTitle = function(alignment, level) {
    var title = "";
    level = parseInt(level);


    if (alignment.indexOf('Lawful') != -1) {
        switch (level) {
            case 1:
                title = "Acolyte";
                break;
            case 2:
                title = "Heathen-slayer";
                break;
            case 3:
                title = "Brother";
                break;
            case 4:
                title = "Curate";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                title = "Father";
                break;
            default:
                title = "";
        }
        return title;
    }

    else if (alignment.indexOf("Neutral") != -1) {
        switch (level) {
            case 1:
                title = "Witness";
                break;
            case 2:
                title = "Pupil";
                break;
            case 3:
                title = "Chronicler";
                break;
            case 4:
                title = "Judge";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                title = "Druid";
                break;
            default:
                title = "";
        }
        return title;
    } else if (alignment.indexOf("Chaotic") != -1) {
        switch (level) {
            case 1:
                title = "Zealot";
                break;
            case 2:
                title = "Convert";
                break;
            case 3:
                title = "Cultist";
                break;
            case 4:
                title = "Apostle";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                title = "High priest";
                break;
            default:
                title = "";
        }
        return title;
    }

    return title;
};

Cleric.getSpellCheck = function(charLevel, personalityModifier) {
    var sc = "";
    charLevel = parseInt(charLevel);
    personalityModifier = parseInt(personalityModifier);

    var scModifier = charLevel + personalityModifier;


    if (scModifier >= 0)
    {
        sc = "1d20 + ";
    }
    else
    {
        sc = "1d20 ";
    }
    sc + scModifier;

    return sc;
}