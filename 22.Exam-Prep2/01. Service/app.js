window.addEventListener("load", solve);


function solve(){
document.querySelector("button[type=submit]").addEventListener("click", createTask); // връща първият намерен
let productType = document.getElementById("type-product");
let description = document.getElementById("description");
let name = document.getElementById("client-name");
let phone = document.getElementById("client-phone");
let receiveSection = document.getElementById("received-orders");
let finishSection = document.getElementById("completed-orders");
let clearButton = finishSection.querySelector("button");
clearButton.addEventListener("click",clearTask);



function createTask(e){
    e.preventDefault(); //предотвратяваме презареждането.
    let typeValue = productType.value;
    let descriptionValue = description.value;
    let nameValue = name.value; 
    let phoneValue = phone.value;
    

    if(!descriptionValue || !phoneValue || !nameValue){
        return 
    }
    description.value = "";
    name.value = "";
    phone.value = "";
    createOrder(typeValue, descriptionValue, nameValue, phoneValue)
}
    function createOrder(typeValue,descriptionValue,nameValue,phoneValue){
        
        let divContainer = document.createElement("div");
        divContainer.classList.add("container");

        let h2 = document.createElement("h2");
        h2.textContent = `Product type for repair: ${typeValue}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${nameValue}, ${phoneValue}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionValue}`;

        let startButton = document.createElement('button');
        startButton.classList.add(`start-btn`);
        startButton.textContent= `Start repair`
        startButton.addEventListener('click', startRepair);

        let finishButton = document.createElement('button');
        finishButton.classList.add(`finish-btn`);
        finishButton.textContent= `Finish repair`
        finishButton.setAttribute('disabled', true);
        finishButton.addEventListener('click', finishRepair);

        divContainer.appendChild(h2)
        divContainer.appendChild(h3)
        divContainer.appendChild(h4)
        divContainer.appendChild(startButton)
        divContainer.appendChild(finishButton)        
        receiveSection.appendChild(divContainer);        
    }

    function startRepair(e){
        e.target.setAttribute("disabled", true);        
        let finishButton = e.target.parentElement.getElementsByClassName('finish-btn')[0];
        finishButton.disabled = false;      
    }
    function finishRepair(e){
        let divContainer = e.target.parentElement;
        finishSection.appendChild(divContainer);
        [button1,button2] = divContainer.querySelectorAll("button");
        button1.remove();
        button2.remove();

    }
    function clearTask(){
        let conteiners = finishSection.querySelectorAll(".container");
        Array.from(conteiners).forEach(container => container.remove());
    }
}

//     let inputDescription = document.getElementById("description");
//     let inputClientName = document.getElementById("client-name");
//     let inputClientPhone = document.getElementById("client-phone");
//     let selectedProductType = document.getElementById('type-product').value;
//     [submitButton,clearButton] = document.getElementByTagName('button')