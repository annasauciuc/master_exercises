var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var delBtn = document.getElementsByClassName(".delete");




function inputLength() {
    return input.value.length;
}


function removeParent(evt) {
    evt.target.parentNode.remove();
}

function createListElement() {
    var count = 0;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    li.onclick = underlineLI;
    ul.appendChild(li);
    button.onclick = removeParent;
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// function toggleItem() {
//     lis.classList.toggle("done");
//}


function underlineLI(evt) {
    evt.target.parentNode.classList.toggle("done");
}



button.onclick = addListAfterClick;

input.onkeypress = addListAfterKeypress;