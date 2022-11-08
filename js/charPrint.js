loaded(function(){
    
    let heroName = getCookie("heroName");
    let ethnieAff = getCookie("ethnieAff");
    let archetype = getCookie("archetype");
    let genre = getCookie("genre");
    let corps = getCookie("corps");
    let esprit = getCookie("esprit");
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
    
    //alert(heroName);
    
    /*
    console.log('heroName',heroName);
    console.log('ethnieAff', ethnieAff);
    console.log('archetype', archetype);
    console.log('corps', corps);
    console.log('esprit', esprit);
    console.log('genre', genre);
    console.log('manaChar', manaChar);
    console.log('dgCac', dgCac);
    console.log('dgDist', dgDist);
    console.log('ko', ko);
    console.log('nbActions', nbActions);
    console.log('nomArmes', nomArmes);
    console.log('degatArme', degatArme);
    console.log('sacPerso', sacPerso);
    console.log('listeSorts', listeSorts);
    console.log('ethnieChart', ethnieChart);
    
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
});
