// Set variables for button and input
var addButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

//Add new item to list as well as delete button child
function addListElement() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    button.appendChild(document.createTextNode("Delete"));
    ul.appendChild(li);
    li.appendChild(button);
    input.value="";
}

function addListAfterClick() {
    if (inputLength() > 0) {addListElement();}
}

function addListAfterKeydown(event) {
    if (inputLength() > 0 && event.which === 13) {addListElement();}
}
// Onclick listener to toggle done class on LI items or remove when delete button is clicked
ul.onclick = function(event) {
    console.log(event.target.nodeName)
    switch (event.target.nodeName) {
        case 'LI':
            event.target.classList.toggle("done");
            break;
        case 'BUTTON':
            event.target.parentElement.remove();
            break;
        default:
            break;
    }
    
    // if(event.target.nodeName === 'LI') {event.target.classList.toggle("done");}
    // else {event.target.parentElement.remove();}
}

//Event listener for clicking 'Enter' button
addButton.addEventListener("click", addListAfterClick);

//Listener for 'Enter' keypress
input.addEventListener("keydown", addListAfterKeydown);