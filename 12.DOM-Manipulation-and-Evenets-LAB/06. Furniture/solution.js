function solve() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click',generate);
    buttons[1].addEventListener('click',buy)
function generate() {
    let currentItems = JSON.parse(document.querySelectorAll('textarea')[0].value);
    let tableBody = document.getElementsByTagName('tbody')[0]
    
    for (let item of currentItems) {
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td><img src = ${item.img} /></td>` +
                            `<td><p>${item.name}</p></td>` +
                            `<td><p>${item.price}</p></td>` +
                            `<td><p>${item.decFactor}</p></td>` +
                            `<td><input type="checkbox"></td>`;
        tableBody.appendChild(tableRow)
        
    }

}
function buy() {
    let resultArea = document.querySelectorAll('textarea')[1];
    let table = Array.from(document.querySelectorAll('tbody tr'));
    let res = [];
    for(let el of table){
        if(el.querySelector('input[type="checkbox"]:checked')){
            let tableData = Array.from(el.querySelectorAll('td'));
                tableData.que
                let info = {
                    name:tableData[1].children[0].textContent,
                    price: tableData[2].children[0].textContent,
                    decFactor: tableData[3].children[0].textContent                    
                }
                res.push(info);           
        }
    }
    // document.querySelectorAll('tbody tr')[0].querySelector('input[type=checkbox]:checked')
        let names = "";
        let totalPrice = 0;
        let decFactor = 0 ;
    for(let i = 0;i<res.length;i++){
        let item = res[i];
        let separator = i == res.length - 1 ? "" : ", ";
         names += item.name + separator,
         totalPrice += Number(item.price);
         decFactor += Number(item.decFactor);
        }
        decFactor /= res.length;
        resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`
}
 
}

//name,price,decoration factor

// WHEN generate button add a new row to the table with img,name,price,decoration factor.

//Buy  button is clicked CHECKBOXES THAT ARE Marked and show the result textbox the names SEPARATED by (", ")
// format "Bought furniture: {furniture1}, {furniture2}...."
// next line ""Total price: {totalPrice}" 
// next line "Average decoration factor: {decFactor}"

// input example:
// [{"name": "Sofa",
//  "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
//   "price": 150,
//    "decFactor": 1.2}]

// document.querySelector('tbody').appendChild(document.createElement('td'))
// let tableData = document.createElement('td');
        // let img = document.createElement('img');
        // img.setAttribute('src',item.img);
        // tableData.appendChild(img);
        // tableRow.appendChild(tableData);
        // let townTd = document.createElement('td');
        // let townName = document.createElement('p');
        // townName.innerText = item.name;
        // townTd.appendChild(townName);
        // tableRow.appendChild(townTd);
        // tableBody.appendChild(tableRow);