/**
 * Created by chris on 2/17/15.
 */

angular.module('characterCreator', [])

    .controller('CharacterController',
    function ($scope){

        var updateClass = function() {

            if ($scope.charSelection.occupation.contains('Elven'))
            {
                $scope.charClass = "Elven";
            }

        };

        $scope.alignmentSelection = [
            {name: 'Lawful'},
            {name: 'Neutral'},
            {name: 'Chaotic'}
        ];

        $scope.charSelection = [
            {occupation:	'Alchemist',	equipment:	'Oil, 1 flask',	startingWeapon:	'Staff'},
            {occupation:	 'Animal Trainer',	equipment:	'Pony',	startingWeapon:	'Club'},
            {occupation:	 'Armorer',	equipment:	'Iron helmet', 	startingWeapon:	'Hammer (as club)'},
            {occupation:	 'Astrologer',	equipment:	'Spyglass',	startingWeapon:	'Dagger'},
            {occupation:	 'Barber',	equipment:	'Scissors',	startingWeapon:	'Razor (as dagger)'},
            {occupation:	 'Beadle',	equipment:	'Holy symbol',	startingWeapon:	'Staff'},
            {occupation:	 'Beekeeper',	equipment:	'Jar of honey',	startingWeapon:	'Staff'},
            {occupation:	 'Blacksmith',	equipment:	'Steel tongs',	startingWeapon:	'Hammer (as club)'},
            {occupation:	 'Butcher',	equipment:	'Side of beef',	startingWeapon:	'Cleaver (as axe)'},
            {occupation:	 'Caravan Guard',	equipment:	'Linen, 1 yard',	startingWeapon:	'Short sword'},
            {occupation:	 'Cheesemaker',	equipment:	'Stinky cheese',	startingWeapon:	'Cudgel (as staff)'},
            {occupation:	 'Cobbler',	equipment:	'Shoehorn',	startingWeapon:	'Awl (as dagger)'},
            {occupation:	 'Confidence artist',	equipment:	'Quality cloak',	startingWeapon:	'Dagger'},
            {occupation:	 'Cooper',	equipment:	'Barrel',	startingWeapon:	'Crowbar (as club)'},
            {occupation:	 'Costermonger',	equipment:	'Fruit',	startingWeapon:	'Knife (as dagger)'},
            {occupation:	 'Cutpurse',	equipment:	'Small chest',	startingWeapon:	'Dagger'},
            {occupation:	 'Ditch Digger',	equipment:	'Fine dirt, 1 lb.',	startingWeapon:	'Shovel (as staff)'},
            {occupation:	 'Dwarven apothecarist',	equipment:	'Steel vial',	startingWeapon:	'Cudgel (as staff)'},
            {occupation:	 'Dwarven blacksmith',	equipment:	'Mithril, 1 oz.',	startingWeapon:	'Hammer (as club)'},
            {occupation:	 'Dwarven chest-maker',	equipment:	'Wood, 10 lbs.',	startingWeapon:	'Chisel (as dagger)'},
            {occupation:	 'Dwarven herder',	equipment:	'Sow',	startingWeapon:	'Staff'},
            {occupation:	 'Dwarven miner',	equipment:	'Lantern',	startingWeapon:	'Pick (as club)'},
            {occupation:	 'Dwarven mushroom-farmer',	equipment:	'Sack',	startingWeapon:	'Shovel'},
            {occupation:	 'Dwarven Rat-catcher',	equipment:	'Net',	startingWeapon:	'Club'},
            {occupation:	 'Dwarven Stonemason',	equipment:	'Fine Stone 10 lbs.',	startingWeapon:	'Hammer'},
            {occupation:	 'Elven artisan',	equipment:	'Clay, 1 lb.',	startingWeapon:	'Staff'},
            {occupation:	 'Elven barrister',	equipment:	'Book',	startingWeapon:	'Quill (as dart)'},
            {occupation:	 'Elven chandler',	equipment:	'Candles, 20',	startingWeapon:	'Scissors (as dagger)'},
            {occupation:	'Elven falconer',	equipment:	'Falcon',	startingWeapon:	'Dagger'},
            {occupation:	 'Elven forester',	equipment:	'Herbs, 1 lb.',	startingWeapon:	'Staff'},
            {occupation:	 'Elven glassblower',	equipment:	'Glass beads',	startingWeapon:	'Hammer'},
            {occupation:	 'Elven navigator',	equipment:	'Spyglass',	startingWeapon:	'Bow'},
            {occupation:	 'Elven sage',	equipment:	'Parchment and quill pen',	startingWeapon:	'Dagger'},
            {occupation:	 'Farmer',	equipment:	'Hen',	startingWeapon:	'Pitchfork (as spear)'},
            {occupation:	 'Fortune-teller',	equipment:	'Tarot deck',	startingWeapon:	'Dagger'},
            {occupation:	 'Gambler',	equipment:	'Dice',	startingWeapon:	'Club'},
            {occupation:	 'Gongfarmer',	equipment:	'Sack of night soil',	startingWeapon:	'Trowel (as dagger)'},
            {occupation:	 'Grave digger',	equipment:	'Trowel',	startingWeapon:	'Shovel (as staff)'},
            {occupation:	 'Guild beggar',	equipment:	'Crutches',	startingWeapon:	'Sling'},
            {occupation:	 'Halfing chicken butcher',	equipment:	'Chicken meat, 5 lbs.',	startingWeapon:	'Hand axe'},
            {occupation:	 'Halfling dyer',	equipment:	'Fabric, 3 yards',	startingWeapon:	'Staff'},
            {occupation:	 'Halfling glovemaker',	equipment:	'Gloves, 4 pairs',	startingWeapon:	'Awl (as dagger)'},
            {occupation:	 'Halfling gypsy',	equipment:	'Hex doll',	startingWeapon:	'Sling'},
            {occupation:	 'Halfing haberdasher',	equipment:	'Fine suits, 3 sets',	startingWeapon:	'Scissors (as dagger)'},
            {occupation:	 'Halfing mariner',	equipment:	'Sailcloth, 2 yards',	startingWeapon:	'Knife (as dagger)'},
            {occupation:	 'Halfling moneylender',	equipment:	'5 gp, 10 sp , 200 cp',	startingWeapon:	'Short sword'},
            {occupation:	 'Halfling trader',	equipment:	'20 sp',	startingWeapon:	'Short sword'},
            {occupation:	 'Halfling vagrant',	equipment:	'Begging bowl',	startingWeapon:	'Club'},
            {occupation:	 'Healer',	equipment:	'Holy water, 1 vial',	startingWeapon:	'Club'},
            {occupation:	 'Herbalist',	equipment:	'Herbs, 1 lb.',	startingWeapon:	'Club'},
            {occupation:	 'Herder',	equipment:	'Herding dog',	startingWeapon:	'Staff'},
            {occupation:	 'Hunter',	equipment:	'Deer pelt',	startingWeapon:	'Shortbow'},
            {occupation:	 'Indentured servant',	equipment:	'Locket',	startingWeapon:	'Staff'},
            {occupation:	 'Jester',	equipment:	'Silk clothes',	startingWeapon:	'Dart'},
            {occupation:	 'Jewler',	equipment:	'Gem worth 20 gp',	startingWeapon:	'Dagger'},
            {occupation:	 'Locksmith',	equipment:	'Fine tools',	startingWeapon:	'Dagger'},
            {occupation:	 'Mendicant',	equipment:	'Cheese dip',	startingWeapon:	'Club'},
            {occupation:	 'Mercenary',	equipment:	'Hide armor',	startingWeapon:	'Longsword'},
            {occupation:	 'Merchant',	equipment:	'4 gp, 15 sp, 27 cp',	startingWeapon:	'Dagger'},
            {occupation:	 'Miller/baker',	equipment:	'Flour, 1 lb.',	startingWeapon:	'Club'},
            {occupation:	 'Minstrel',	equipment:	'Ukulele',	startingWeapon:	'Dagger'},
            {occupation:	 'Noble',	equipment:	'Gold ring worth 10 gp',	startingWeapon:	'Longsword'},
            {occupation:	 'Orphan',	equipment:	'Rag doll',	startingWeapon:	'Club'},
            {occupation:	'Ostler',	equipment:	'Bridle',	startingWeapon:	'Staff'},
            {occupation:	 'Outlaw',	equipment:	'Leather armor',	startingWeapon:	'Short sword'},
            {occupation:	 'Rope maker',	equipment:	'Rope, 100\'',	startingWeapon:	'Knife (as dagger)'},
            {occupation:	 'Scribe',	equipment:	'Parchment, 10 sheets',	startingWeapon:	'Dart'},
            {occupation:	 'Shaman',	equipment:	'Herbs, 1 lb.',	startingWeapon:	'Mace'},
            {occupation:	 'Slave',	equipment:	'Strange-looking rock',	startingWeapon:	'Club'},
            {occupation:	 'Smuggler',	equipment:	'Waterproof sack',	startingWeapon:	'Sling'},
            {occupation:	 'Soldier',	equipment:	'Shield',	startingWeapon:	'Spear'},
            {occupation:	 'Squire',	equipment:	'Steel helmet',	startingWeapon:	'Longsword'},
            {occupation:	 'Tax collector',	equipment:	'100 cp',	startingWeapon:	'Longsword'},
            {occupation:	 'Trapper',	equipment:	'Badger pelt',	startingWeapon:	'Sling'},
            {occupation:	 'Urchin',	equipment:	'begging bowl',	startingWeapon:	'Stick (as club)'},
            {occupation:	 'Wainwright',	equipment:	'Pushcart',	startingWeapon:	'Club'},
            {occupation:	 'Weaver',	equipment:	'Fine suit of clothes',	startingWeapon:	'Dagger'},
            {occupation:	 'Wizard\'s apprentice',	equipment:	'Black grimoire',	startingWeapon:	'Dagger'},
            {occupation:	 'Woodcutter',	equipment:	'Bundle of wood',	startingWeapon:	'Handaxe'}

        ];


        $scope.classSelection=[
            {name: 'Cleric'},
            {name: 'Thief'},
            {name: 'Warrior'},
            {name: 'Wizard'},
        ];

    });