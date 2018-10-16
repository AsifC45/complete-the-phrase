// COMPLETE THE PHRASE DEMO

// Add evetn listeners
document.getElementById("hello").addEventListener("click", helloSolution);
document.getElementById("picture").addEventListener("click", pictureSolution);
document.getElementById("watched-pot").addEventListener("click", watchedpotSolution)

// Evetn Function
function helloSolution() {
    document.getElementById("solution").innerHTML = "...World!";
}

function pictureSolution() {
    document.getElementById("solution").innerHTML = "...a thousand words.";
}

function watchedpotSolution() {
    document.getElementById("solution").innerHTML = "...never boils.";
}