/*
	collections : où l'on stock les données et les objets js correspondants aux ethnie et profils de personnages.
*/

var ethnies = [
	{
		"humain": {
			"bonusAutre" : "<p>On ajoute 2d6 or à la valeur en or des objets qu'il trouve</p>", 
			"bonusMana" : 0,
			"ethnieAff" : "Humain",
		},
		"elfeHN": {
			"bonusAutre" : "<p>Ajoute à son mana son niveau fois 10 points de mana(augmente à chaque montée de niveau)</p>", 
			"bonusMana" : 10,
			"ethnieAff" : "Elfe Haut-né",
		},
		"elfeArbo": {
			"bonusAutre" : "<p>Ajoute à son mana son niveau fois 5 points de mana(augmente à chaque montée de niveau) et un point d'action en plus à ses points d'actions de base.</p>", 
			"bonusMana" : 5,
			"ethnieAff" : "Elfe arboricole",
		},
		"elfeNoc": {
			"bonusAutre" : "<p>Voit dans le noir et ajoute à son mana son niveau fois 5(augmente à chaque montée de niveau).</p>", 
			"bonusMana" : 5,
			"ethnieAff" : "Elfe nocturne",
		},
		"nain": {
			"bonusAutre" : "<p>Réduit les dégâts qu'il subit d'un point par niveau</p>", 
			"bonusMana" : 0,
			"ethnieAff" : "Nain",
		},
		"orc": {
			"bonusAutre" : "<p>Voit dans le noir et peut \"sentir\" à travers les murs ou les portes (Sort automatique, 2 manas par test).</p>", 
			"bonusMana" : 0,
			"ethnieAff" : "Orc",
		},
	},
];

var profil = [
	{
		"barbare": {
			"description" : "<p>Les barbares sont une communauté nomade, se déplaçant au rythme des saisons. Ils vivent principalement de chasse et de cueillette. Ils font du commerce, et vendent généralement le surplus de viande et de peaux tannées. Les femmes comme les hommes sont des guerriers fiers, et la plus grande honte pour un barbare est de ne pas mourir l’épée à la main.</p><p>Dès leur plus jeune âge, les barbares apprennent la survie dans la nature, la chasse, la pèche, les bases des soins par les plantes, la construction d’abris et de pièges. Certains se sont sédentarisés et contrôlent et protègent contre rétribution quelques passages routiers et fluviaux, certains vivent près des mines qu’ils protègent ainsi que les mineurs. </p>",
			"sortAutomatique" : [
				{ 
					"nomSort" :"Colère", 
					"coutSort" :"2 manas", 
					"descriptionSort" : "Double les détâs de base pendant 1d6 tours.",
				}
			],
			"arme" : [
				{
					"nomArme" : "Hache de barbare.", 
					"degatArme" : 5,
				},
				{
					"nomArme" : "Dague en fer", 
					"degatArme" : 2,
				},
			],
			"sac" : ["5 viandes séchées (2 PV par viande)", "Briquet", "Torche", "Piège à loup (4 dégâts), bloquant"],
		},
		"guerrier": {
			"description" : "<p>Les guerriers sont des soldats de métier, qui ont quitté une armée régulière pour faire principalement du mercenariat, en louant leur épée au plus offrant. La plupart des guerriers continuent, après avoir quitté l’armée, de garder une sorte de code de l’honneur.</p><p>Ils sont rarement seuls et rejoignent des petits groupes. Mais il arrive que certains de ses groupes ne trouvent pas assez de travail et deviennent des brigands. Les groupes de brigands composés de guerriers sont très difficile à gérer dans la région de Lumiyard, heureusement qu’ils ne sont pas très nombreux.</p>",
			"sortAutomatique" : [
				{ 
					"nomSort" :"Voie du guerrier", 
					"coutSort" :"2 manas", 
					"descriptionSort" : "2 manas par dé relancé en attaque.",
				}
			],
			"arme" : [
				{
					"nomArme" : "Épée de guerrier.", 
					"degatArme" : 4,
				},
				{
					"nomArme" : "Dague en fer", 
					"degatArme" : 2,
				},
			],
			"sac" : ["5 rations de soldat (2 PV par ration)", "Briquet", "Torche", "Armure légère, -2 dégâts."],
		},
		"chasseur": {
			"description" : "<p>Les chasseurs sont les rois de la traque du gibier, de la pose de piège et du tir efficace. Ils gagnent leur vie en revendant le surplus de nourriture ainsi que les peaux des bêtes qu’ils chassent.</p>",
			"sortAutomatique" : [
				{ 
					"nomSort" :"Sniper", 
					"coutSort" :"2 manas", 
					"descriptionSort" : "2 manas par dé ajouté pour tirer",
				}
			],
			"arme" : [
				{
					"nomArme" : "Arc court.", 
					"degatArme" : 3,
				},
				{
					"nomArme" : "Dague effilée", 
					"degatArme" : 3,
				},
			],
			"sac" : ["3 petites potions de soin (2 pv par potion)", "2 petites potions de mana (2 mana par potion)", "briquet", "torche", "piège à loups(4 dégâts)"],
		},
		"magicien": {
			"description" : "<p>Les magiciens sont repérés très jeunes par des mages plus vieux et plus expérimentés. Ces mages veulent voir leur savoir et leurs techniques se perpétrer donc ils parcourent le monde en suivant des signes et les courants magiques pour retrouver les personnes qui pourraient potentiellement devenirs leurs apprentis.</p><p>Si la personne (ou les parents dans le cas des enfants) est d’accord, le mage prend l’apprenti sous son aile et durant une dizaine d’années il va lui apprendre les bases de sa magie. Ensuite, l’apprenti doit passer deux ans minimum à se débrouiller seul, en vivant de sa magie afin d’améliorer ses connaissances.</p><p> Une fois que cette épreuve est finie, il doit rejoindre son maître pour finaliser son apprentissage. Il arrive parfois que les apprentis meurent ou ne reviennent jamais auprès du maître, alors le choix et l’apprentissage est très stricte afin d’éviter ce type de drame.</p>",
			"sortAutomatique" : [
				{ 
					"nomSort" :"boule de feu", 
					"coutSort" :"2 manas", 
					"descriptionSort" : "4 dégâts",
				},
				{
					"nomSort" :"peau de pierre", 
					"coutSort" :"2 manas", 
					"descriptionSort" : "-2 dégâts, 1d6 tour",
				},
			],
			"arme" : [
				{
					"nomArme" : "Bâton ferré.", 
					"degatArme" : 3,
				},
				{
					"nomArme" : "Dague effilée", 
					"degatArme" : 3,
				},
			],
			"sac" : ["2 petites potions de soin (2 PV par potion)", "3 petites potions de mana (2 manas par potion)", "Briquet", "Torche", "Livre de sorts (permet de préparer d’autres sorts que les sorts automatiques, une à deux actions par sorts, coût en mana selon le sort. Les sorts se trouvent ou s’apprennent durant l’aventure)."],
		},
		"filou": {
			"description" : "<p>La plupart des filous sont des enfants vivant dans les rues et ayant dû se débrouiller tout seuls pour survivre. Ceux qui survivent assez longtemps deviennent riches ou des mercenaires, les autres décèdent ou finissent en prison.</p><p>Généralement, les filous sont bons dans toutes les techniques de vols, mais un filou aura toujours un secteur de prédilection (cambriolage, pickpocket, vol à l’étalage, etc.).</p><p>Les pièges, les serrures, la dissimulation et la fuite sont leur pain quotidien. Un filou en reconnaîtra toujours un autre et une sorte de code d’honneur est établi entre eux, les filous se serrent les coudent et ne trahissent jamais les leurs.</p>",
			"sortAutomatique" : [
				{ 
					"nomSort" :"Voie du filou", 
					"coutSort" :"2 manas", 
					"descriptionSort" : "2 manas par dé relancé pour défendre",
				},
			],
			"arme" : [
				{
					"nomArme" : "Dague effilée", 
					"degatArme" : 3,
				},
				{
					"nomArme" : "Dague effilée", 
					"degatArme" : 3,
				},
			],
			"sac" : ["3 petites potions de soin (2 pv par potion)", "2 petites potions de mana (2 mana par potion)", "briquet", "torche", "2 kits du filou (ouverture ou désamorçage automatique)"],
		},
		"druide": {
			"description" : "<p>Les druides / Shamans sont des personnes formées à la magie de la nature et aux secrets des plantes. On devient druide / Shaman en étant choisi par un druide / Shaman, généralement durant l’enfance. La plupart des paysans espère que leur enfant sera choisi pour devenir druide / Shaman, car ils sont respectés et font généralement le bien autour d’eux.</p><p>Leur magie est liée à la nature, et au transformisme. De base, le druide / Shaman possède un animal totem en lequel il peut très facilement se transformer. Il peut aussi, mais plus difficilement, se transformer en d’autres animaux mais doit pour ce faire avoir passé au moins quelques heures en présence de cet animal afin de s’être synchronisé avec l’aura de l’animal. Mais cette transformation est plus compliquée et fatigante que quand il prend son animal totem.</p>",
			"sortAutomatique" : [
				{ 
					"nomSort" :"la forme de l’ours", 
					"coutSort" :"3 manas", 
					"descriptionSort" : "Le druide se transforme en ours durant 1d6 tours. Peut utiliser ambidextrie.",
				},
			],
			"arme" : [
				{
					"nomArme" : "Bâton ferré", 
					"degatArme" : 3,
				},
				{
					"nomArme" : "Dague effilée", 
					"degatArme" : 3,
				},
				{
					"nomArme" : "Griffe d\'ours", 
					"degatArme" : 3,
				},
			],
			"sac" : ["3 rations (2 pv par ration)", "2 petites potions de mana", "briquet", "torche", "piège à loup (4 dégâts, bloquant)"],
		},
		"marchand": {
			"description" : "<p>Les marchands sont de deux types, nomades ou sédentaires. Les sédentaires possèdent une boutique dans une ville, un village, les nomades se déplacent avec leur boutique, de la valise pleine de surprises à la carriole de caravane se transformant en étal itinérant.</p><p>Les boutiques sont de divers intérêts : Armes, vivres, potions, Vêtements, bijoux, Bazar (un peu de tout). Choisir une de ces spécialité (mis à part bazar), donne une expertise et / ou une pratique d’un métier associé. Par exemple, un vendeur d’arme saura mieux entretenir les arme et armures, un marchand de vivres pourra facilement trouver de la nourriture et des denrées de première nécessité, celui qui vend des potions pourra en fabriquer.</p><p><em>Ce personnage nécessite un joueur non débutant en JDR.</em></p>",
			"sortAutomatique" : [
				{ 
					"nomSort" :"Négoce", 
					"coutSort" :"2 manas", 
					"descriptionSort" : "Permet de payer moins cher(-30 pourcent).",
				},
				{ 
					"nomSort" :"Bagout", 
					"coutSort" :"2 manas", 
					"descriptionSort" : "Ajoute 2 dés à ses jets d'esprit quand il essai de persuader, charmer, interroger, parler en public, etc...",
				},
			],
			"arme" : [
				{
					"nomArme" : "Dague en acier", 
					"degatArme" : 3,
				},
				{
					"nomArme" : "Arbalète", 
					"degatArme" : 11,
				},
			],
			"sac" : ["Si Magasin (selon le magasin, le sac se rempli avec l’aval du MJ)", "Si itinérant (le moyen de déplacement est à établir avec le MJ)"],
		},
	},
];

/*
var armurerie = [
	{
		"arme" : [
			{"nom" : "Hache de Barbare","nbMain" : 2,"degats" : 5,"cout" : 15,},
			{"nom" : "Hache à deux main lourde","nbMain" : 2,"degats" : 8,"cout" : 30,},
			{"nom" : "Épée de guerrier","nbMain" : 1,"degats" : 4,"cout" : 8,},
			{"nom" : "bâton renforcé acier","nbMain" : 2,"degats" : 3,"cout" : 8,},
			{"nom" : "dague en acier","nbMain" : 1,"degats" : 3,"cout" : 5,},
			{"nom" : "dague effilée","nbMain" : 1,"degats" : 3,"cout" : 5,},
			{"nom" : "dague en fer","nbMain" : 1,"degats" : 2,"cout" : 3,},
			{"nom" : "Épée en fer","nbMain" : 1,"degats" : 3,"cout" : 5,},
			{"nom" : "Bâton de glace","nbMain" : 2,"degats" : 3,"cout" : 15,},
			{"nom" : "Arc court","nbMain" : 2,"degats" : 3,"cout" : 15,},
			{"nom" : "Arc long","nbMain" : 2,"degats" : 5,"cout" : 25,},
			{"nom" : "Arc composite","nbMain" : 2,"degats" : 8,"cout" : 35,},
			{"nom" : "Arbalète","nbMain" : 2,"degats" : 11,"cout" : 45,},
		],
	},
];
*/

var magasin = {
		"arme" : [
			{"nom" : "Hache de Barbare","nbMain" : 2,"degats" : 5,"cout" : 15,},
			{"nom" : "Hache à deux main lourde","nbMain" : 2,"degats" : 8,"cout" : 30,},
			{"nom" : "Épée de guerrier","nbMain" : 1,"degats" : 4,"cout" : 8,},
			{"nom" : "bâton renforcé acier","nbMain" : 2,"degats" : 3,"cout" : 8,},
			{"nom" : "dague en acier","nbMain" : 1,"degats" : 3,"cout" : 5,},
			{"nom" : "dague effilée","nbMain" : 1,"degats" : 3,"cout" : 5,},
			{"nom" : "dague en fer","nbMain" : 1,"degats" : 2,"cout" : 3,},
			{"nom" : "Épée en fer","nbMain" : 1,"degats" : 3,"cout" : 5,},
			{"nom" : "Bâton de glace","nbMain" : 2,"degats" : 3,"cout" : 15,},
			{"nom" : "Arc court","nbMain" : 2,"degats" : 3,"cout" : 15,},
			{"nom" : "Arc long","nbMain" : 2,"degats" : 5,"cout" : 25,},
			{"nom" : "Arc composite","nbMain" : 2,"degats" : 8,"cout" : 35,},
			{"nom" : "Arbalète","nbMain" : 2,"degats" : 11,"cout" : 45,},
		],
		"sort" : [
			{"nom" : "Colère", "mana" : 2, "effet" : "Double les dégâts de base pendant 1d6 tours", "cout" : 10,},
			{"nom" : "Voie du guerrier", "mana" : 2, "effet" : "2 manas par dé relancé en attaque.", "cout" : 10,},
			{"nom" : "Voie du filou", "mana" : 2, "effet" : "2 manas par dé relancé pour défendre", "cout" : 10,},
			{"nom" : "boule de feu", "mana" : 2, "effet" : "4 dégâts", "cout" : 10,},
			{"nom" : "peau de pierre", "mana" : 2, "effet" : "-2 dégâts, 1d6 tour", "cout" : 10,},
			{"nom" : "Détection souterraine", "mana" : 2, "effet" : "5 mètres par niveau, détecte soit les espaces, soit les présences derrière une paroi (mur, caverne, porte, etc.).", "cout" : 10,},
			{"nom" : "Premiers soins", "mana" : 4, "effet" : "Permet de relever un personnage du K.O. (dans les conditions normales du K.O.)", "cout" : 20,},
			{"nom" : "Soins", "mana" : 2, "effet" : "2 PV rendu à la cible au contact ou 2 PV régénérés", "cout" : 10,},
			{"nom" : "Mur de flammes", "mana" : 4, "effet" : "<em>4 mana pour 1m²</em>. Durée 1d6+1 tours à moins que le joueur ne l’annule (gratuit). Un personnage qui tente de traverser le mur de flamme ou qui se trouve sur le chemin du mur de flamme doit obtenir au moins trois réussite avec le corps pour éviter d’être blessé. Si c’est raté il prend 4 dégâts qui ignorent les armures conventionnelles.", "cout" : 20,},
			{"nom" : "Mur de terre", "mana" : 4, "effet" : "<em>4 manas pour 1m²</em>. Crée un mur de terre qui possède 4 points de structure et une défense de 4 réussites, qui descend d’une réussite tous les 2 tours. A la fin, le mur reste debout mais il faut arriver au bout de ses points de structure pour le faire disparaître.", "cout" : 20,},
			{"nom" : "Court comme le vent", "mana" : 2, "effet" : "Le personnage court au prix d’un point d’action seulement. 1d6 tour", "cout" : 10,},
			{"nom" : "Fuite", "mana" : 2, "effet" : "Le personnage peut s’échapper d’un corps à corps sans subir d’attaque gratuite.", "cout" : 10,},
			{"nom" : "Eclair", "mana" : 2, "effet" : "Lance un éclair vers la cible, 4 dégâts", "cout" : 10,},
			{"nom" : "Protection", "mana" : 2, "effet" : "Barrière magique absorbant 4 dégâts durant 1d6 tour", "cout" : 20,},
			{"nom" : "Attaque rapide", "mana" : 2, "effet" : "Faire deux attaque de suite sans subir de malus", "cout" : 10,},
			{"nom" : "Attaque surprise", "mana" : 0, "effet" : "Quand le personnage attaque par surprise, il double ses dégâts", "cout" : 20,},
			{"nom" : "Dissimulation", "mana" : 2, "effet" : "le sort dure tant que le personnage n’est pas repéré. Pour repérer le lanceur, on oppose un jet d'esprit entre le lanceur et celui qui tente de le repérer, le nobre de réussite du lanceur doit être inférieur pour dissiper le sort. Les personnages ne voient pas le personnage même quand il les attaque, il peut faire relancer un des dés d’esprit utilisé pour le repérer, une fois par tour.", "cout" : 30,},
			{"nom" : "Guérison", "mana" : 2, "effet" : "Regagner 1d6+1 PV, sur soi ou sur un autre personnage par contact.", "cout" : 40,},
			{"nom" : "Parade", "mana" : 2, "effet" : "2 mana par dé relancé pour se défendre.", "cout" : 1,},
		],
		"equipement" : [
			{"nom" : "viande séchée", "effet" : "Rend 2 PV", "cout" : 1,},
			{"nom" : "ration", "effet" : "Rend 2 PV", "cout" : 1,},
			{"nom" : "petite potion de soin", "effet" : "Rend 2 PV", "cout" : 1,},
			{"nom" : "moyenne potion de soin", "effet" : "Rend 4 PV", "cout" : 3,},
			{"nom" : "grande potion de soin", "effet" : "Rend 2 PV", "cout" : 8,},
			{"nom" : "petite potion de mana", "effet" : "Rend 2 mana", "cout" : 1,},
			{"nom" : "moyenne potion de mana", "effet" : "Rend 4 mana", "cout" : 3,},
			{"nom" : "grande potion de mana", "effet" : "Rend 2 mana", "cout" : 8,},
			{"nom" : "briquet", "effet" : "Fait du feu", "cout" : 5,},
			{"nom" : "torche", "effet" : "éclaire sur 16m² pendant 2h", "cout" : 1,},
			{"nom" : "Piège à loup", "effet" : "4 dégâts, bloquant", "cout" : 5,},
			{"nom" : "Armure légère", "effet" : "-2 dégâts", "cout" : 10,},
			{"nom" : "Livre de sort", "effet" : "Cout indiqué vide. Permet d'acheter et d'y inscrire des sorts non automatiques.", "cout" : 20,},
			{"nom" : "Kit du filou", "effet" : "réussite automatique ouverture serrure ou désamorçage piège", "cout" : 20,},
			{"nom" : "lot d’ingrédients divers", "effet" : "permet de préparer l’équivalent d’une grande potion", "cout" : 5,},
			{"nom" : "parchemin magique", "effet" : "lance gratuitement le sort inscrit, détruit après utilisation", "cout" : 15,},
			{"nom" : "Pierre à aiguiser", "effet" : "utilisation unique, une action, annule l’armure non-magique à la prochaine attaque", "cout" : 5,},
			{"nom" : "Corde normale", "effet" : "Fait des trucs de corde, resistance de 3 dés, coût pour 2 mètres", "cout" : 1,},
			{"nom" : "Corde résistante", "effet" : "Fait des trucs de corde, resistance de 6 dés, coût pour 2 mètres", "cout" : 10,},
			{"nom" : "Corde elfique", "effet" : "Fait des trucs de corde, incassable, coût pour 2 mètres", "cout" : 100,},
			{"nom" : "Petite pierre des âmes", "effet" : "donne 10 charges à un objet magique utilisant des charges", "cout" : 10,},
			{"nom" : "Moyenne pierre des âmes", "effet" : "donne 20 charges à un objet magique utilisant des charges", "cout" : 20,},
			{"nom" : "Grande pierre des âmes", "effet" : "donne 30 charges à un objet magique utilisant des charges", "cout" : 30,},
			{"nom" : "Livre apothicaire", "effet" : "contient une recette de potion, possibilité d’écrire d’autres recettes", "cout" : 20,},
			{"nom" : "bouclier petit", "effet" : "+ 1dé en défense", "cout" : 10,},
			{"nom" : "moyen petit", "effet" : "+ 2dé en défense", "cout" : 20,},
			{"nom" : "grand petit", "effet" : "+ 3dé en défense", "cout" : 40,},
		],
	};

var livreDeSort = [
	{
		"sort" : [],
	}
];
