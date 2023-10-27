let nome = document.getElementById("nome").value;
let kilometri = document.getElementById("kilometri").value;
let genera = document.getElementById("genera");

// let minorenne = document.getElementById("minorenne");
// let standard = document.getElementById("standard");
// let senior = document.getElementById("senior");

let eta = document.getElementById("eta").value;

let prezzoPerKm = 0.21
let km =parseInt(kilometri);
let prezzoTotale = (km * prezzoPerKm);








    
    genera.addEventListener("click", function(){
        
    (prezzoTotale *= 0.6);
    console.log("prezzo totale dopo = ", prezzoTotale);
    console.log("nome dopo prima = ", nome);
    console.log("eta dopo prima = ", eta);  
    })
    
    
    if (eta == "senior") {
        (prezzoTotale *= 0.6);

    }

else if (eta == "minorenne") {

    (prezzoTotale *= 0.8);
}
    

else if (eta == "standard") {

    (prezzoPerKm * km) ;
}

   
