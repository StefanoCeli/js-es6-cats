$(document).ready(function(){
    const cars = [
        {
            marca : "bmw",
            modello : "x1",
            alimentazione : "benzina"
        },
        {
            marca : "renault",
            modello : "captur",
            alimentazione : "diesel"
        },
        {
            marca : "opel",
            modello : "corsa",
            alimentazione : "gpl"
        },
        {
            marca : "fiat",
            modello : "panda",
            alimentazione : "metano"
        },
        {
            marca : "peugeot",
            modello : "206",
            alimentazione : "gpl"
        },
        {
            marca : "mercedes",
            modello : "classe-a",
            alimentazione : "benzina"
        },
        {
            marca : "bmw",
            modello : "x6",
            alimentazione : "diesel"
        },
        {
            marca : "opel",
            modello : "astra",
            alimentazione : "metano"
        },
        {
            marca : "fiat",
            modello : "500",
            alimentazione : "gpl"
        },
        {
            marca : "ford",
            modello : "mustang",
            alimentazione : "benzina"
        },
    ]

    const autoBenzina= cars.filter((car)=> car.alimentazione==="benzina");
    printOutput(autoBenzina, $('.container .benzina'));

    const autoDiesel= cars.filter((car)=> car.alimentazione==="diesel");
    printOutput(autoDiesel, $('.container .diesel'));


    const autoRestanti= cars.filter((car)=> car.alimentazione!=="benzina" && car.alimentazione!=="diesel" );
    printOutput(autoRestanti, $('.container .restanti'));

});

function printOutput(cars,target){
   
    cars.forEach((car)=> {
        let {marca,modello,alimentazione}= car;
        let html = `
                    <ul>
                    <li>Marca:${marca}</li>
                    <li>Modello:${modello}</li>
                    <li>Alimentazione:${alimentazione}</li>
                    </ul>
        `

        target.append(html);
    })
   
}