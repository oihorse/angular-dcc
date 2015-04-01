/**
 * Created by chris on 2/15/15.
 */

angular.module('characterCreator',  [])

    .controller('CharacterController',
    function ($scope) {

        $scope.myData = [
            {
                "firstName": "Cox",
                "lastName": "Carney"}];

        //var that handles the disable boolean for the class chooser
        $scope.occupationCheck = false;

        $scope.hitPoints = 0;

        //Checks which occupation has been chosen. If it's a non-human occupation, it
        //auto-chooses the class for the appropriate race and disables the chooser.
        $scope.updateClass = function () {

        var result = $scope.charOccupation.occupation;

            if (result.indexOf('Elven')!=-1) {
               $scope.occupationCheck = true;
               $scope.charClass = $scope.classSelection[4];
                $scope.generateCharTitle();

            }
            else if (result.indexOf('Dwarven')!=-1) {
                $scope.occupationCheck = true;
                $scope.charClass = $scope.classSelection[5];
                $scope.generateCharTitle();


            }
            else if (result.indexOf('Halfling')!=-1) {
                $scope.occupationCheck = true;
                $scope.charClass = $scope.classSelection[6];
                $scope.generateCharTitle();

            }
            else{
                $scope.occupationCheck = false;
                $scope.charClass = $scope.charClass[0];
                $scope.charOccupationHuman = true
            }

            $scope.generateHitPoints();
            $scope.generateCritTable();
      };

        //Generates random things
        $scope.randomizer = function(minimum, maximum)
        {

            return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

        };

        $scope.classChosen = function()
        {
            $scope.generateInitiativeRoll();
            $scope.generateClassSpecifics();
            $scope.generateCharTitle();

        };


        //Generates random occupation
        $scope.randomOccupation = function()
        {
            var randomOccResult = $scope.randomizer(0, 78)
            $scope.charOccupation = $scope.charSelection[randomOccResult];
            $scope.updateClass();
        };

        //Generates random stats and by product the stat modifiers
        //Also Generates the Lucky Roll
        $scope.randomStats = function()
        {
            $scope.charStrength = $scope.abilityModifiers[$scope.randomizer(0,15)];
            $scope.charAgility = $scope.abilityModifiers[$scope.randomizer(0,15)];
            $scope.charStamina = $scope.abilityModifiers[$scope.randomizer(0,15)];
            $scope.charPersonality = $scope.abilityModifiers[$scope.randomizer(0,15)];
            $scope.charLuck = $scope.abilityModifiers[$scope.randomizer(0,15)];
            $scope.charIntelligence = $scope.abilityModifiers[$scope.randomizer(0,15)];
            $scope.luckyRollResult = $scope.luckyRoll[$scope.randomizer(0,29)];

            $scope.generateInitiativeRoll();
            $scope.generateSavingThrowModifiers();
            $scope.generateAttackModifiers();
            $scope.generateHitPoints();
            $scope.generateClassSpecifics()

        };




        //Modifier table
        $scope.abilityModifiers = [
            {score:3, modifier: -3},
            {score:4, modifier: -2},
            {score:5, modifier: -2},
            {score:6, modifier: -1},
            {score:7, modifier: -1},
            {score:8, modifier: -1},
            {score:9, modifier: 0},
            {score:10, modifier: 0},
            {score:11, modifier: 0},
            {score:12, modifier: 0},
            {score:13, modifier: 1},
            {score:14, modifier: 1},
            {score:15, modifier: 1},
            {score:16, modifier: 2},
            {score:17, modifier: 2},
            {score:18, modifier: 3}
        ];



        //Alignments table
        $scope.alignmentSelection = [
            {name: 'Lawful'},
            {name: 'Neutral'},
            {name: 'Chaotic'}
        ];

        //Occupations Table
        $scope.charSelection = [
            {occupation: 'Alchemist', equipment: 'Oil, 1 flask', startingWeapon: 'Staff'},
            {occupation: 'Animal Trainer', equipment: 'Pony', startingWeapon: 'Club'},
            {occupation: 'Armorer', equipment: 'Iron helmet', startingWeapon: 'Hammer (as club)'},
            {occupation: 'Astrologer', equipment: 'Spyglass', startingWeapon: 'Dagger'},
            {occupation: 'Barber', equipment: 'Scissors', startingWeapon: 'Razor (as dagger)'},
            {occupation: 'Beadle', equipment: 'Holy symbol', startingWeapon: 'Staff'},
            {occupation: 'Beekeeper', equipment: 'Jar of honey', startingWeapon: 'Staff'},
            {occupation: 'Blacksmith', equipment: 'Steel tongs', startingWeapon: 'Hammer (as club)'},
            {occupation: 'Butcher', equipment: 'Side of beef', startingWeapon: 'Cleaver (as axe)'},
            {occupation: 'Caravan Guard', equipment: 'Linen, 1 yard', startingWeapon: 'Short sword'},
            {occupation: 'Cheesemaker', equipment: 'Stinky cheese', startingWeapon: 'Cudgel (as staff)'},
            {occupation: 'Cobbler', equipment: 'Shoehorn', startingWeapon: 'Awl (as dagger)'},
            {occupation: 'Confidence artist', equipment: 'Quality cloak', startingWeapon: 'Dagger'},
            {occupation: 'Cooper', equipment: 'Barrel', startingWeapon: 'Crowbar (as club)'},
            {occupation: 'Costermonger', equipment: 'Fruit', startingWeapon: 'Knife (as dagger)'},
            {occupation: 'Cutpurse', equipment: 'Small chest', startingWeapon: 'Dagger'},
            {occupation: 'Ditch Digger', equipment: 'Fine dirt, 1 lb.', startingWeapon: 'Shovel (as staff)'},
            {occupation: 'Dwarven apothecarist', equipment: 'Steel vial', startingWeapon: 'Cudgel (as staff)'},
            {occupation: 'Dwarven blacksmith', equipment: 'Mithril, 1 oz.', startingWeapon: 'Hammer (as club)'},
            {occupation: 'Dwarven chest-maker', equipment: 'Wood, 10 lbs.', startingWeapon: 'Chisel (as dagger)'},
            {occupation: 'Dwarven herder', equipment: 'Sow', startingWeapon: 'Staff'},
            {occupation: 'Dwarven miner', equipment: 'Lantern', startingWeapon: 'Pick (as club)'},
            {occupation: 'Dwarven mushroom-farmer', equipment: 'Sack', startingWeapon: 'Shovel'},
            {occupation: 'Dwarven Rat-catcher', equipment: 'Net', startingWeapon: 'Club'},
            {occupation: 'Dwarven Stonemason', equipment: 'Fine Stone 10 lbs.', startingWeapon: 'Hammer'},
            {occupation: 'Elven artisan', equipment: 'Clay, 1 lb.', startingWeapon: 'Staff'},
            {occupation: 'Elven barrister', equipment: 'Book', startingWeapon: 'Quill (as dart)'},
            {occupation: 'Elven chandler', equipment: 'Candles, 20', startingWeapon: 'Scissors (as dagger)'},
            {occupation: 'Elven falconer', equipment: 'Falcon', startingWeapon: 'Dagger'},
            {occupation: 'Elven forester', equipment: 'Herbs, 1 lb.', startingWeapon: 'Staff'},
            {occupation: 'Elven glassblower', equipment: 'Glass beads', startingWeapon: 'Hammer'},
            {occupation: 'Elven navigator', equipment: 'Spyglass', startingWeapon: 'Bow'},
            {occupation: 'Elven sage', equipment: 'Parchment and quill pen', startingWeapon: 'Dagger'},
            {occupation: 'Farmer', equipment: 'Hen', startingWeapon: 'Pitchfork (as spear)'},
            {occupation: 'Fortune-teller', equipment: 'Tarot deck', startingWeapon: 'Dagger'},
            {occupation: 'Gambler', equipment: 'Dice', startingWeapon: 'Club'},
            {occupation: 'Gongfarmer', equipment: 'Sack of night soil', startingWeapon: 'Trowel (as dagger)'},
            {occupation: 'Grave digger', equipment: 'Trowel', startingWeapon: 'Shovel (as staff)'},
            {occupation: 'Guild beggar', equipment: 'Crutches', startingWeapon: 'Sling'},
            {occupation: 'Halfling chicken butcher', equipment: 'Chicken meat, 5 lbs.', startingWeapon: 'Hand axe'},
            {occupation: 'Halfling dyer', equipment: 'Fabric, 3 yards', startingWeapon: 'Staff'},
            {occupation: 'Halfling glovemaker', equipment: 'Gloves, 4 pairs', startingWeapon: 'Awl (as dagger)'},
            {occupation: 'Halfling gypsy', equipment: 'Hex doll', startingWeapon: 'Sling'},
            {occupation: 'Halfling haberdasher', equipment: 'Fine suits, 3 sets', startingWeapon: 'Scissors (as dagger)'},
            {occupation: 'Halfling mariner', equipment: 'Sailcloth, 2 yards', startingWeapon: 'Knife (as dagger)'},
            {occupation: 'Halfling moneylender', equipment: '5 gp, 10 sp , 200 cp', startingWeapon: 'Short sword'},
            {occupation: 'Halfling trader', equipment: '20 sp', startingWeapon: 'Short sword'},
            {occupation: 'Halfling vagrant', equipment: 'Begging bowl', startingWeapon: 'Club'},
            {occupation: 'Healer', equipment: 'Holy water, 1 vial', startingWeapon: 'Club'},
            {occupation: 'Herbalist', equipment: 'Herbs, 1 lb.', startingWeapon: 'Club'},
            {occupation: 'Herder', equipment: 'Herding dog', startingWeapon: 'Staff'},
            {occupation: 'Hunter', equipment: 'Deer pelt', startingWeapon: 'Shortbow'},
            {occupation: 'Indentured servant', equipment: 'Locket', startingWeapon: 'Staff'},
            {occupation: 'Jester', equipment: 'Silk clothes', startingWeapon: 'Dart'},
            {occupation: 'Jewler', equipment: 'Gem worth 20 gp', startingWeapon: 'Dagger'},
            {occupation: 'Locksmith', equipment: 'Fine tools', startingWeapon: 'Dagger'},
            {occupation: 'Mendicant', equipment: 'Cheese dip', startingWeapon: 'Club'},
            {occupation: 'Mercenary', equipment: 'Hide armor', startingWeapon: 'Longsword'},
            {occupation: 'Merchant', equipment: '4 gp, 15 sp, 27 cp', startingWeapon: 'Dagger'},
            {occupation: 'Miller/baker', equipment: 'Flour, 1 lb.', startingWeapon: 'Club'},
            {occupation: 'Minstrel', equipment: 'Ukulele', startingWeapon: 'Dagger'},
            {occupation: 'Noble', equipment: 'Gold ring worth 10 gp', startingWeapon: 'Longsword'},
            {occupation: 'Orphan', equipment: 'Rag doll', startingWeapon: 'Club'},
            {occupation: 'Ostler', equipment: 'Bridle', startingWeapon: 'Staff'},
            {occupation: 'Outlaw', equipment: 'Leather armor', startingWeapon: 'Short sword'},
            {occupation: 'Rope maker', equipment: 'Rope, 100\'', startingWeapon: 'Knife (as dagger)'},
            {occupation: 'Scribe', equipment: 'Parchment, 10 sheets', startingWeapon: 'Dart'},
            {occupation: 'Shaman', equipment: 'Herbs, 1 lb.', startingWeapon: 'Mace'},
            {occupation: 'Slave', equipment: 'Strange-looking rock', startingWeapon: 'Club'},
            {occupation: 'Smuggler', equipment: 'Waterproof sack', startingWeapon: 'Sling'},
            {occupation: 'Soldier', equipment: 'Shield', startingWeapon: 'Spear'},
            {occupation: 'Squire', equipment: 'Steel helmet', startingWeapon: 'Longsword'},
            {occupation: 'Tax collector', equipment: '100 cp', startingWeapon: 'Longsword'},
            {occupation: 'Trapper', equipment: 'Badger pelt', startingWeapon: 'Sling'},
            {occupation: 'Urchin', equipment: 'begging bowl', startingWeapon: 'Stick (as club)'},
            {occupation: 'Wainwright', equipment: 'Pushcart', startingWeapon: 'Club'},
            {occupation: 'Weaver', equipment: 'Fine suit of clothes', startingWeapon: 'Dagger'},
            {occupation: 'Wizard\'s apprentice', equipment: 'Black grimoire', startingWeapon: 'Dagger'},
            {occupation: 'Woodcutter', equipment: 'Bundle of wood', startingWeapon: 'Handaxe'}

        ];

        //Class table
        $scope.classSelection = [
            {name: 'Cleric', speed: "30"},
            {name: 'Thief', speed: "30"},
            {name: 'Warrior', speed:"30"},
            {name: 'Wizard', speed:"30"},
            {name: "Elven", speed:"30"},
            {name: "Dwarven", speed:"20"},
            {name: "Halfling", speed:"20"}
        ];

        //Lucky Roll table
        $scope.luckyRoll = [
            {name: "Harsh Winter: All attack rolls"},
            {name: "The bull: Melee attack rolls"},
            {name: "Fortunate date: Missile fire attack rolls"},
            {name: "Raised by wolves: Unarmed attack rolls"},
            {name: "Conceived on horseback: Mounted attack rolls"},
            {name: "Born on the battlefield: Damage rolls"},
            {name: "Path of the bear: Melee damage rolls"},
            {name: "Hawkeye: Missle fire damage rolls"},
            {name: "Pack hunter: Attack and damage rolls for 0-level starting weapon"},
            {name: "Born under the loom: Skill checks (including thief skills)"},
            {name: "Fox's cunning: Find/disarm traps"},
            {name: "Four-leafed clover: Find secret doors"},
            {name: "Seventh son: Spell checks"},
            {name:"The raging storm: Spell damage"},
            {name: "Righteous heart: Turn unholy checks"},
            {name: "Survived the plague: Magical healing"},
            {name: "Lucky sign: Saving throws"},
            {name: "Guardian angel: Saving throws to escape traps"},
            {name: "Survived a spider bite: Savings throws against poison"},
            {name: "Struck by lightning: Reflex saving throws"},
            {name:    "Lived through famine: Fortitude saving throws"},
            {name:  "Resisted temptation: Willpower saving throws"},
            {name:   "Charmed house: Armor Class"},
            {name: "Speed of the cobra: Initiative"},
            {name:    "Bountiful harvest: Hit points (applies at each level)"},
            {name:   "Warrior's arm: Critical hit tables"},
            {name:   "Unholy house: Corruption rolls"},
            {name: "The Broken Star: Fumbles"},
            {name:    "Birdsong: Number of languages"},
            {name:    "Wild child: Speed (each +1/-1 = +5'/-5' speed)"}

        ];

        //Call methods affected by level changes
        $scope.generateLevelChanges = function()
        {
           $scope.generateInitiativeRoll();
            $scope.generateCharTitle();
            $scope.generateCritTable();
            $scope.generateAttackBonus();
            $scope.generateActionDie();
            $scope.generateSavingThrowModifiers();
            $scope.generateClassSpecifics();
            $scope.generateHitPoints();
        }

        //Generate the initiative roll
        $scope.generateInitiativeRoll = function()
        {
            var initiative = 0;

            if ($scope.charClass && $scope.charLevel) {
                if ($scope.charClass.name.indexOf('Warrior') != -1) {

                    initiative += parseInt($scope.charLevel);
                }
            }

            if ($scope.charAgility)
            {
                initiative += $scope.charAgility.modifier;
            }

            //build text string
            var initiativeText;

            if (initiative >= 0)
            {
                initiativeText = "1d20 + ";
            }
            else
            {
                initiativeText = "1d20 ";
            }



            return $scope.charInitiative = initiativeText + initiative;

        };

        //Generate title
        $scope.generateCharTitle = function() {
            if ($scope.charClass) {

            if ($scope.charClass.name.indexOf('Warrior') != -1) {

                if ($scope.charLevel && $scope.alignment) {

                    $scope.charTitle = Warrior.getWarriorTitle($scope.alignment.name, $scope.charLevel);
                }
            }
                if ($scope.charClass.name.indexOf('Thief') != -1) {

                    if ($scope.charLevel && $scope.alignment) {

                        $scope.charTitle = Thief.getThiefTitle($scope.alignment.name, $scope.charLevel);
                        $scope.generateClassSpecifics();

                    }
                }
         }
        }

        //Generate crit Table
        $scope.generateCritTable = function()
        {
            if ($scope.charClass) {
                if ($scope.charClass.name.indexOf('Warrior') != -1) {

                    if ($scope.charLevel) {

                        $scope.critTable = Warrior.generateCritTable($scope.charLevel);
                    }
                }
                if ($scope.charClass.name.indexOf('Thief') != -1) {

                    if ($scope.charLevel) {

                        $scope.critTable = Thief.generateCritTable();
                    }
                }
            }
            $scope.generateCritDie();

        }

        //Generate crit Die
        $scope.generateCritDie = function()
        {
              if ($scope.charClass) {
                if ($scope.charClass.name.indexOf('Warrior') != -1) {

                    if ($scope.charLevel) {

                        $scope.critDie = Warrior.critDie[$scope.charLevel -1 ];


                    }
                }
                  if ($scope.charClass.name.indexOf('Thief') != -1) {

                      if ($scope.charLevel) {

                          $scope.critDie = Thief.critDie[$scope.charLevel -1 ];


                      }
                  }
            }
        }

        //Generate attack bonus
        $scope.generateAttackBonus = function()
        {
            if ($scope.charClass) {
                if ($scope.charClass.name.indexOf('Warrior') != -1) {

                    if ($scope.charLevel) {

                        $scope.attackBonus = Warrior.attackBonus[$scope.charLevel -1 ];


                    }
                }
                if ($scope.charClass.name.indexOf('Thief') != -1) {

                    if ($scope.charLevel) {

                        $scope.attackBonus = Thief.attackBonus[$scope.charLevel -1 ];


                    }
                }
            }
        }

        //Generate action die
        $scope.generateActionDie = function()
        {
            if ($scope.charClass) {
                if ($scope.charClass.name.indexOf('Warrior') != -1) {

                    if ($scope.charLevel) {

                        $scope.actionDie = Warrior.actionDie[$scope.charLevel -1 ];


                    }
                }
                if ($scope.charClass.name.indexOf('Thief') != -1) {

                    if ($scope.charLevel) {

                        $scope.actionDie = Thief.actionDie[$scope.charLevel -1 ];


                    }
                }
            }
        }

        //generate saving throw modifiers
        $scope.generateSavingThrowModifiers = function()
        {
            if ($scope.charClass) {
                if ($scope.charClass.name.indexOf('Warrior') != -1) {

                    if ($scope.charLevel && $scope.charPersonality) {

                        $scope.willPowerSave =  $scope.charPersonality.modifier + Warrior.willPowerBonus[$scope.charLevel -1 ];
                        $scope.fortitudeSave =  $scope.charStamina.modifier + Warrior.fortitudeBonus[$scope.charLevel -1 ];
                        $scope.reflexSave =  $scope.charAgility.modifier + Warrior.reflexBonus[$scope.charLevel -1 ];

                    }
                }
                if ($scope.charClass.name.indexOf('Thief') != -1) {

                    if ($scope.charLevel && $scope.charPersonality) {

                        $scope.willPowerSave =  $scope.charPersonality.modifier + Thief.willPowerBonus[$scope.charLevel -1 ];
                        $scope.fortitudeSave =  $scope.charStamina.modifier + Thief.fortitudeBonus[$scope.charLevel -1 ];
                        $scope.reflexSave =  $scope.charAgility.modifier + Thief.reflexBonus[$scope.charLevel -1 ];

                    }
                }
            }
        }

        //generate attack modifiers
        $scope.generateAttackModifiers = function ()
        {

                    if ($scope.charAgility && $scope.charStrength) {

                        $scope.missileAttackBonus =  $scope.charAgility.modifier;
                        $scope.meleeAttackBonus =  $scope.charStrength.modifier;

                    }

        }

        //generate class specific things
        $scope.generateClassSpecifics = function()
        {
            if ($scope.charClass) {
                if ($scope.charClass.name.indexOf('Warrior') != -1) {

                    if ($scope.charLevel) {

                        $scope.threatRange =   Warrior.threatRange[$scope.charLevel -1 ];

                    }
                }
                if ($scope.charClass.name.indexOf('Thief') != -1) {

                    if ($scope.charLevel) {

                        $scope.luckyDie =   Thief.luckyDie[$scope.charLevel -1 ];
                     if ($scope.charAgility) {

                         Thief.generateThiefSkills($scope.alignment.name, $scope.charLevel, $scope.charAgility.modifier,
                         $scope.charIntelligence.modifier,
                         $scope.charPersonality.modifier);
                         $scope.backstab = Thief.backstab;
                         $scope.sneakSilently = Thief.sneakSilently;
                         $scope.hideInShadows = Thief.hideInShadows;
                         $scope.pickPocket = Thief.pickPocket;
                         $scope.climbSheerSurfaces = Thief.climbSheerSurfaces;
                         $scope.pickLock = Thief.pickLock;
                         $scope.findTrap = Thief.findTrap;
                         $scope.disableTrap = Thief.disableTrap;
                         $scope.forgeDocument = Thief.forgeDocument;
                         $scope.disguiseSelf = Thief.disguiseSelf;
                         $scope.readLanguages = Thief.readLanguages;
                         $scope.handlePoison = Thief.handlePoison;
                         $scope.castSpellFromScroll = Thief.castSpellFromScroll;

                     }
                    }
                }
            }
        }

        //generate the hit points for the character
        $scope.generateHitPoints = function() {
            $scope.hitPoints = 0;

            var test = [];
            var i = 0;

            if ($scope.charClass) {
                if ($scope.charClass.name.indexOf('Warrior') != -1) {

                    if ($scope.charLevel && $scope.charStamina) {

                        while (i < $scope.charLevel){
                            var result = $scope.randomizer(1, Warrior.hitPointDie) + $scope.charStamina.modifier;
                            if (result < 1)
                            {
                                result = 1;
                            }
                            test.push(result);
                            $scope.hitPoints += result;
                            i++;
                        }
                        alert("Hit points rolled was: " + test);

                    }

                }
                if ($scope.charClass.name.indexOf('Thief') != -1) {

                    if ($scope.charLevel && $scope.charStamina) {

                        while (i < $scope.charLevel){
                            var result = $scope.randomizer(1, Thief.hitPointDie) + $scope.charStamina.modifier;
                            if (result < 1)
                            {
                                result = 1;
                            }
                            test.push(result);
                            $scope.hitPoints += result;
                            i++;
                        }
                        alert("Hit points rolled was: " + test);

                    }

                }

            }
        }
    });