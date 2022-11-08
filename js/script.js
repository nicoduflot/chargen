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
    document.cookie = `${name}=${value}; max-age=${maxAge}; Samesite=Strict`;
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

