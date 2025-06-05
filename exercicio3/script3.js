
var nota1 = Number(window.prompt)("digite sua nota: ")
var nota2 = Number(window.prompt)("digite sua nota 2: ")
var nota3 = Number(window.prompt)("digite sua nota 3: ")

let total = (nota1 + nota2 + nota3 )/ 3;


alert ("media final: " + total.toFixed(1))
 
if(total >= 60){
    alert("vc atingiu a media " + total.toFixed(1))
    alert ("aprovado")

}else{

    let pontosfaltando = 60 - total
    alert("aprovado faltaram " + pontosfaltando.toFixed(1) + "pontos")

}