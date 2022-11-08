/**
 * 
 * fonction d'initialisation de la feuille de personnage
 * 
 */

function initCharSheet(data) {
    let ethnies = null;
    let profils = null;
    data.forEach(element => {
        ethnies = element.personnage.ethnies;
        profils = element.personnage.profils;
        armes = element.magasin.arme;
        sorts = element.magasin.sort;
        equipements = element.magasin.equipement;
    });
    return [ethnies, profils, armes, sorts, equipements];
}

function setMouvement(corps) {
    let mouvement = 0;
    switch (true) {
        case (corps > 0 && corps < 4):
            mouvement = 3;
            break;
        case (corps > 3 && corps < 7):
            mouvement = 6;
            break;
        case (corps > 6 && corps < 10):
            mouvement = 9;
            break;
        case (corps > 9):
            mouvement = 12;
            break;
    }
    return mouvement;
}

function setDeg(valCarac) {
    let dg = 0;
    switch (true) {
        case (valCarac > 0 && valCarac < 3):
            dg = 1;
            break;
        case (valCarac > 2 && valCarac < 5):
            dg = 2;
            break;
        case (valCarac > 4 && valCarac < 7):
            dg = 3;
            break;
        case (valCarac > 6):
            dg = 4;
            break;
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

function setArmes(lesArmes) {
    let listeArmes = "";
    let listeDegats = "";
    lesArmes.forEach(function (item) {
        listeArmes = listeArmes + "<b>" + item.nomArme + "</b><br />";
        listeDegats = listeDegats + item.degatArme + "<br />";
    });
    let armurerie = [listeArmes, listeDegats];
    return armurerie;
}

function setSac(contenuSac){
	let listeSac ="<ul>";
	contenuSac.forEach(function (item){
		listeSac = listeSac+"<li>"+item+"</li>";
	});
	listeSac = listeSac+"</ul>";
	return listeSac;
}

function setSortAutomatique(lesSorts){
    let listeSort = '';
    //console.log(lesSorts);
    for(key in lesSorts){
        listeSort = listeSort + `<ul><li><b>${lesSorts[key].nomSort} : </b>`;
		listeSort = listeSort +` <i><small>${lesSorts[key].coutSort}</small></i><br />`;
		listeSort = listeSort + `${lesSorts[key].descriptionSort}</li></ul>`;	
    }
    return listeSort;
}

function sendToPrint(){
	window.open('charPrint.html', '_blank');
}

function initChar(ethnies, profils, armes, sorts, equipements) {
    /**
     * calcul des différents éléments selon corps, esprit, ethnie et archétype
     */
    let selectedEthnie = qS('#ethnie');
    let selectedarchetype = qS('#archetype');
    let corps = qS('#corps');
    let esprit = qS('#esprit');
    let pv = corps.value * 3;
    let mana = esprit.value * 3;
    let mouvement = setMouvement(corps.value);
    let dgCaC = setDeg(corps.value);
    let KO = calcKo(esprit.value);
    let dgTir = setDeg(esprit.value);
    let actions = calcActions(corps.value);
    let bonusAutre = '';
    for (key in ethnies) {
        if (key === selectedEthnie.value) {
            bonusAutre = ethnies[key].bonusAutre;
            bonusMana = ethnies[key].bonusMana;
            ethnieAff = ethnies[key].ethnieAff;
        }
    }
    let arme = null;
    let sac = null;
    let listeSorts = null;
    for (key in profils) {
        if (key === selectedarchetype.value) {
            bonusAutre = bonusAutre + `${profils[key].description}`;
            arme = setArmes(profils[key].arme);
            sac = setSac(profils[key].sac);
            listeSorts = setSortAutomatique(profils[key].sortAutomatique);
        }
    }

    /*
    console.log('ethnie : ', selectedEthnie.value);
    console.log('archetype : ', selectedarchetype.value);
    console.log('corps : ', corps.value);
    console.log('esprit : ', esprit.value);
    console.log('pv : ', pv);
    console.log('mana : ', mana);
    console.log('mouvement : ', mouvement);
    console.log('dgCaC : ', dgCaC);
    console.log('KO : ', KO);
    console.log('dgTir : ', dgTir);
    console.log('actions : ', actions);
    console.log('bonusAutre : ', bonusAutre);
    console.log('bonusMana : ', bonusMana);
    console.log('ethnieAff : ', ethnieAff);
    console.log('arme : ', arme);
    console.log('sac : ', sac);
    console.log('listeSorts : ', listeSorts);
    */
   /**
    * ajout des informations à la feuille
    */
    qS('#pvChart').innerHTML = pv;
    qS('#manaChart').innerHTML = mana;
    qS('#mouvement').innerHTML = mouvement + ' cases';
    qS('#dgCac').innerHTML = dgCaC;
    qS('#ko').innerHTML = KO;
    qS('#dgDist').innerHTML = dgTir;
    qS('#actions').innerHTML = actions;
    qS('#ethnieChart').innerHTML = bonusAutre,
    qS('#nomArme').innerHTML = arme[0];
    qS('#degatArme').innerHTML = arme[1];
    qS('#sacPerso').innerHTML = sac;
    qS('#listeSorts').innerHTML = listeSorts;
    
    /**
     * 
     * mise en cache cookie les informations du personnage pour pouvoir gérer l'impression
     * de la fiche personnage
     * 
     */
    setCookie('heroName', qS('#charName').value, 1);
    setCookie('ethnieAff', selectedEthnie.value, 1);
	setCookie('archetype', selectedarchetype.value, 1);
	setCookie('corps', corps.value, 1);
    setCookie('esprit', esprit.value, 1);
    setCookie('genre', genre.value, 1);
    setCookie('mouvement', mouvement, 1);
	setCookie('pvChar', pv, 1);
	setCookie('manaChar', mana, 1);
	setCookie('dgCac', dgCaC, 1);
	setCookie('dgDist', dgTir, 1);
	setCookie('ko', KO, 1);
	setCookie('nbActions', actions, 1);
	setCookie('nomArmes', arme[0], 1);
	setCookie('degatArme', arme[1], 1);
	setCookie('sacPerso', sac, 1);
	setCookie('listeSorts', listeSorts, 1);
	setCookie('ethnieChart', bonusAutre, 1);


}

function initPage() {
    //console.log('lancement requête data');
    fetch('./ressources/data-gen.json')
    .then(response => {
        return response.json();
    }).then(data => {
        let tabData = initCharSheet(data);
        ethnies = tabData[0];
        profils = tabData[1];
        armes = tabData[2];
        sorts = tabData[3];
        equipements = tabData[4];
        initChar(ethnies, profils, armes, sorts, equipements);
    })
    .catch(error => {
        let errorMessage = `Il y a une erreur : ${error}`;
    })
    .finally(() => {
        //console.log('requête data terminée');
    });
}