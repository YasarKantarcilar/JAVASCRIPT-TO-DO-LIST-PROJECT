const list = document.getElementById("list");


const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

addButton.addEventListener("click", function(e){
    e.preventDefault()
    const input = document.getElementById("to-do-input");
    const inputValue = input.value;
    const newLi = document.createElement("li");
    newLi.style.listStyleType = "none";
    newLi.id = "not-checked";
    newLi.innerHTML = inputValue;
    newLi.addEventListener("click", function(){
        newLi.remove()
    })
    list.appendChild(newLi);
    input.value = "";
})
