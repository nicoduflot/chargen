/* raccourcis de fonctionnement généraux au site */

/* attendre le chargement de la page */
function loaded(callable) {
    window.addEventListener('DOMContentLoaded', callable);
}

/* querySelector */
function qS(selector) {
    return document.querySelector(selector);
}

/* querySelectorAll */
function qSAll(selector) {
    return document.querySelectorAll(selector);
}

/* création de cookie */
/**
 * @param {string} name
 * @param {string} value
 * @param {number} days
 */
 function setCookie(name, value = '', days = -1) {
    let maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; Samesite=Strict; Secure`;
}

/* récupérer un cookie s'il existe */
/**
 * @param {string} name 
 */
function getCookie(name) {
    let tabCookie = document.cookie.split('; ');
    //console.log(tabCookie);
    for (cookie of tabCookie) {
        let tabValue = cookie.split('=');
        //console.log(tabValue);
        if (tabValue[0] === name) {
            return tabValue[1];
        }
    }
}

function deleteCookie(cname) {
  //document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
  setCookie(cname);
}

/**
 * 
 * Création d'éléments dans le dom
 * 
 */

 function cEO(element, attributes = {}) {
    let newElement = document.createElement(element);
    for (let key in attributes) {
        newElement.setAttribute(key, attributes[key]);
    }
    return newElement;
}

function cTxtNod(text){
	let textNode = document.createTextNode(text);
	return textNode;
}


function testCookieSettled(){
	
	let ethnie = getCookie("ethnie");
	let archetype = getCookie("archetype");
	let genre = getCookie("genre");
	let heroName = getCookie("charName");
	setCookie("corps", 4);
    setCookie("esprit", 4);
    setCookie("mouvement", 6);
	let pvChar = getCookie("pvChar");
	let manaChar = getCookie("manaChar");
	let dgCac = getCookie("dgCac");
	let dgDist = getCookie("dgDist");
	let ko = getCookie("ko");
	let nbActions = getCookie("nbActions");
	let nomArmes = getCookie("nomArmes");
	let degatArme = getCookie("degatArme");
	let sacPerso = getCookie("sacPerso");
	let listeSorts = getCookie("listeSorts");
	let ethnieChart = getCookie("ethnieChart");
	console.log(ethnie);
	console.log(archetype);
	console.log(genre);
	console.log(heroName);
	console.log(manaChar);
	console.log(dgCac);
	console.log(dgDist);
	console.log(ko);
	console.log(nbActions);
	console.log(nomArmes);
	console.log(degatArme);
	console.log(sacPerso);
	console.log(listeSorts);
	console.log(ethnieChart);
}


function r(x) {
	return Math.floor(Math.random() * x) + 1
}

function selectRandom8709() {
	// Adventurer Count
	var FtNum = 0
	var SpNum = 0
	var MuNum = 0
	var ClNum = 0

	//D4 Animals
	var d4 = r(4);
	var HorseNum = r(d4 - 1);
	var DogNum = d4 - HorseNum;

	var HorseOut = "";
	if (HorseNum > 0) HorseOut += HorseNum + " horse" + (HorseNum > 1 ? "s" : "");
	var DogOut = "";
	if (DogNum > 0) DogOut += DogNum + " dog" + (DogNum > 1 ? "s" : "");

	var AnimalOut = "";
	if (HorseNum > 0 && DogNum > 0) {
	AnimalOut += "The party has brought " + HorseOut + " and " + DogOut + ".";
	} else if (HorseNum = 0 && DogNum > 0) {
	AnimalOut += "The party has brought " + DogOut + ".";
	} else if (HorseNum > 0 && DogNum == 0) {
	AnimalOut += "The party has brought " + HorseOut + ".";
	} else if (HorseNum == 0 && DogNum == 0) {
	AnimalOut += "The party has brought no animals."
	}
	document.getElementById('outputTextAnimals').innerHTML = AnimalOut;

	//D6 Fighters

	var d6 = r(6);
	FtNum += d6;
	var FtOut = "Fighters: " + FtNum;
	document.getElementById('outputTextFt').innerHTML = FtOut;

	// D8 Average party level
	var d8 = r(8);
	var AvgLvNum = d8;
	var AvgLvOut = "The average party level is " + AvgLvNum + ".";
	document.getElementById('outputTextAvgLv').innerHTML = AvgLvOut;

	//D10 Motive
	var d10 = r(10)-1
	var motive = [
	"Aimless treasure hunting.",
	"Escorting a pregnant patron in search of Amazons willing to help terminate the pregnancy.",
	"They are bounty hunters looking for a fugitive.",
	"They are fugitives hiding from the law.",
	"Seeking a specific storied magic item.",
	"Seeking to rob Amazon tribes.",
	"Scientific/geographic expedition.",
	"Tracking a lost merchant caravan.",
	"Hunting a werewolf or other creature to its lair.",
	"They are lost."
	];
	var MotiveOut = motive[d10];
	document.getElementById('outputTextMotive').innerHTML = MotiveOut;

	// D12 Additional Members
	var d12 = r(12)
	switch (d12) {
		case 1:
		MuNum += 1;
		break;
		case 2:
		SpNum += 1;
		break;
		case 3:
		ClNum += 1;
		break;
		case 4:
		SpNum += 2;
		break;
		case 5:
		SpNum += 2;
		break;
		case 6:
		SpNum += 2;
		break;
		case 7:
		SpNum += 2;
		break;
		case 8:
		MuNum += 2;
		break;
		case 9:
		SpNum += 1;
		MuNum += 1;
		break;
		case 10:
		SpNum += 1;
		MuNum += 1;
		break;
		case 11:
		SpNum += 1;
		MuNum += 1;
		ClNum += 1;
		break;
		case 12:
		SpNum += 2;
		MuNum += 1;
		break;
	}

	var SpOut = "Specialists: " + SpNum;
	var MuOut = "Magic-Users: " + MuNum;
	var ClOut = "Clerics: " + ClNum;
	document.getElementById('outputTextSp').innerHTML = SpOut;
	document.getElementById('outputTextMu').innerHTML = MuOut;
	document.getElementById('outputTextCl').innerHTML = ClOut;

	//D20 Quirk
	var d20 = r(20)-1;
	var quirk = [
	"True reason for expedition is known only to leader (roll another d20).",
	"They have a useful magic item.",
	"One wants to collect a bounty on one of the PCs for some crime.",
	"Will attempt to befriend and then betray PCs.",
	"Internal divisions: one half of the party plots against the other.",
	"They are hallucinating wildly after a run-in with The Thirteen.",
	"They have recently escaped some Amazons and are at half hp.",
	"d4 of them are werewolves.",
	"They are infected with Worm Rot.",
	"They have a snow leopard in a cage they hope to return to civilization for a reward.",
	"They carry gems worth their weight in silver.",
	"They carry a box which contains a demon.",
	"They are out of food.",
	"They have d6 random Witch spells on scrolls .",
	"One member believes they carry a demon child and they hope to have it aborted.",
	"They are all female and hope to join the Amazons.",
	"They are being harried by a group of Pearlholders that outnumbers them by d4.",
	"They have a map to the Dim Fortress.",
	"One is a disguised member of the Cold Banner.",
	"They carry crates of trade goods that're worth 3500sp if they can be taken back to civilization."
	];
	var QuirkOut = quirk[d20];
	document.getElementById('outputTextQuirk').innerHTML = QuirkOut;
}

function FaM135Gen() {
	var d20 = r(20);

	var d20Src = ""
	switch (d20) {
		case 1:
			d20Src += "img/4XHYFS0.png";
			break;
		case 2:
			d20Src += "img/UbRVQIk.png";
			break;
		case 3:
			d20Src += "img/zjxj9Qv.png";
			break;
		case 4:
			d20Src += "img/l53p5EY.png";
			break;
		case 5:
			d20Src += "img/mdlCkAR.png";
			break;
		case 6:
			d20Src += "img/9BufDml.png";
			break;
		case 7:
			d20Src += "img/KHFH1yd.png";
			break;
		case 8:
			d20Src += "img/Pv24vk2.png";
			break;
		case 9:
			d20Src += "img/GV2j2hN.png";
			break;
		case 10:
			d20Src += "img/mjLllz0.png";
			break;
		case 11:
			d20Src += "img/4lzXijj.png";
			break;
		case 12:
			d20Src += "img/FEiiMi0.png";
			break;
		case 13:
			d20Src += "img/FHpFP6z.png";
			break;
		case 14:
			d20Src += "img/mDUFStu.png";
			break;
		case 15:
			d20Src += "img/bPQipNP.png";
			break;
		case 16:
			d20Src += "img/q1aNCwC.png";
			break;
		case 17:
			d20Src += "img/K5X0lgE.png";
			break;
		case 18:
			d20Src += "img/IiIvhl7.png";
			break;
		case 19:
			d20Src += "img/StJK2Hk.png";
			break;
		case 20:
			d20Src += "img/e8U2woR.png";
			break;
		default:
			d20Src +="img/sALYh0A.png";
			break;
	}

	document.getElementById('FaM135Image').src = d20Src;
}


function selectRandomIMD(){
	var thing =
	["skull","body","femur","preserved heart","hand","blood ","whip","chains","cloak","crown of thorns","rosary","sword","rib","tongue","eye","sword","grail","shroud","spear","journal"];

	var person=
	["Aurelius","Constantina","Elric","Gertrude","Junipero","Justina","Stanislaus","Theoclia","Vincent","Vornheimia","Wenceslaus","Xenia","Belisarius","Theodosia","Frederick","Bernardette","Beric","Therese","Ludwig","Saturnina"];

	var does=
	["<b>glows in the proximity of undead.</b>","<b>makes the bearer untouchable by the undead.</b>","<b>can store sunlight and then release it when sprinkled with holy water.</b>","<b>makes the bearer immune to disease.</b>","<b>heals anyone who touches it a number of hit points equal to a roll of one of their hit die 1/day.</b>","<b>can cure any disease from a person 1/week.</b>","<b>makes the bearer immune to mind-affecting effects.</b>","<b>allows the bearer to re-roll a saving throw 1/day.</b>","<b>enables the bearer to detect any lie they hear.</b>","<b>imbues the bearer with holy might. Gives a +2 bonus to attack rolls and damage 1 for minute/ day.</b>","<b>allows the bearer to call 1d6 forth pillars of holy fire from the sky &#160;1/ day. They are shaped like cylinders with 100&#8217; height and 10&#8217; diameter, and deal 1d6 damage per character level.</b>","<b>can automatically destroy every and any undead within 30 ft <i>once</i> (ever).</b>","<b>allows the bearer to see through illusions.</b>","<b>allows the bearer to last five times as long without food, water or rest.</b>","<b>allows the bearer to survive lethal blows 1/ day. If an attack would bring them to 0 HP they instead survive with 1 HP.</b>","<b>allows the bearer to speak with animals.</b>","<b>can return a recently dead person to life <i>once</i> (ever). The target must have been dead for no longer than one week.</b>","<b>grants the bearer divine visions. May ask a yes or no question to the GM 1/ day, and they must answer to the best of their ability.</b>","<b>makes stigmata appear on the bearer&#8217;s hands and feet. Allies within 30&#8217; who share the bearer&#8217;s faith gain a +2 bonus on attack rolls and saves.</b>","<b>gives the bearer understanding of all languages.</b>"];

	document.getElementById('outputTextIMD').innerHTML = "The "+thing[r(20)]+" of Saint "+person[r(20)]+", which "+does[r(19)];
}

function CargueroGen() {

    var Step1 = [
      "transport illegal cargo to a trade system",
      "escort a diplomat who is mediating between two warring systems",
      "search for the child of a wealthy trader, lost in an overcrowded space station",
      "transport several alien spaces to a military lab",
      "rescue a family of settlers from a far-away hostile system",
      "tow a ship to a scrapyard to be dismantled",
      "transport a droid carrying classified information",
      "carry supplies for an under-construction military space station",
      "set up a new trade route to an unexplored system",
      "pick up a cargo of minerals from a mine in a large asteroid"
    ];

    var Step2 = [
      "your freighter breaks down and the nearest replacement is in",
      "customs control forces you to divert from the original route and stumble upon",
      "you detect a weak and desperate S.O.S. signal coming from",
      "you are boarded by space pirates based in",
      "lack of fuel forces you to make a stop at",
      "a crew member sabotages the navigation system and takes an escape pod towards",
      "a colossal ship swallows your freighter and carries you to",
      "a strange and lethal virus infects the whole crew. The cure is in",
      "a cosmic storm affects your navigation system and diverts you to",
      "a hostile A.I. infects your ship to attract you towards"
    ];

    var Step3 = [
      "a system inhabited by dangerous alien creatures.",
      "a mysterious space station that looks abandoned.",
      "a fortress-ship orbiting a moon.",
      "an asteroid belt inhabited by giant space worms.",
      "the headquarters of a powerful trade conglomerate.",
      "floatsam of a gargantuan ship, inhabited by refugees.",
      "a technologically advanced ring-shaped world.",
      "a high-security prison ship taken over by the inmates.",
      "a system dangerously close to a black hole.",
      "a system full of space junk and the remains of old ships."
    ];
    document.getElementById("SoltarianoOut").innerHTML = "You have been hired to " + Step1[r(10)] + ", but " + Step2[r(10)] + " " + Step3[r(10)];
  }

  var CargueroSwitch = 0

  function CargueroLevel() {
    if (CargueroSwitch == 0) {
      document.getElementById("CargueroImg").src = "img/VZ69Oqn.png";
      CargueroSwitch = 1;
    } else {
      document.getElementById("CargueroImg").src = "img/yhWELzJ.png";
      CargueroSwitch = 0;
    }
  }

function FaMAmznNameGen() {
    var NounSingular = ["Algor","Annihilation","The Apparition","The Arrow","The Axe","The Bear","The Beast","Bedlam","The Blade","Blasphemy","The Blight","The Blizzard","Bloodshed","Carnage","Carrion","The Chain","Chaos","The Claw","Corruption","Death","Deception","Demolition","The Demon","Desolation","Destruction","Devastation","The Devil","Doom","The End","The Fang","Fire","Flame","The Flayer","Frost","The She-Goat","The Gorgon","The Hammer","Hate","Hatred","Havoc","The Hellion","Heresy","The Hunter","Ice","Impiety","The Knife","Laceration","Massacre","Mayhem","The Medusa","Misfortune","The Moon","The Motherfucker","Mutilation","The Night","Nightmare","Oblivion","Obscurity","Onslaught","Pain","Rampage","The Raven","Repugnance","Retribution","Riot","Ruination","Rust","Sacrilege","Savagery","Scorn","The Scream","The Serpent","Shadow","Silence","Sin","The Skull","Slaughter","The Snake","Snow","Sorrow","The Spear","The Succubus","The Sword","Terror","The Thorn","Thunder","Torment","Turmoil","Twilight","Uprising","Vengeance","Venom","The Vermin","Vice","The Void","The Vulture","War","Winter","The Wolf","The Wyrm"];
    var NounPlural = ["Algor","Annihilation","Apparitions","Arrows","Axes","Bears","Beasts","Bedlam","Blades","Blasphemy","Blight","Blizzards","Bloodshed","Carnage","Carrion","Chains","Chaos","Claws","Corruption","Death","Deception","Demolition","Demons","Desolation","Destruction","Devastation","Devils","Doom","End","Fangs","Fire","Flames","Flayers","Frost","She-Goats","Gorgons","Hammers","Hate","Hatred","Havoc","Hellions","Heresy","Hunters","Ice","Impiety","Knives","Laceration","Massacre","Mayhem","Medusas","Misfortune","Moons","Motherfuckers","Mutilation","Night","Nightmares","Oblivion","Obscurity","Onslaught","Pain","Rampage","Ravens","Repugnance","Retribution","Riot","Ruination","Rust","Sacrilege","Savagery","Scorn","Scream","Serpents","Shadows","Silence","Sin","Skulls","Slaughter","Snakes","Snow","Sorrow","Spears","Succubi","Swords","Terrors","Thorns","Thunder","Torment","Turmoil","Twilight","Uprising","Vengeance","Venom","Vermin","Vice","Void","Vultures","War","Winter","Wolves","Wyrms"];
    var Descriptor = ["Abominable","Angry","Atrocious","Avenging","Bear's","Beast's","Black","Blasphemous","Bleak","Bloodthirsty","Brutal","Cerulean","Chaotic","Cinnabar","Clawed","Cobalt","Crimson","Cruel","Deceitful","Deicidal","Demon's","Devil's","Drowned","Ebony","Eternal","Execrable","Ferocious","Fiendish","Flaying","Forsaken","Funeral","Gelid","Goat's","Gorgon's","Grey","Grim","Heretical","Horned","Hositle","Impious","Inclement","Indigo","Iron","Killing","Lascerating","Malevolent","Marauding","Medusa's","Merciless","Motherfucking","Murderous","Nefarious","Obscure","Obsidian","Odious","Orchid","Perpetual","Primordial","Prismatic","Profane","Rampaging","Ravaging","Raven's","Red","Relentless","Repugnant","Repulsive","Revenant","Sadistic","Savage","Scarred","Scornful","Screaming","Serpent's","Sinister","Skullcracking","Slaying","Snake's","Succubus'","Trve","Turbulent","Undying","Unhallowed","Unholy","Unremorseful","Unscarred","Vengeful","Vermin's","Vicious","Vile","Violent","Vulture's","Whispering","White","Wicked","Wolf's","Wrathful","Wrecking","Wyrm's","Yellow"];
    var NounIndex = ["2","4","5","6","8","10","11","12","14","15","16","18","20","22","23","25","26","28","30","33","34","35","37","38","39","40","41","42","45","48","51","52","53","56","58","59","62","63","64","65","66","67","70","71","72","77","78","81","82","83","84","85","87","89","90","91","92","93","96","98","103","105","108","110","111","112","113","114","116","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","137","138","139","145","146","147","148","151","152","153","157","158","161"];
    var DescriptorIndex= ["1","3","7","9","10","11","13","15","17","19","21","24","26","27","28","29","31","32","34","36","37","41","43","44","46","47","49","50","53","54","55","57","58","59","60","61","62","69","68","72","73","74","75","76","78","79","80","83","86","87","88","90","93","94","95","97","99","100","101","102","103","104","105","106","107","108","109","110","115","116","117","118","119","120","123","124","125","126","130","136","137","140","141","142","143","144","145","147","148","149","150","152","154","155","156","158","159","160","161","162"];

    var NounD100=r(100)
    var DescriptorD100=r(100)

    while (NounIndex[NounD100]==DescriptorIndex[DescriptorD100]) {
        var DescriptorD100=r(100)
    }
    
    var AmznNameList = [
        "The Sisters of " + NounSingular[NounD100],
        "The Sisters ov " + NounSingular[NounD100],
        "The Daughters of " + NounSingular[NounD100],
        "The Daughters ov " + NounSingular[NounD100],
        "The Spawn of " + NounSingular[NounD100],
        "The Spawn ov " + NounSingular[NounD100],
        "They Who Bring " + NounSingular[NounD100],
        "Those Touched by " + NounSingular[NounD100],
        "The " + Descriptor[DescriptorD100] + " Sisters",
        "The " + Descriptor[DescriptorD100] + " Sisterhood",
        "The " + Descriptor[DescriptorD100]+" Ones",
        "The " + Descriptor[DescriptorD100] + " " + NounPlural[NounD100]
        ];

        document.getElementById("FaMAmznNames").innerHTML = AmznNameList[r(12)];

}

/*******/

// Generates Amazon Tribe Features (F&M p.130)

  function FaM130Gen() {

    var d10 = r(10)
    var IdentFeat = [
      "They each have trained eagles or other animals.",
      "They use a strange bluish pigment in war that grants them +2 to hit and -2 to Int for ten minutes.",
      "They wear the skins of their forebears. Each Amazon must grow fat in their dotage so that the next generation may wear suits made from their skins and hide inside",
      "Piercings incorporating the teeth of foes slain.",
      "They wear garish and mismatching patterns from many animals.",
      "Wild hair, filled with small knives.",
      "By bathing in honeys and unguents they are surrounded by halos of stinging and crawling things, harmless to them.",
      "Their only clothes are the bones of those they've slain. So: new and untested Amazons have no clothes upon them because they never killed anyone and the",
      "Their hierarchy has a color code. Different ranks dye their hair different colors.",
      "Due to a genetic irregularity or ancient curse they are all twins"
    ];

    var d10 = r(10)
    var Beliefs = [
      "They don't believe in killing animals because they're innocent. Got no problem killing people though.",
      "They believe the soul is contained in the right foot and will evince an unhealthy obsession with severing a foe's right foot, to the exclusion of all other hit locations.",
      "They hate food and the eating of food. Publicly. In secret they all eat food (of course) and like it but in company they pretend they don't. It's weird.",
      "They refuse to speak.",
      "They believe they must remain hidden and undescribed, so they pluck out the eyes of any outsider they see.",
      "They believe it is blasphemous to use anything that is not stolen. Their equipment, homes, mounts and mates are all stolen.",
      "They believe that if they are defeated by anyone they'll be owned by them in the afterlife. Will always fight to the death&#8212;Morale 12.",
      "They refuse to kill women but will attempt to capture and convert them.",
      "They believe animals are wiser than men and swarm around any foe their warbeasts attack.",
      "They believe that heaven is contained inside an anonymous rock hidden somewhere in the Devoured Land. They search for it."
    ];

    var d20 = r(20)
    var Totem = [
      "Their totem is the locust. They gibber and swarm.",
      "Their totem is the troll. They revel in ignorance.",
      "Their totem is the jackal. They belong to treachery.",
      "Their totem is the eel. They are patient, they are swift.",
      "Their totem is the crow. They seek gold and the gleaming.",
      "Their totem is the stag. They are proud and drink from rivers.",
      "Their totem is the hog. They wallow and they wail.",
      "Their totem is the spider. They are old and wise.",
      "Their totem is a nine-pound hammer. They bash and bruise and boast.",
      "Their totem is the scorpion. They live in solitude and strike in secret.",
      "Their totem is the toad. Their lives are moist and dull.",
      "Their totem is the centipede. They form a long lean line.",
      "Their totem is a basking lizard. They dine on dogs and wine.",
      "Their totem is a newt. They come from another time.",
      "Their totem is a broken shackle. They were once a lower caste.",
      "Their totem is the whiteblack leopard. They move in darkness.",
      "Their totem is the dog. They harry and howl.",
      "Their totem is the rat. They speak in whispers.",
      "Their totem is the salamander. They will burn you.",
      "Their totem is the bear. There are no children among them."
    ];

    var d10 = r(10)
    var ObjRev = [
      "a misshapen tree with unusual properties.",
      "goat butter. A mound of it.",
      "blood of many foes. In a great urn.",
      "a sacred child or invalid.",
      "the clothes once worn by a fallen leader.",
      "a pitchfork.",
      "the scales of a great white dragon.",
      "the night, silence, quiet, stillness and stone.",
      "a fat, four-footed weasel carved of lard, smothered in beets.",
      "severed fingers, kept in cloths."
    ];

    var d10 = r(10)
    var Leader = [
      "an alchemist, who concocts powerful acids.",
      "belligerent, bony, bedecked with baubles. Surrounded by bats.",
      "a crooked crone, a maker of candles.",
      "a witch, served by a demon.",
      "an enigmatic, laconic and largely sessile veteran, borne on a palanquin.",
      "a fat flagellant.",
      "a preening diva, fond of elaborate dress and wild spectacle.",
      "a scholar of war with a great library.",
      "an inquisitive and generous woman, eager for knowledge of the outside world's designs on her territory.",
      "an ambitious child of 12."
    ];

    var d10 = r(10)
    var LeaderDet = [
      "She is hideous and clothed in shadow.",
      "She has worms in her head.",
      "She has a hump like a camel, filled with jewels.",
      "She owes a PC a single favor.",
      "She is subtle and sophisticated, and has secret dealings with women of the cities.",
      "She is half troll.",
      "She hopes to wage war against the moon.",
      "She is a contortionist and able to twist her body into the shapes of the 32 symbols of The Divine.",
      "She is drunk and silly but has a voice like an avalanche.",
      "She is a schemer, secretly at the center of all events in the campaign."
    ];

    document.getElementById('FaM130Out').innerHTML = IdentFeat[r(10)] + "<br /><br />" + Beliefs[r(10)] + "<br /><br />" + Totem[r(20)] + "<br /><br />" + "They revere " + ObjRev[r(10)] + "<br /><br />" + "Their leader is " + Leader[r(10)] + " " + LeaderDet[r(10)]

    //Generates Amazon Tribe Name

    var NounSingular = ["Algor","Annihilation","The Apparition","The Arrow","The Axe","The Bear","The Beast","Bedlam","The Blade","Blasphemy","The Blight","The Blizzard","Bloodshed","Carnage","Carrion","The Chain","Chaos","The Claw","Corruption","Death","Deception","Demolition","The Demon","Desolation","Destruction","Devastation","The Devil","Doom","The End","The Fang","Fire","Flame","The Flayer","Frost","The She-Goat","The Gorgon","The Hammer","Hate","Hatred","Havoc","The Hellion","Heresy","The Hunter","Ice","Impiety","The Knife","Laceration","Massacre","Mayhem","The Medusa","Misfortune","The Moon","The Motherfucker","Mutilation","The Night","Nightmare","Oblivion","Obscurity","Onslaught","Pain","Rampage","The Raven","Repugnance","Retribution","Riot","Ruination","Rust","Sacrilege","Savagery","Scorn","The Scream","The Serpent","Shadow","Silence","Sin","The Skull","Slaughter","The Snake","Snow","Sorrow","The Spear","The Succubus","The Sword","Terror","The Thorn","Thunder","Torment","Turmoil","Twilight","Uprising","Vengeance","Venom","The Vermin","Vice","The Void","The Vulture","War","Winter","The Wolf","The Wyrm"];
    var NounPlural = ["Algor","Annihilation","Apparitions","Arrows","Axes","Bears","Beasts","Bedlam","Blades","Blasphemy","Blight","Blizzards","Bloodshed","Carnage","Carrion","Chains","Chaos","Claws","Corruption","Death","Deception","Demolition","Demons","Desolation","Destruction","Devastation","Devils","Doom","End","Fangs","Fire","Flames","Flayers","Frost","She-Goats","Gorgons","Hammers","Hate","Hatred","Havoc","Hellions","Heresy","Hunters","Ice","Impiety","Knives","Laceration","Massacre","Mayhem","Medusas","Misfortune","Moons","Motherfuckers","Mutilation","Night","Nightmares","Oblivion","Obscurity","Onslaught","Pain","Rampage","Ravens","Repugnance","Retribution","Riot","Ruination","Rust","Sacrilege","Savagery","Scorn","Scream","Serpents","Shadows","Silence","Sin","Skulls","Slaughter","Snakes","Snow","Sorrow","Spears","Succubi","Swords","Terrors","Thorns","Thunder","Torment","Turmoil","Twilight","Uprising","Vengeance","Venom","Vermin","Vice","Void","Vultures","War","Winter","Wolves","Wyrms"];
    var Descriptor = ["Abominable","Angry","Atrocious","Avenging","Ursine","Bestial","Black","Blasphemous","Bleak","Bloodthirsty","Brutal","Cerulean","Chaotic","Cinnabar","Clawed","Cobalt","Crimson","Cruel","Deceitful","Deicidal","Demonic","Devilish","Drowned","Ebony","Eternal","Execrable","Ferocious","Fiendish","Flaying","Forsaken","Funeral","Gelid","She-Goat's","Gorgonic","Grey","Grim","Heretical","Horned","Hositle","Impious","Inclement","Indigo","Iron","Killing","Lascerating","Malevolent","Marauding","Medusa's","Merciless","Motherfucking","Murderous","Nefarious","Obscure","Obsidian","Odious","Orchid","Perpetual","Primordial","Prismatic","Profane","Rampaging","Ravaging","Ravenly","Red","Relentless","Repugnant","Repulsive","Revenant","Sadistic","Savage","Scarred","Scornful","Screaming","Serpentine","Sinister","Skullcracking","Slaying","Snakelike","Succubus'","Trve","Turbulent","Undying","Unhallowed","Unholy","Unremorseful","Unscarred","Vengeful","Vermin","Vicious","Vile","Violent","Vulturous","Whispering","White","Wicked","Wolven","Wrathful","Wrecking","Wyrm's","Yellow"];
 var NounIndex = ["2","4","5","6","8","10","11","12","14","15","16","18","20","22","23","25","26","28","30","33","34","35","37","38","39","40","41","42","45","48","51","52","53","56","58","59","62","63","64","65","66","67","70","71","72","77","78","81","82","83","84","85","87","89","90","91","92","93","96","98","103","105","108","110","111","112","113","114","116","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","137","138","139","145","146","147","148","151","152","153","157","158","161"];
 var DescriptorIndex= ["1","3","7","9","10","11","13","15","17","19","21","24","26","27","28","29","31","32","34","36","37","41","43","44","46","47","49","50","53","54","55","57","58","59","60","61","62","69","68","72","73","74","75","76","78","79","80","83","86","87","88","90","93","94","95","97","99","100","101","102","103","104","105","106","107","108","109","110","115","116","117","118","119","120","123","124","125","126","130","136","137","140","141","142","143","144","145","147","148","149","150","152","154","155","156","158","159","160","161","162"];
 
 var NounD100=r(100)
 var DescriptorD100=r(100)

 while (NounIndex[NounD100]==DescriptorIndex[DescriptorD100]) {
  var DescriptorD100=r(100)
 }
 
    var AmznNameList = [
        "The Sisters of " + NounSingular[NounD100],
        "The Sisters ov " + NounSingular[NounD100],
        "The Daughters of " + NounSingular[NounD100],
        "The Daughters ov " + NounSingular[NounD100],
        "The Spawn of " + NounSingular[NounD100],
        "The Spawn ov " + NounSingular[NounD100],
        "They Who Bring " + NounSingular[NounD100],
  "Those Touched by " + NounSingular[NounD100],
        "The " + Descriptor[DescriptorD100] + " Sisters",
        "The " + Descriptor[DescriptorD100] + " Sisterhood",
  "The " + Descriptor[DescriptorD100]+" Ones",
        "The " + Descriptor[DescriptorD100] + " " + NounPlural[NounD100]
      ];

  document.getElementById("FaMAmznNames").innerHTML = AmznNameList[r(12)];

  }

/*** at the distance you can see ***/

function FaM126Gen() {
  var icon_mountains_x=r(250);
  var icon_mountains_y=r(250);
  var icon_mountains_output="position: absolute; left: "+icon_mountains_x+"px; top: "+icon_mountains_y+"px;";

  var icon_ruins_x=r(250);
  var icon_ruins_y=r(250);
  while (Math.abs(icon_ruins_x-icon_mountains_x)<25) {
	var icon_ruins_x=r(250);
  }
  while (Math.abs(icon_ruins_y-icon_mountains_y)<25) {
	var icon_ruins_y=r(250);
  }
  var icon_ruins_output="position: absolute; left: "+icon_ruins_x+"px; top: "+icon_ruins_y+"px;";

  var icon_structures_x=r(250);
  var icon_structures_y=r(250);
  while (Math.abs(icon_structures_x-icon_mountains_x)<25 || Math.abs(icon_structures_x-icon_ruins_x)<25) {
	var icon_structures_x=r(250);
  }
  while (Math.abs(icon_structures_y-icon_mountains_y)<25 || Math.abs(icon_structures_y-icon_ruins_y)<25) {
	var icon_structures_y=r(250);
  }
  var icon_structures_output="position: absolute; left: "+icon_structures_x+"px; top: "+icon_structures_y+"px;";

  var icon_water_x=r(250);
  var icon_water_y=r(250);
  while (Math.abs(icon_water_x-icon_mountains_x)<25 || Math.abs(icon_water_x-icon_ruins_x)<25 || Math.abs(icon_water_x-icon_structures_x)<25) {
	var icon_water_x=r(250);
  }
  while (Math.abs(icon_water_y-icon_mountains_y)<25 || Math.abs(icon_water_y-icon_ruins_y)<25 || Math.abs(icon_water_y-icon_structures_y)<25) {
	var icon_water_y=r(250);
  }
  var icon_water_output="position: absolute; left: "+icon_water_x+"px; top: "+icon_water_y+"px;";

  var icon_encampments_x=r(250);
  var icon_encampments_y=r(250);
  while (Math.abs(icon_encampments_x-icon_mountains_x)<25 || Math.abs(icon_encampments_x-icon_ruins_x)<25 || Math.abs(icon_encampments_x-icon_structures_x)<25 || Math.abs(icon_encampments_x-icon_water_x)<25) {
	var icon_encampments_x=r(250);
  }
  while (Math.abs(icon_encampments_y-icon_mountains_y)<25 || Math.abs(icon_encampments_y-icon_ruins_y)<25 || Math.abs(icon_encampments_y-icon_structures_y)<25 || Math.abs(icon_encampments_y-icon_water_y)<25) {
	var icon_encampments_y=r(250);
  }
  var icon_encampments_output="position: absolute; left: "+icon_encampments_x+"px; top: "+icon_encampments_y+"px;";

  var icon_unusual_x=r(250);
  var icon_unusual_y=r(250);
  while (Math.abs(icon_unusual_x-icon_mountains_x)<25 || Math.abs(icon_unusual_x-icon_ruins_x)<25 || Math.abs(icon_unusual_x-icon_structures_x)<25 || Math.abs(icon_unusual_x-icon_water_x)<25 || Math.abs(icon_unusual_x-icon_encampments_x)<25) {
	var icon_unusual_x=r(250);
  }
  while (Math.abs(icon_unusual_y-icon_mountains_y)<25 || Math.abs(icon_unusual_y-icon_ruins_y)<25 || Math.abs(icon_unusual_y-icon_structures_y)<25 || Math.abs(icon_unusual_y-icon_water_y)<25 || Math.abs(icon_unusual_y-icon_encampments_y)<25) {
	var icon_unusual_y=r(250);
  }
  var icon_unusual_output="position: absolute; left: "+icon_unusual_x+"px; top: "+icon_unusual_y+"px;";

  document.getElementById("icon-mountains").style.cssText=icon_mountains_output;
  document.getElementById("icon-ruins").style.cssText=icon_ruins_output;
  document.getElementById("icon-structures").style.cssText=icon_structures_output;
  document.getElementById("icon-water").style.cssText=icon_water_output;
  document.getElementById("icon-encampments").style.cssText=icon_encampments_output;
  document.getElementById("icon-unusual").style.cssText=icon_unusual_output;

  var array_mountains=[
	"Isolated peak (not part of a range).",
	"High point of a range running east-west.",
	"High point of a range running north-south.",
	"Peak has another feature on top:"
  ];
  var array_ruins=[
	"Village.",
	"Fortress/Castle.",
	"Church.",
	"Farm.",
	"Watchtower or Bridge.",
	"Inn"
  ];
  var array_structures=[
	"Hut or house.",
	"Fortress.",
	"Pearlholder church.",
	"Watchtower.",
	"Cave.",
	"Bridge.",
	"Graveyard.",
	"Clearing."
  ];
  var array_water=[
	"River.",
	"River with island.",
	"River with waterfall.",
	"Pond.",
	"Fen or bog.",
	"Creek.",
	"Edge of a huge lake spanning multiple areas.",
	"Lake.",
	"Lake with an island in it.",
	"Lake with waterfall."
  ];
  var array_encampments=[
	"Frostbitten Moons.",
	"Maggot Sisters.",
	"Ulvenbrigad.",
	"Other Amazons.",
	"Hunters.",
	"Wolves.",
	"Deer.",
	"Pearlholders.",
	"Merchant caravan.",
	"NPC party.",
	"Mercenary troupe.",
	"Wild horses."
  ];
  var array_unusual=[
	"Frost giant.",
	"Volcano.",
	"Massacre site.",
	"Giant footprints.",
	"Massive strange rock formation.",
	"Wolf pack (actually werewolves).",
	"Forest starts or stops here.",
	"Field of broken ice.",
	"Valley begins.",
	"Scientific/exploratory expedition.",
	"Lone creature visible against the snow.",
	"Circular copse of strange trees grown together.",
	"Old stone wall unattached to any structure.",
	"Large murder of crows circling something unseen.",
	"Clearly visible tracks.",
	"Fire.",
	"Ship frozen in the ice.",
	"Occult circle carved into lake ice.",
	"Cliffs (land rises from party's point of view).",
	"Cliffs (land drops off from party's point of view)."
  ];

  var d4=r(4)-1
  if (d4==3) {
	document.getElementById("output-mountains").innerHTML = array_mountains[d4]+" "+array_unusual[r(20)-1];
  } else {
	document.getElementById("output-mountains").innerHTML = array_mountains[d4];
  }
  document.getElementById("output-ruins").innerHTML = array_ruins[r(6)-1];
  document.getElementById("output-structures").innerHTML = array_structures[r(8)-1];
  document.getElementById("output-water").innerHTML = array_water[r(10)-1];
  document.getElementById("output-encampments").innerHTML = array_encampments[r(12)-1];
  document.getElementById("output-unusual").innerHTML = array_unusual[r(20)-1];
}