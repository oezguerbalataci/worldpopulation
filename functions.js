const popDiv = document.getElementById("pop")
const langDiv = document.getElementById("lang")
const popText = document.getElementById("popText")
const langText = document.getElementById("langText")

function popButton(){
    popText.style.display= "block";
    langText.style.display = "none";
    popDiv.style.display= "inline";
    langDiv.style.display = "none";
}

function langButton(){
    popText.style.display= "none";
    langText.style.display = "inline";
    popDiv.style.display= "none";
    langDiv.style.display = "block";
}