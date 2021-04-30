$(document).ready(function(){
    
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
    gatti.forEach(gatto => $('#milestone-1 ul').append(stampaLista(gatto)));
   
});

const stampaLista= (gatto)=>{
     const html =`
               <li>
                    <i class="fas fa-cat" style="color:${gatto.colore};"></i>
                    <span>${gatto.nome}</span>
                </li>
     `
     return html
}

