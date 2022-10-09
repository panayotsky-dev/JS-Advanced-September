function validate() {
    let emailPattern =  /[a-z]+@[a-z]+\.[a-z]+/;
    let emailElement = document.getElementById('email');

    emailElement.addEventListener('change', Changed);

    function Changed(){
        if (emailPattern.test(emailElement.value)){
            emailElement.classList.remove('error')
        }else{
            emailElement.classList.add('error');
        }
    }


}