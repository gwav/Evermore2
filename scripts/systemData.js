// Evermore RPG System 2.0 - Centralized System Data
// This file serves as a single source of truth for system data

// Attributes
export const ATTRIBUTES = {
  strength: { 
    key: "strength",
    label: "Strength", 
    defaultValue: 8,
    max: 18,
    description: "Measures bodily power, athletic training, and raw physical force."
  },
  dexterity: { 
    key: "dexterity",
    label: "Dexterity", 
    defaultValue: 8,
    max: 18,
    description: "Measures agility, reflexes, and balance."
  },
  constitution: { 
    key: "constitution",
    label: "Constitution", 
    defaultValue: 8,
    max: 18,
    description: "Measures health, stamina, and vital force."
  },
  intelligence: { 
    key: "intelligence",
    label: "Intelligence", 
    defaultValue: 8,
    max: 18,
    description: "Measures mental acuity, recall, and reasoning."
  },
  wisdom: { 
    key: "wisdom",
    label: "Wisdom", 
    defaultValue: 8,
    max: 18,
    description: "Reflects perceptiveness, intuition, and attunement to the world."
  },
  charisma: { 
    key: "charisma",
    label: "Charisma", 
    defaultValue: 8,
    max: 18,
    description: "Measures ability to interact, confidence, and personality."
  }
};

// Default HP values
export const DEFAULT_HP = {
  value: 10,
  max: 10
};

// Kin (Species/Ancestry)
export const KIN = {
  blooded: {
    key: "blooded",
    label: "Blooded",
    description: "Supernatural ancestry.",
    subtypes: {
      changeling: "Changeling (Descendants of the Fae)",
      dragonborn: "Dragonborn (Descendants of dragons)",
      elementalkin: "Elementalkin (Descendants of Elemental Barons, Jinn, etc.)",
      nephilim: "Nephilim (Descendants of celestial or infernal beings)"
    },
    traits: [
      "Alluring: Advantage on all Charisma rolls dealing with social situations.",
      "Blood Calls to Blood: Sense people, places, and things related to ancestry on a 3 in 6 roll.",
      "Two Spirit: Considered both human and supernatural ancestor for Kin.",
      "Languages: The tongue of the supernatural ancestor."
    ],
    descriptionLong: "Blooded are individuals who bear the supernatural heritage of an ancestor in their veins. This lineage may stem from a recent parent or extend to a distant great-great-grandparent. While Blooded mostly resemble humans, they all exhibit visible traits of their extraordinary ancestry—unique features that can only be concealed through magical means. A rare few display dramatically inhuman appearances. Although Blooded share a sense of camaraderie, no unified community exists for any specific type. Scholars and adventurers have classified these enigmatic beings into distinct bloodlines."
  },
  human: {
    key: "human",
    label: "Human",
    description: "Standard human lineage.",
    traits: [
      "Image of the Creator: Humans receive a +1 bonus to all attributes at character level. This cannot raise the total of an attribute past 18.",
      "Extra Boon: Humans receive an extra boon at character creation.",
      "Languages: A language belonging to their Origin."
    ],
    descriptionLong: "The most numerous of the Kin of Evermore, humans can be found throughout the lands. Humanity is not native to Evermore, having been transported from Earth through a powerful Rite created by the Grand Archmage Zoso. When Evermore came into being it was painfully glaring that humanity was missing. This issue was on the Creator's part, an oversight."
  },
  manikin: {
    key: "manikin",
    label: "Manikin",
    description: "Artificial beings given life.",
    traits: [
      "Artificial: Manikins are considered constructs for all purposes.",
      "Imbued: Manikins have a single imbued magickal ability that is unique to them. This ability can be used once per day.",
      "Languages: Thyrenian and one other of any origin."
    ],
    descriptionLong: "Manikins are artificial beings created by the magick of Evermore. They are not born but rather crafted, often imbued with a single magickal ability that sets them apart from other Kin. While they may appear human, their origins as constructs make them unique in the world of Evermore."
  },
  trickster: {
    key: "trickster",
    label: "Trickster",
    description: "Mischievous and cunning beings.",
    traits: [
      "Cunning: Tricksters have advantage on all Charisma rolls dealing with deception, trickery, and misdirection.",
      "Trickster's Luck: Once per day, a Trickster can reroll a failed roll, but must accept the new result.",
      "Languages: Thyrenian and one other of any origin."
    ],
    descriptionLong: "Tricksters are beings of mischief and cunning, often using their wits to outsmart others. They thrive on deception and trickery, making them both unpredictable and entertaining. While they may not always be malicious, their actions often lead to unexpected consequences for those around them."
  }
};

// Backgrounds
export const BACKGROUNDS = {
  barbarian: {
    key: "barbarian",
    label: "Barbarian",
    type: "Martial",
    description: "Those that live outside of civilizations' restraints.",
    traits: [
      "Rage: When you go rage, add a d6 to the damage you deal. The damage you receive while raging is halved. Your rage stops when you roll a 1 on the d6. You need a long rest to be able to go rage again.",
      "Survivalist: The barbarian has the survivalist boon for free.",
      "Languages: Thyrenian and their barbarian tribal language."
    ],
    descriptionLong: "To the east of the Spine of Tiamat lies the untamed wilderness of Evermore, where the fierce Barbarians roam. Forged by the harsh lands they call home; these warriors embody raw power and unyielding will. They draw their strength from the primal spirits of the earth, the howling winds, and the roaring fire within their souls. Barbarians of Evermore charge into battle with an unmatched fury, their war cries shaking the heavens. Whether defending their clans, avenging the wronged, or seeking glory, they are forces of nature as relentless as the storms that ravage their homeland."
  },
  knight: {
    key: "knight",
    label: "Knight",
    type: "Martial",
    description: "Those that uphold chivalry and civilization itself.",
    traits: [
      "Arms and Armor: The Knight Errant starts the game with a suit of plate mail and a long sword. No knight would ever use range weapons.",
      "Code of Honor: Grants advantage on social interactions when defending the weak or promoting justice. Furthermore, they have advantage to resist mind influencing effects.",
      "Horsemanship: Masters of the saddle, Knight Errant have advantage on rolls to dealings with horses.",
      "Languages: Thyrenian and any one civilized or decadent language."
    ],
    descriptionLong: "Knight Errant are wandering knights bound by the codes of Chivalry and a thirst for adventure. They travel the land seeking to right wrongs, protect the vulnerable, and prove their worth through heroic deeds.\n\nTenets of Chivalry\nHonor & Truth: Never lie, cheat, or betray your word. A knight's honor is their most valuable asset.\nJustice & Protection: Defend the weak, uphold the law, and fight against tyranny and corruption.\nValor & Courage: Face danger without fear, stand against evil, and never retreat from a righteous battle.\nLoyalty & Duty: Serve your kingdom, faith, or cause with unwavering devotion.\nCourtesy & Respect: Treat all, even enemies, with dignity. Respect tradition, rulers, and fellow warriors.\nHumility & Sacrifice: Seek no reward beyond the honor of service. Place others before oneself.\nFaith & Devotion: Stay true to your gods or guiding principles, for they are the light in times of darkness."
  },
  mage: {
    key: "mage",
    label: "Mage",
    type: "Arte",
    description: "Those that study occult tomes and formulas to unleash magick into the world.",
    traits: [
      "Arcane Knowledge: Having studied the forbidden arts extensively, mages have advantage on rolls concerning things arcane. At any level mages can create new spells. At 10th level they can create Arcane Tokens.",
      "Arte: Arcane Magik: Mages begin the game knowing three arcane spells. They can gain new ones through boons or in game. More information is in the Magick Section.",
      "Archmage: At level 20 the mage takes on the title of Archmage and can now create Arcane Relics and Rites. See Arte Section.",
      "Languages: Thyrenian, Draconic and any other three of any origin."
    ],
    descriptionLong: "Mages are relentless seekers of the Forbidden magicks that permeate the enigmatic world of Evermore. They dedicate their lives to poring over vast, ancient libraries filled with weathered tomes of arcane knowledge, deciphering the secrets necessary to bend magick to their will. Their pursuit of power is both a deeply intellectual endeavor and a spiritual journey into the unknown, as they walk the thin line between enlightenment and peril. Around 1,000 years ago, a fragile yet enduring truce of power was forged between the mages, the priests, and the mysterious Sandmen. This uneasy alliance arose in the aftermath of a devastating conflict known as The Sovereign Wars—a cataclysmic struggle that reshaped Evermore and threatened to tear its factions apart. In the interest of survival and mutual governance, these three groups established a balance, each guarding its unique domain of influence while maintaining a precarious peace."
  },
  phenom: {
    key: "phenom",
    label: "Phenom",
    type: "Martial",
    description: "Those that stand separate and outside of the other backgrounds.",
    traits: [
      "Expanded Potential: The Phenom begins the game with an extra boon, giving them two at character creation or three if they are human.",
      "Luck: Once per day the Phenom can reroll a single roll. The phenom decides which roll to use.",
      "Languages: Thyrenian and any other two of any origin."
    ],
    descriptionLong: "Phenoms are individuals who appear ordinary at first glance, blending effortlessly into the crowd, yet they possess remarkable potential waiting to be unlocked. Beneath their unassuming exterior lies untapped talent, hidden strength, or extraordinary power. Often underestimated, Phenoms can rise to greatness in moments of challenge, proving that the most inconspicuous figures can harbor the most astounding abilities."
  },
  priest: {
    key: "priest",
    label: "Priest",
    type: "Arte",
    description: "Those that bend knee to powerful gods, demigods and godlings for power.",
    traits: [
      "Keeper of the Faith: The priest has perfect knowledge of the doctrines of their god and carry a holy symbol of their deity which does not take up gear slots. At any level priests can create new spells. At 10th level they can create Arcane Tokens.",
      "Arte: Miracles: Priests begin the game knowing three miracles. They can gain new ones through boons or in game. More information is in the Arte Section.",
      "High Priest: At 20th level the priest gains the title of High Priest and gains the ability to create Divine Relics and Rites.",
      "Languages: Thyrenian and either Celestial or Infernal."
    ],
    descriptionLong: "The gods of Evermore claim to have created—or at least to have had a hand in creating the world. Evermore was not born from divine will, but from the dreams of Gene Nolan, a mortal from Earth. The so-called gods are not creators, but beings who have attained immortality through the Divinity Virus, a strange substance that emerged from the Way Outs shortly after Evermore's formation. The Divinity Virus is central to their power, granting them eternal life and the ability to perform miraculous feats. Those who serve the gods as priests unknowingly receive the Virus through various means—via angelic intermediaries, sacred relics, or other rituals. This \"blessing\" binds them to the god they serve, allowing the deity to bestow miracles upon them as a reward—or to enact devastating punishment if their favor is lost. The gods' miracles, then, are not acts of pure divinity, but a mysterious contagion that ties their followers to them in both power and servitude."
  },
  promethean: {
    key: "promethean",
    label: "Promethean",
    type: "Arte",
    description: "Practitioners of Science, the newest magickal paradigm to come about on Evermore.",
    traits: [
      "Weird Knowledge: Prometheans are well knowledgeable about the Way Outs. For common things they might not need to roll at all. When they need to make a roll it is at advantage.",
      "Weird Science: Prometheans begin the game with their Intelligence score in Invention Points (See Magick Section). They can gain more Invention Points a week either through boons or in game.",
      "Esteemed Colleague: At 20th level the Promethean takes on the Title of Esteemed Colleague. They now have a seat on the Journal of the same name (if they want it) and can now make Astonishing Marvels, which are in fact Relics.",
      "Languages: Thyrenian, Enochian and one other of any origin."
    ],
    descriptionLong: "The newest of the Paradigm Workers to come on to the scene at Evermore, Promethean magick is Weird Science. This is not the science of the Technocrats of Earth, but that of wonderment and terror. This is the science of a Jules Vern novel or Frankenstein's Monster or even the Robot Monsters of 1950's B Movies. This science is inhabited in the forms of gadgets, complicated mathematical equations and a substance from the Way Outs called Aether which powers all promethean gadgets. These things may seem like they would be able to be used by all, but none but a promethean really understands how they work. New Theories and gadgets are created all the time by them. Most prometheans desire for other Scientists to read of their discoveries. Once every five years these new inventions and discoveries are gathered together in The Journal of Esteemed Colleagues."
  },
  psion: {
    key: "psion",
    label: "Psion",
    type: "Arte",
    description: "Those that either have blood of the True Atlanteans flowing in their veins or have come into contact with their artifacts to give them the power of psionics.",
    traits: [
      "Psionics: Psions are able to use their minds to change the world around them with an ability called psionics. The Psion begins the game with three psionic arte. They are also able to charge Psionic Crystals.",
      "Overmind: At 20th level the psion has opened his mind to the Akashic Records and is now able to create psionic Relics.",
      "Languages: Thyrenian, Enochian and one reflecting origin."
    ],
    descriptionLong: "Psions are an extraordinary and rare group of individuals gifted with psionic abilities, often stemming from a lineage tied to the enigmatic True Atlanteans or through exposure to their ancient, otherworldly technologies. Harnessing the boundless power of the mind, Psions dedicate their lives to understanding and mastering their unique talents. They frequently form tight-knit collectives known as \"Cells,\" uniting with others of their kind to sharpen their abilities and explore the vast potential of psionic power. Together, they push the limits of the mind's capabilities, forging a path into the mysteries of the psionic arts. Point of interest, when enacting psionic powers a third eye appears in the psion's forehead, perhaps referencing their aberrational origins."
  },
  rogue: {
    key: "rogue",
    label: "Rogue",
    type: "Martial",
    description: "Those that take on underhanded practices to get what they want, including assassination and stealing.",
    traits: [
      "Sneak Attack: Your first attack against an unaware target is an automatic hit that deals damage equal to your Dexterity score.",
      "Thievery: Rogues have a wide range of abilities at their disposal including: Lockpicking, Pickpocketing, Stealth, Identifying and disarming mechanical or magical traps, Forgery, Infiltration through disguise or deception. These rolls all have advantage.",
      "Tools of the Trade: Rogues have a wide range of tools to help them with their wares. From disguise kits, to lock picks and other simple, small instruments. These tools do not take up Gear Slots.",
      "Languages: Thyrenian, Silent Tongue and any one other."
    ],
    descriptionLong: "Rogues are timeless figures of cunning and adaptability, thriving in the shadows across all realms—including Evermore. Masters of subterfuge and deception, they can be thieves, assassins, street urchins, or con artists, blending seamlessly into society while pursuing hidden agendas. While some rogues may seem to possess hearts of gold, those hearts have likely been stolen, as even the kindest among them tend to act in self-interest, making trust a rare currency. Though many thieves and assassins' guilds operate within Evermore—such as The Silent Accord, The Obsidian Veil, and The Black Hand—most rogues prefer to act alone, crafting their own legacy. Agile, resourceful, and unrelenting, they navigate a dangerous world with daring charm and cold pragmatism."
  },
  sandman: {
    key: "sandman",
    label: "Sandman",
    type: "Arte",
    description: "Those who have broken the barrier between the Waken World and the Dreamlands.",
    traits: [
      "Daydreamer: The Dreamlands and the Waken World are one and the same for Sandmen. They see all things Dream that exists in the Waken World. Furthermore, they detect people, places or things that are of Dream even if it's hidden on a 4in6 roll.",
      "Dream Mask: The sandman has a dream mask, a unique mask that is a minor dream token. The sandman can summon the mask to his person no matter the circumstances. The mask doesn't take up Gear Slots.",
      "Arte: Somnium: Sandmen start the game with three Somnium and can gain more either by boons or in game.",
      "Dream Sovereign: At level 20 the sandman takes on the title of Dream Sovereign and can now create Dream Relics and Rites. See Magick Section.",
      "Languages: Thyrenian and three others of any origin."
    ],
    descriptionLong: "Sandmen are enigmatic individuals who have shattered the barriers between the waking world and the mystical Dreamlands. With their peculiar attire and eccentric behaviors, they captivate curiosity and intrigue. Each Sandman wears a distinctive Dream Mask—a minor dream token that serves as their heraldic coat of arms, symbolizing their unique connection to the realm of dreams. At the pinnacle of their order lies the Parliament of Dreams, presided over by Dream Sovereigns—Sandmen who have reached the heights of power at level 20 and beyond. These figures are both guardians and rulers of the Dreamlands, shaping its surreal landscape and navigating its boundless mysteries."
  }
};

// Origins
export const ORIGINS = {
  barbarian: {
    key: "barbarian",
    label: "Barbarian Origins",
    options: {
      "1": "...in a slave camp.",
      "2": "...on an island just before the invaders came.",
      "3": "...during your clan's last raid.",
      "4": "...in an invading army's camp before you were kidnapped.",
      "5": "...under the harsh sun, in the territory of a desert tribe.",
      "6": "...in the hut of a banished druid.",
      "7": "...in a stone circle shunned by your people.",
      "8": "...among your Pict brothers and sisters after a bloody battle.",
      "9": "...aboard a longship filled with Northern raiders.",
      "10": "...nine months after a foreign mercenary married your mother.",
      "11": "...while the rest of the Iron Horde was attacking a caravan.",
      "12": "...in a civilized kingdom, but you were traded as a hostage.",
      "13": "...in a cave network ruled by strange insectoid creatures.",
      "14": "...in a palace, soon after raided by your adoptive tribe.",
      "15": "...on the night your clan burned the Empire's capital.",
      "16": "...in a forest clearing, denounced by the druids as a dark omen.",
      "17": "...on the last ship of a seafaring clan.",
      "18": "...inside a wicker statue about to be burned.",
      "19": "...on the foreign ship bringing your family back home.",
      "20": "...in the middle of a battle against your conquerors"
    }
  },
  civilised: {
    key: "civilised",
    label: "Civilised Origins",
    options: {
      "1": "...in the city's worst slums.",
      "2": "...in the shadows of a theocracy.",
      "3": "...aboard a plague ship, somehow the only survivor.",
      "4": "...in a bustling mining town.",
      "5": "...during an expedition searching for a mythical city.",
      "6": "...on the street, as your family was fleeing revolutionary forces.",
      "7": "...in a foreign land after your parents' ship got wrecked.",
      "8": "...inside an invocation pentacle, near the sorcerer's body.",
      "9": "...on the prison island where the monarch's political opponents are sent.",
      "10": "...on the day the king was beheaded by your father.",
      "11": "...aboard a ship sent to find a new maritime route.",
      "12": "...in a military academy where your parents were teaching.",
      "13": "...in a fortress later burned by your family's enemies.",
      "14": "...in the biggest mansion of the city's merchant quarter.",
      "15": "...in the middle of a mercenary camp.",
      "16": "...in a secluded religious community.",
      "17": "...in the dilapidated manor of your ruined family.",
      "18": "...in an isolated farm on the frontier.",
      "19": "...in the richest palace of the Caliphate.",
      "20": "...in a hideout for the assassin's guild."
    }
  },
  decadent: {
    key: "decadent",
    label: "Decadent Origins",
    options: {
      "1": "...in a jeweled tower, symbol of a corrupt empire.",
      "2": "...in the barracks of the slave soldiers.",
      "3": "...in a disreputable house of infulgence of the City of Thieves.",
      "4": "...in the poppy fields owned by the Court's greatest sorcerer.",
      "5": "...in the necropolis where you were raised by ghosts.",
      "6": "...in a museum, as part of the permanent exhibition.",
      "7": "...in the ruins of a crystal palace.",
      "8": "...inside a monstrous creature killed by your adoptive parents.",
      "9": "...as a vessel for the soul of a dying noble. The ritual failed.",
      "10": "...in the last city of a dying species.",
      "11": "...covered with the blood of your own people after a failed invocation.",
      "12": "...in the arena's champion quarters.",
      "13": "...in the servants quarters of a vampire's tower.",
      "14": "...below the Empress's palace, among her slaves.",
      "15": "...in the desiccated gardens of a dying desert city.",
      "16": "...on a tropical island, just as it was beginning to sink.",
      "17": "...in an asylum deep within the Forbidden City.",
      "18": "...in the laboratory of the alchemist you called Father.",
      "19": "...at the top of a pyramid of red obsidian.",
      "20": "...in a hurricane summoned by your mother."
    }
  }
};

// Item types and their default properties
export const ITEM_TYPES = {
  weapon: {
    name: "Weapon",
    defaults: {
      damage: "1d6",
      weight: 1,
      properties: ""
    }
  },
  armor: {
    name: "Armor",
    defaults: {
      armorClass: 10,
      weight: 2,
      properties: ""
    }
  }
};