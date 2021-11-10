/* Modifier le code ci dessous pour réaliser l'exercice */
let x = 3
const y = 6
if(x === y) {
    document.getElementById('monDiv').innerHTML = "<p>La variable x est strictement égal à la variable y</p>";
}

else {
    document.getElementById('monDiv').innerHTML = "<p>La variable x n'est pas strictement égal à la variable y</p>";
    x += 3
}

if(x === y) {
    document.getElementById('monDiv2').innerHTML = "<p>La variable x est strictement égal à la variable y</p>";
}

else {
    document.getElementById('monDiv2').innerHTML = "<p>La variable x n'est pas strictement égal à la variable y</p>";
}