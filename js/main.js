let nome = document.getElementById("nome");
let kilometri = document.getElementById("kilometri");
let genera = document.getElementById("genera")

// let minorenne = document.getElementById("minorenne");
// let standard = document.getElementById("standard");
// let senior = document.getElementById("senior");

let eta = document.getElementById("eta");

let prezzoPerKm = 0.21
let km =parseInt(kilometri);
let prezzoTotale = (km * prezzoPerKm);



console.log("eta: ", eta);
console.log("prezzo totale prima = ", prezzoTotale);




    
    genera.addEventListener("click", function(){
        
    (prezzoTotale *= 0.6);
    console.log("prezzo totale dopo = ", prezzoTotale);
        
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

   
