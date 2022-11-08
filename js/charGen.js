let weaponChosen = [];
let hexChosen = [];
let equipementChosen = [];
let startMoney = 100;
let ethnics = null;
let profils = null;

/**
 * 
 * fonctions pour la création du personnage
 * 
 */

function getEthnie(data){
	let ethnies = null;
	data.forEach(element=>{
		ethnies = element.personnage.ethnies;
	});
	return ethnies;
}

function getProfils(data){
	let profils = null;
	data.forEach(element=>{
		profils = element.personnage.profils;
	});
	return profils;
}


function resetChar() {
    deleteCookie("ethnie");
	deleteCookie("archetype")
    deleteCookie("genre")
    deleteCookie("corps");
    deleteCookie("esprit");
    deleteCookie("mouvement");
	deleteCookie("pvChar");
	deleteCookie("manaChar");
	deleteCookie("dgCac");
	deleteCookie("dgDist");
	deleteCookie("ko");
	deleteCookie("nbActions");
	deleteCookie("nomArmes");
	deleteCookie("degatArme");
	deleteCookie("sacPerso");
	deleteCookie("listeSorts");
	deleteCookie("ethnieChart");
	initChart();
	window.location.reload();
}

function setArmes(lesArmes){
	var listeArmes = "";
	var listeDegats = "";
	
	lesArmes.forEach(function (item){
			listeArmes = listeArmes+"<strong>"+item.nomArme+"</strong><br />";
			listeDegats = listeDegats+item.degatArme+"<br />";
	});
	var armurerie = [listeArmes,listeDegats];
	return armurerie;
}

function setSortAutomatique(lesSorts){
	var listeSort = "";
	
	lesSorts.forEach(function (item){
			listeSort = listeSort+"<strong>"+item.nomSort+" : </strong>";
			listeSort = listeSort+"<em>"+item.coutSort+"</em>, ";
			listeSort = listeSort+""+item.descriptionSort+"<br />";
			
	});
	var sorts = [listeSort];
	return sorts;
}

function setSac(contenuSac){
	var listeSac ="<ul>";
	contenuSac.forEach(function (item){
		listeSac = listeSac+"<li>"+item+"</li>";
	});
	listeSac = listeSac+"</ul>";
	
	return listeSac;
}

function clickWeapon(armeClicked, checkboxElem, coutItem){
	//console.log(weaponChosen);
	if (checkboxElem.checked) {
		console.log(armeClicked+" chosen");
		weaponChosen.push(armeClicked);
		startMoney = startMoney-coutItem;
		
	} else {
		console.log(armeClicked+" lost");
		var pos = weaponChosen.indexOf(armeClicked);
		console.log(armeClicked+" at pos "+pos);
		var removedItem = weaponChosen.splice(pos, 1);
		startMoney = startMoney+coutItem;
	}
	//console.log(armeClicked);
	//console.log(weaponChosen);
	console.log("Argent restant : "+startMoney+" Po");
}

function clickSort(sortClicked, checkboxElem, coutItem){
	//console.log(weaponChosen);
	if (checkboxElem.checked) {
		console.log(sortClicked+" chosen");
		hexChosen.push(sortClicked);
		startMoney = startMoney-coutItem;
		
	} else {
		console.log(sortClicked+" lost");
		var pos = hexChosen.indexOf(sortClicked);
		console.log(sortClicked+" at pos "+pos);
		var removedItem = hexChosen.splice(pos, 1);
		startMoney = startMoney+coutItem;
	}
	//console.log(armeClicked);
	//console.log(hexChosen);
	console.log("Argent restant : "+startMoney+" Po");
}

function clickEquipement(equipementClicked, checkboxElem, coutItem){
	var nb = document.getElementById(equipementClicked).value;
	var nbBefore = 0;
	equipementChosen.forEach(
		function(item){
			if(item == equipementClicked){
				nbBefore = nbBefore+1;
			}
		}
	);
	console.log(nb);
	if(nb < nbBefore){
		
	}
	// ajouter avant cela la recherche d'éléments déjà existant avant d'ajouter et supprimer
	//console.log(weaponChosen);
	if (checkboxElem.checked) {
		console.log(equipementClicked+" chosen");
		equipementChosen.push(equipementClicked);
		startMoney = startMoney-coutItem;
		
	} else {
		console.log(equipementClicked+" lost");
		var pos = equipementChosen.indexOf(equipementClicked);
		console.log(equipementClicked+" at pos "+pos);
		var removedItem = equipementChosen.splice(pos, 1);
		startMoney = startMoney+coutItem;
	}
	//console.log(armeClicked);
	//console.log(equipementChosen);
	console.log("Argent restant : "+startMoney+" Po");
}

function setArmurerie(armurerie){
	var selectArmes = "<fieldset>\n";
	armurerie.forEach(function(item){
			//console.log(item.nom+" "+item.nbMain+" main(s)"+item.degats+" dégât(s)");
			selectArmes = selectArmes+"<input type=\"checkbox\" name=\"choixArme\" value=\""+item.nom+"\" onchange=\"clickSort('"+item.nom+"', this, "+item.cout+")\">"+item.nom+", "+item.nbMain+" main(s),"+item.degats+" dégât(s), "+item.cout+" Po<br />\n";
		}
	);
	selectArmes = selectArmes+"</fieldset>";
	//console.log(selectArmes);
	return selectArmes;
}

function setSorts(sorts){
	var selectSorts = "<fieldset>\n";
	sorts.forEach(function(item){
			//console.log(item.nom+" "+item.nbMain+" main(s)"+item.degats+" dégât(s)");
			selectSorts = selectSorts+"<input type=\"checkbox\" name=\"choixSort\" value=\""+item.nom+"\" onchange=\"clickWeapon('"+item.nom+"', this, "+item.cout+")\">"+item.nom+", "+item.mana+" mana(s),"+item.effet+", "+item.cout+" Po<br />\n";
		}
	);
	selectSorts = selectSorts+"</fieldset>";
	//console.log(selectSorts);
	return selectSorts;
}

function setEquipement(equipements){
	var selectEquipement = "<fieldset>\n";
	equipements.forEach(function(item){
			//console.log(item.nom+" "+item.nbMain+" main(s)"+item.degats+" dégât(s)");
			//selectEquipement = selectEquipement+"<input type=\"checkbox\" name=\"choixEquipement\" value=\""+item.nom+"\" onchange=\"clickEquipement('"+item.nom+"', this, "+item.cout+")\">"+item.nom+", "+item.effet+", "+item.cout+" Po<br />\n";
			selectEquipement = selectEquipement+"<input type=\"number\" name=\""+item.nom+"\" id=\""+item.nom+"\" width=\"3\" value=\"0\" min=\"0\" max=\"7\" onchange=\"clickEquipement('"+item.nom+"', this, "+item.cout+")\">"+item.nom+", "+item.effet+", "+item.cout+" Po<br />\n";

		}
	);
	selectEquipement = selectEquipement+"</fieldset>";
	//console.log(selectEquipement);
	return selectEquipement;
}

function initChart(){
	
	let ethnie = document.getElementById("ethnie").value;
	let archetype = document.getElementById("archetype").value;
	let genre = document.getElementById("genre").value;
	
	let bonusAutre = "";
	let arme = profil[0].barbare.arme;
	weapons = setArmes(arme);
	var sac = profil[0].barbare.sac;
	var sortAutomatique = profil[0].barbare.sortAutomatique;
	
	bonusAutre = "";
	bonusAutre = "<p>On ajoute 2d6 or à la valeur en or des objets qu’il trouve</p>";
	bonusAutre = ethnies[0].humain.bonusAutre;
    bonusAutre = bonusAutre + profil[0].barbare.description;
    document.getElementById("mouvement").innerHTML = "6";
	document.getElementById("pvChart").innerHTML = "12";
	document.getElementById("manaChart").innerHTML = "12";
	document.getElementById("dgCac").innerHTML = "2";
	document.getElementById("dgDist").innerHTML = "2";
	document.getElementById("ko").innerHTML = "3";
	document.getElementById("actions").innerHTML = "3";
	document.getElementById("ethnieChart").innerHTML = bonusAutre;
	document.getElementById("nomArme").innerHTML = weapons[0];
	document.getElementById("degatArme").innerHTML = weapons[1];
	document.getElementById("sacPerso").innerHTML = setSac(sac);
	document.getElementById("listeSorts").innerHTML = setSortAutomatique(sortAutomatique);

    setCookie("corps", 4);
    setCookie("esprit", 4);
    setCookie("mouvement", 6);
	setCookie("ethnieAff", "Humain", 1);
	setCookie("archetype", archetype, 1);
	setCookie("genre", genre, 1);
	setCookie("pvChar", 12, 1);
	setCookie("manaChar", 12, 1);
	setCookie("dgCac", 2, 1);
	setCookie("dgDist", 2, 1);
	setCookie("ko", 3, 1);
	setCookie("nbActions", 3, 1);
	setCookie("nomArmes", weapons[0], 1);
	setCookie("degatArme", weapons[1], 1);
	setCookie("sacPerso", setSac(sac), 1);
	setCookie("listeSorts", setSortAutomatique(sortAutomatique), 1);
	setCookie("ethnieChart", bonusAutre, 1);
	
	//console.log(magasin.sort);
	//setArmurerie(armurerie[0].arme);
	setArmurerie(magasin.arme);
	setSorts(magasin.sort);
	
	/* pour la version 2 on choisira les armes, sort et equipements du personnage*/
	/*
	document.getElementById("weaponShop").innerHTML = setArmurerie(magasin.arme);
	document.getElementById("hexShop").innerHTML = setSorts(magasin.sort);
	document.getElementById("equipShop").innerHTML = setEquipement(magasin.equipement);
	*/
}

function calcMouvement(valCorps) {
    var mouvement = 0;
    if (valCorps > 0 && valCorps < 4) {
        mouvement = 3;
    }
    if (valCorps > 3 && valCorps < 7) {
        mouvement = 6;
    }
    if (valCorps > 6 && valCorps < 10) {
        mouvement = 9;
    }
    if (valCorps > 9) {
        mouvement = 12;
    }
    return mouvement;
}

function calcDeg(valCarac){
	var dg = 0;
	if(valCarac >0 && valCarac < 3){
		dg=1;
	}
	if(valCarac >2 && valCarac < 5){
		dg=2;
	}
	if(valCarac >4 && valCarac < 7){
		dg=3;
	}
	if(valCarac >6){
		dg=4;
	}
	return dg;
}

function calcKo(valCarac){
	/* esprit */
	var ko = 0;
	if(valCarac >0 && valCarac < 4){
		ko=4;
	}
	if(valCarac >3 && valCarac < 7){
		ko=3;
	}
	if(valCarac >6 && valCarac < 10){
		ko=2;
	}
	if(valCarac >9){
		ko=1;
	}
	return ko;
}

function calcActions(valCarac){
	/* esprit */
	var actions = 0;
	if(valCarac >= 1 && valCarac <= 3){
		actions = 2;
	}
	if(valCarac >= 4 && valCarac < 10){
		actions = 3;
	}
	if(valCarac >= 10){
		actions = 4;
	}
	return actions;
}

function changeCarac(carac1){
	var caracValue = document.getElementById(carac1).value;
	var autreCarac = 8-caracValue;
	var pv = 0;
	var mana = 0;
	var ethnie = document.getElementById("ethnie").value;
    var archetype = document.getElementById("archetype").value;
    var genre = document.getElementById("genre").value;
	var dgCac = 0;
	var dgDist = 0;
	var bonusPv = 0;
	var bonusMana = 0;
	var bonusAutre = "";
	var sortAutomatique = {};
	var arme = {};
	var sac = [];
	
	switch (carac1){
		case "corps":
			document.getElementById("esprit").value = autreCarac;
			pv = caracValue * 3;
			mana = autreCarac * 3;
			break;
		case "esprit":
			document.getElementById("corps").value = autreCarac;
			pv = autreCarac * 3
			mana = caracValue * 3;
			break;
	}
	
	switch (ethnie){
		case "humain":
			bonusAutre = ethnies[0].humain.bonusAutre;
			bonusMana = ethnies[0].humain.bonusMana;
			ethnieAff = ethnies[0].humain.ethnieAff;
			break;
		case "elfeHN":
			bonusAutre = ethnies[0].elfeHN.bonusAutre;
			bonusMana = ethnies[0].elfeHN.bonusMana;
			ethnieAff = ethnies[0].elfeHN.ethnieAff;
			break;
		case "elfeArbo":
			bonusAutre = ethnies[0].elfeArbo.bonusAutre;
			bonusMana = ethnies[0].elfeArbo.bonusMana;
			ethnieAff = ethnies[0].elfeArbo.ethnieAff;
			break;
		case "elfeNoc":
			bonusAutre = ethnies[0].elfeNoc.bonusAutre;
			bonusMana = ethnies[0].elfeNoc.bonusMana;
			ethnieAff = ethnies[0].elfeNoc.ethnieAff;
			break;
		case "nain":
			bonusAutre = ethnies[0].nain.bonusAutre;
			bonusMana = ethnies[0].nain.bonusMana;
			ethnieAff = ethnies[0].nain.ethnieAff;
			break;
		case "orc":
			bonusAutre = ethnies[0].orc.bonusAutre;
			bonusMana = ethnies[0].orc.bonusMana;
			ethnieAff = ethnies[0].orc.ethnieAff;
			break;
		default:
			bonusAutre = ethnies[0].humain.bonusAutre;
			bonusMana = ethnies[0].humain.bonusMana;
			ethnieAff = ethnies[0].humain.ethnieAff;
			break;
	}
	
	switch (archetype){
		case "barbare":
			bonusAutre = bonusAutre + profil[0].barbare.description;
			sortAutomatique = profil[0].barbare.sortAutomatique;
			arme = profil[0].barbare.arme;
			sac = profil[0].barbare.sac;
		break;
		case "guerrier":
			bonusAutre = bonusAutre + profil[0].guerrier.description;
			sortAutomatique = profil[0].guerrier.sortAutomatique;
			arme = profil[0].guerrier.arme;
			sac = profil[0].guerrier.sac;
		break;
		case "chasseur":
			bonusAutre = bonusAutre + profil[0].chasseur.description;
			sortAutomatique = profil[0].chasseur.sortAutomatique;
			arme = profil[0].chasseur.arme;
			sac = profil[0].chasseur.sac;
		break;
		case "magicien":
			bonusAutre = bonusAutre + profil[0].magicien.description;
			sortAutomatique = profil[0].magicien.sortAutomatique;
			arme = profil[0].magicien.arme;
			sac = profil[0].magicien.sac;
		break;
		case "filou":
			bonusAutre = bonusAutre + profil[0].filou.description;
			sortAutomatique = profil[0].filou.sortAutomatique;
			arme = profil[0].filou.arme;
			sac = profil[0].filou.sac;
		break;
		case "druide":
			bonusAutre = bonusAutre + profil[0].druide.description;
			sortAutomatique = profil[0].druide.sortAutomatique;
			arme = profil[0].druide.arme;
			sac = profil[0].druide.sac;
		break;
		case "marchand":
			bonusAutre = bonusAutre + profil[0].marchand.description;
			sortAutomatique = profil[0].marchand.sortAutomatique;
			arme = profil[0].marchand.arme;
			sac = profil[0].marchand.sac;
		break;
		default:
			bonusAutre = bonusAutre + profil[0].barbare.description;
			sortAutomatique = profil[0].barbare.sortAutomatique;
			arme = profil[0].barbare.arme;
			sac = profil[0].barbare.sac;
		break;
	}
	
	pv=pv+bonusPv;
	mana=mana+bonusMana;
	weapons = setArmes(arme);
	
	document.getElementById("pvChart").innerHTML = pv;
    document.getElementById("manaChart").innerHTML = mana;
    document.getElementById("mouvement").innerHTML = calcMouvement(document.getElementById("corps").value);
	document.getElementById("dgCac").innerHTML = calcDeg(pv/3);
	document.getElementById("dgDist").innerHTML = calcDeg(mana/3);
	document.getElementById("ko").innerHTML = calcKo(pv/3);
	document.getElementById("actions").innerHTML = calcActions(mana/3);
	document.getElementById("nomArme").innerHTML = weapons[0];
	document.getElementById("degatArme").innerHTML = weapons[1];
	document.getElementById("sacPerso").innerHTML = setSac(sac);
	document.getElementById("listeSorts").innerHTML = setSortAutomatique(sortAutomatique);
	document.getElementById("ethnieChart").innerHTML = bonusAutre;
	
	setCookie("ethnieAff", ethnieAff, 1);
	setCookie("archetype", archetype, 1);
	setCookie("corps", document.getElementById("corps").value);
    setCookie("esprit", document.getElementById("esprit").value);
    setCookie("genre", genre, 1);
    setCookie("mouvement", calcMouvement(document.getElementById("corps").value));
	setCookie("pvChar", pv, 1);
	setCookie("manaChar", mana, 1);
	setCookie("dgCac", calcDeg(pv/3), 1);
	setCookie("dgDist", calcDeg(mana/3), 1);
	setCookie("ko", calcKo(pv/3), 1);
	setCookie("nbActions", calcActions(mana/3), 1);
	setCookie("nomArmes", weapons[0], 1);
	setCookie("degatArme", weapons[1], 1);
	setCookie("sacPerso", setSac(sac), 1);
	setCookie("listeSorts", setSortAutomatique(sortAutomatique), 1);
	setCookie("ethnieChart", bonusAutre, 1);
	
	//testCookieSettled();
}


function resetChar(){
	
	deleteCookie("ethnieAff");
	deleteCookie("archetype");
	deleteCookie("corps");
	deleteCookie("esprit");
	deleteCookie("pvChar");
	deleteCookie("manaChar");
	deleteCookie("dgCac");
	deleteCookie("dgDist");
	deleteCookie("ko");
	deleteCookie("nbActions");
	deleteCookie("nomArmes");
	deleteCookie("degatArme");
	deleteCookie("sacPerso");
	deleteCookie("listeSorts");
	deleteCookie("ethnieChart");
	
	initChart();
}


function sendToPrint(){
	var heroName = document.getElementById("charName").value;
	if(heroName == ""){
		alert("Le nom du personnage n'est pas renseigné");
	}
    else {
        setCookie("genre", document.getElementById("genre").value, 1);
		setCookie("charName", heroName, 1);
		window.open('charPrint.html', '_blank');
	}
}