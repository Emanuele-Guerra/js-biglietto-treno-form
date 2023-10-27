let nome = document.getElementById("nome");
let km = document.getElementById("kilometri");
// let minorenne = document.getElementById("minorenne");
// let standard = document.getElementById("standard");
// let senior = document.getElementById("senior");

let eta = document.getElementById("eta");

let prezzoPerKm = 0.21

let prezzoTotale = (km * prezzoPerKm);
let genera = document.getElementById("genera");

console.log("eta: ", eta);



if (eta == "senior" && genera != null) {

    (prezzoTotale *= 0.6);
    document.getElementById("costo").innerHTML("");
}


else if (eta == "minorenne") {

    (prezzoTotale *= 0.8);
}
    

else if (eta == "standard") {

    (prezzoPerKm * km) ;
}

   
