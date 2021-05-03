$(document).ready(function(){
   //creo un array di nomi dove non sono formattati in modo corretto
    const nomi=["VALERIO","FrAncO","beppe","MArio","FRANCESCO"];
    console.log(nomi);

    //uso il map per creare un nuovo array modificando nomi e richiamo la funzione creata
    const nomiFormattati= nomi.map((nome)=> formatStr(nome));
    console.log(nomiFormattati);


});
//creo la funzione per formattare le stringhe
function formatStr(str){
    //creo una variabile che prende la prima lettera della stringa e la trasformo in maiuscolo
    let first = str.charAt(0).toUpperCase();
    //creo una variabile che trasforma l'intera stringa in minuscolo e gli dico di estrarre dall'indice 1 in poi
    let rest = str.toLowerCase().substring(1)
    //creo il return della nuova stringa
    return first + rest ;
}
   
   
    
   
