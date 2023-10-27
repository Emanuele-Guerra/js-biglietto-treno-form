let nome = document.getElementById("nome")
let kilometri = document.getElementById("kilometri")
let minorenne = document.getElementById("minorenne")
let standard = document.getElementById("standard")
let senior = document.getElementById("senior")

let km = ""

let prezzoPerKm = 0.21

let prezzoTotale = (km * prezzoPerKm);



if (eta == senior ) {

    (prezzoTotale *= 0.6)
}


else if (eta == minorenne) {

    (prezzoTotale *= 0.8)
}
    

else (eta == standard) {

    (prezzoPerKm * km) 
}

   
