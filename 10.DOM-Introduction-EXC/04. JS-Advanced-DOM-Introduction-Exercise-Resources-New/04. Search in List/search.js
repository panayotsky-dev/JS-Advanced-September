function search() {
   let matched = 0 ;
   let townList = Array.from(document.querySelectorAll('ul li'));
   let searchText = document.getElementById('searchText').value;
   for(let item of townList) {
      let text = item.textContent;
      if(text.includes(searchText)){
         item.style.textDecoration = 'underline';
         item.style.fontWeight = 'bold';

         matched++;
      }else{
         item.style.textDecoration = 'none';
         item.style.fontWeight = 'unset';
      }
   }
   document.getElementById('result').innerHTML = `${matched} matches found`;
}