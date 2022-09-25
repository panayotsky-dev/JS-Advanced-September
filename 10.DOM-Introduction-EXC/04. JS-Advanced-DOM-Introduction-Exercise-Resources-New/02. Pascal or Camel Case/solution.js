function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let split = input.split(' ')
  let first = ""
  let others= ""
  let result =  ""
  switch(currentCase){
    case "Camel Case":
      for (let i = 0; i < split.length; i++) {
        split[i] = split[i].toLowerCase()
        if (i == 0){
          first += split[0];     
          
        }else if (i > 0){
          split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
          others += split[i];
        }
        result = first + others;
        
      }      
      break;
    case "Pascal Case":
      split.forEach(element => {
        element = element.toLowerCase();
        element = element.charAt(0).toUpperCase() + element.slice(1);
        result += element;
      });
      break;
      
      
      default: result = "Error!"
      break;
  }
  document.getElementById('result').textContent = result;
}
