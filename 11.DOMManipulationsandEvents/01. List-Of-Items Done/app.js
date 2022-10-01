function addItem() {

    let textInput = document.getElementById("newItemText").value ;
    let newLi = document.createElement("li") ;
    newLi.textContent = textInput ;
    document.getElementById("items").appendChild(newLi);

    
}