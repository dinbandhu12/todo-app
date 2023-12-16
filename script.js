const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

addTask = () => {
    if(inputBox.value === ""){
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10006;";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
    checkTaskCount();
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

// save to local storage
saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

// show data from local storage
showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


