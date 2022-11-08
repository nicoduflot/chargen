var heroName = getCookie("charName");
var ethnieAff = getCookie("ethnieAff");
var archetype = getCookie("archetype");
var genre = getCookie("genre");
var corps = getCookie("corps");
var esprit = getCookie("esprit");
var pvChar = getCookie("pvChar");
var manaChar = getCookie("manaChar");
var dgCac = getCookie("dgCac");
var dgDist = getCookie("dgDist");
var ko = getCookie("ko");
var nbActions = getCookie("nbActions");
var nomArmes = getCookie("nomArmes");
var degatArme = getCookie("degatArme");
var sacPerso = getCookie("sacPerso");
var listeSorts = getCookie("listeSorts");
var ethnieChart = getCookie("ethnieChart");

//alert(heroName);

/*
console.log(heroName);
console.log(ethnieAff);
console.log(archetype);
console.log(corps);
console.log(esprit);
console.log(genre);
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
*/

document.getElementById("heroName").innerHTML = heroName;
document.getElementById("ethnie").innerHTML = ethnieAff;
document.getElementById("archetype").innerHTML = archetype;
document.getElementById("genre").innerHTML = genre;
document.getElementById("corps").innerHTML = corps;
document.getElementById("esprit").innerHTML = esprit;
document.getElementById("pvChart").innerHTML = pvChar;
document.getElementById("manaChart").innerHTML = manaChar;
document.getElementById("dgCac").innerHTML = dgCac;
document.getElementById("dgDist").innerHTML = dgDist;
document.getElementById("ethnieChart").innerHTML = ethnieChart;
document.getElementById("ko").innerHTML = ko;
document.getElementById("actions").innerHTML = nbActions;
document.getElementById("nomArme").innerHTML =nomArmes;
document.getElementById("degatArme").innerHTML = degatArme;
document.getElementById("sacPerso").innerHTML =sacPerso;
document.getElementById("listeSorts").innerHTML = listeSorts;
