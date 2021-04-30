$(document).ready(function(){
    //array di gatti
    const gatti = [
        {
             nome : 'Chanel', 
             eta : 8.5 ,
             colore : 'rgb(243, 145, 64)' ,
             sesso : 'femmina'      
        },
        {
             nome : 'Wendy', 
             eta : 6 ,
             colore : 'rgb(110, 99, 94)' ,
             sesso : 'femmina'      
        },
        {
             nome : 'Romeo', 
             eta : 4 ,
             colore : 'rgb(53, 51, 50)' ,
             sesso : 'maschio'      
        },
        {
             nome : 'Matisse', 
             eta : 3.5 ,
             colore : 'rgb(243, 135, 11)' ,
             sesso : 'maschio'      
        },
        {
            nome : 'Felix', 
            eta : 9 ,
            colore : 'rgb(236, 95, 39)' ,
            sesso : 'maschio'      
        },
        {
             nome : 'Cleo', 
             eta : 5 ,
             colore : 'rgb(134, 116, 95)' ,
             sesso : 'femmina'      
        },
        {
             nome : 'Clio', 
             eta : 5 ,
             colore : 'rgb(134, 116, 95)' ,
             sesso : 'femmina'      
        },
        {
             nome : 'Zero', 
             eta : 1 ,
             colore : 'rgb(46, 38, 28)' ,
             sesso : 'maschio'      
        }
    ]

   //uso forEach er stampare a video ogni singolo oggetto
    gatti.forEach(gatto => $('#milestone-1 ul').append(stampaLista(gatto.colore,gatto.nome)));

    //creo un nuovo array di gatti che conterrà il fiocco
    const newGatti= gatti.map(gatto=>{
         let rosa= 'rgb(243, 111, 214)';
         let blu= 'rgb(0, 110, 255)';
         let genderFiocco = (gatto.sesso === 'femmina') ? rosa : blu;
         let opacity = gatto.eta /10;
         
         return {
               ...gatto,
               fiocco:
                    {
                         colore : genderFiocco,
                         opacity :  opacity
                    }
               };
     })
     console.log(newGatti);

     //vado a creare 2 array dove uno sarà di gatti gemmina e l'altro di gatti maschi usando il filter
     const gattiMaschi = newGatti.filter(gatto => gatto.sesso === 'maschio');
     const gattiFemmine = newGatti.filter(gatto => gatto.sesso === 'femmina');
     //console.log dei nuovi array
     console.log(gattiMaschi);
     console.log(gattiFemmine);

     //forEach per stamparli
     gattiMaschi.forEach(gatto => $('#milestone-2 .maschi ul').append(stampaLista(gatto.colore,gatto.nome,gatto.fiocco.colore,gatto.fiocco.opacity)));
     gattiFemmine.forEach(gatto => $('#milestone-2 .femmine ul').append(stampaLista(gatto.colore,gatto.nome,gatto.fiocco.colore,gatto.fiocco.opacity)));

     //unisco i due array in un unico array e lo destrutturo
   
});
//funzione per stampare a video 
const stampaLista = (colore,nome,...fiocco)=>{
     //dichiaro una variabile stringa vuota
     let fioccoStr='';
     //condizione per fiocco,se avrà degli elementi all'interno allora la stringa prenderà un nuovo valore
     if(fiocco.length > 0){
          fioccoStr=`
                    <i class="fas fa-ribbon" style= "color:${fiocco[0]};
                                             opacity:${fiocco[1]}";></i>
          `
     }
     const html= `
               <li>
                    <i class="fas fa-cat" style="color:${colore}";></i>
                    ${fioccoStr}
                    <span>${nome}</span>
                </li>
     `
     return html;
};
