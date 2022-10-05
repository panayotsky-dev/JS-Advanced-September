function addItem() {
    let itemsElement = document.getElementById('items');
    let textInput = document.getElementById("newItemText").value ;

    let createLi = document.createElement("li") ;

    createLi.textContent = textInput; 
    
    let deleteElement = document.createElement("a") ;
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove();
    });

    createLi.appendChild(deleteElement)
    itemsElement.appendChild(createLi);


}
// function deleteItem(){
// console.log(`click`)
// }