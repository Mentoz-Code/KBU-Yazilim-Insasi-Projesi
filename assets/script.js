//          VARIABLES AND CONSTANS ASSIGNMENT
const inputBox = document.getElementById("inputBox");
const listCont = document.getElementById("listContainer");
const delBtn = document.getElementById("deleteAllBtn");


//         ADD BUTTON FUNCTION
function addTask() {
    if (inputBox.value === '') { //if the input box is empty...
        return;
    }
    else {
        const li = document.createElement("li"); //stores "li" in the li variable
        li.innerHTML = inputBox.value; //text inside li = whatever is in the input field
        listCont.appendChild(li); //adds what you just wrote to the list
        const span = document.createElement("span");
        span.innerHTML = "\u00d7"; //this is the code for the x mark
        li.appendChild(span); //add the span
    }
    inputBox.value = '';
    saveData();
}

//         ENTER KEY ADDS ITEMS

inputBox.addEventListener("keydown", function(e) { //waits for enter key to be pressed
    if (e.key === "Enter") {
        addTask();
    }
});

//         CLICK FUNCTION TO CROSS OR DELETE
listCont.addEventListener("click", function(e){ // e is the event object
    // it will check where user clicked...
    if (e.target.tagName === "LI"){ //if user clickes on the unchecked circcle it will cross it out
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ //if the user clicks on the x it will remove the task
        e.target.parentElement.remove();
        saveData();
    }
});

//          DELETE ALL FUNCTION
delBtn.addEventListener("dblclick", function(){ //on doubleclick
    listCont.innerHTML = ''; //deletes content
    saveData();
});

function saveData() {
    localStorage.setItem("data", listCont.innerHTML); //saves data to local storage
}

function render() {
    listCont.innerHTML = localStorage.getItem("data"); //renders data when refresh
}

render();