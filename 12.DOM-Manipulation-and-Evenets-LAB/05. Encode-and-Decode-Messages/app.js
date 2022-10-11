function encodeAndDecodeMessages() {
    // let operation= {
    //     encode: Number(currentLetter) + Number(1),
    //     decode: Number(currentLetter) - Number(1)
    // }

    // let inputText = document.querySelector('textarea[placeholder]');
   [inputText,disableTextArea] = Array.from(document.querySelectorAll('textarea'));  
   [encodeBtn,decodeBtn] = Array.from(document.querySelectorAll('button'));
   encodeBtn.addEventListener('click',encode)
   decodeBtn.addEventListener('click',decode)
   
   let resultDecode =''
   let first = ''
function encode (){
    resultDecode = inputText.value;
    let resultEncode =''
    // console.log('encode')    
    for (const letter of inputText.value) {
         
        resultEncode += String.fromCharCode(letter.charCodeAt()+ 1)
    }
    document.querySelector('textarea[disabled]').innerHTML = resultEncode;
    return document.querySelector('textarea[placeholder]').value = '';  
    

}
function decode(){
    
    document.querySelector('textarea[disabled]').innerHTML = resultDecode;

}
}


// let asd =input.charCodeAt(input)
// let bbb = String.fromCharCode(asd+1)