const imgElement = document.getElementById("light");
console.log(imgElement);

const btnElement = document.getElementById("status");
console.log(btnElement);

// Prima del click isOn è false
let lightOn = false; 

//  Aspetta che l'utente faccia click sul bottone, una volta cliccato applica questa funzione
btnElement.addEventListener("click", function() {
    // Dopo il primo click; inverte isOn a true
    if( lightOn= !lightOn){
     imgElement.src = "././img/yellow_lamp.png"; 
     imgElement.alt ="Lampadina Accesa";
     btnElement.innerHTML = ("Spegni");
    //  Dopo il secondo click: isOn = !isOn; inverte isOn a false
   } else{
    imgElement.src = "././img/white_lamp.png"; 
     imgElement.alt ="Lampadina Spenta";
     btnElement.innerHTML = ("Accendi");
   }
    
}) 


