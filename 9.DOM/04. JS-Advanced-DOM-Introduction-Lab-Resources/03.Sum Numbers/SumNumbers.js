function calc() {
    let numberOne = document.getElementById('num1').value;
    let numberTwo = document.getElementById('num2').value;
    let result = Number(numberOne) + Number(numberTwo);
    document.getElementById('sum').value = result;
}
