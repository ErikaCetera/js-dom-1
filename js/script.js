const imgElement = document.getElementById("light");
console.log(imgElement);

const btnElement = document.getElementById("status");
console.log(btnElement);

btnElement.addEventListener("click", function() {
     imgElement.src = "././img/yellow_lamp.png"; 
     imgElement.alt ="Lampadina Accesa"
})