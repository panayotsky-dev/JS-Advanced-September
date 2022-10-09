function create(words) {

   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      
      p.innerText = word;
      p.style.display =  "none";      
      
      div.appendChild(p);
      div.addEventListener('click', showParagraph)
      
      document.getElementById('content').appendChild(div)
   }
   function showParagraph(event){
      // event.target.p.style.display = "block";

      if (event.target.nodeName === "P"){
         return;
      }
      let p = event.target.children[0];
      p.style.display = "block";
   }

   
   //div.appendChild(p);
   // p.innerText = "asd"
   // document.getElementById('content').appendChild(div).appendChild(p);
   
}