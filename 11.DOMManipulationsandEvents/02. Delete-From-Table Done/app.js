function deleteByEmail() {
    let inputText = document.querySelector('input[name="email"]').value
    let emailElements = document.querySelectorAll('tr td:nth-of-type(2)')
    let resultElement = document.getElementById('result');
   
    let convertedEmailElements = Array.from(emailElements)
    let targetElement = convertedEmailElements.find( x => x.textContent == inputText);
    if(targetElement){
        targetElement.parentNode.remove()
        resultElement.textContent = 'Deleted';
    }else{
        resultElement.textContent = "Not found.";
    }
    
}




 // for (const element of emailElements) {
    //     console.log(element.textContent)
    // }



    // targetElement.parentNode.removeChild(targetElement); 