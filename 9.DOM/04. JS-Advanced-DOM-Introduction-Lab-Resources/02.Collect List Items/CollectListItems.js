function extractText() {
    let itemsText = document.querySelectorAll("ul#items li");
    let textarea = document.querySelector("#result");
    for(let text of itemsText) {
        textarea.value += text.textContent + "\n";
    }     
}