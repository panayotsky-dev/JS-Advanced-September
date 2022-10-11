function addItem() {
    let itemInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');

    let option = document.createElement("option")
    option.textContent = itemInput.value;
    option.value = valueInput.value;
    let select = document.getElementById("menu");
    select.appendChild(option);
    
    itemInput.value = ''
    valueInput.value = ''
}