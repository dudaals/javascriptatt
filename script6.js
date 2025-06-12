let cliques = 0;
let mostraHTML = document.getElementById("mostraHTML");

function contador(){

    cliques++;

    mostraHTML.innerText = `Números de cliques: ${cliques}`;
}

function zerar(){
    cliques = 0;
    mostraHTML.innerText = `Números de cliques: ${cliques}`;
}
