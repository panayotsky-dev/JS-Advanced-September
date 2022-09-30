function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];
   function onClick () {
      let input = JSON.parse(document.getElementById('inputs').children[1].value);
      let bestRestarauntInfo = document.querySelector('#bestRestaurant p')
      let bestRestaurantWorker = document.querySelector('#workers p')
      for(let data of input){
         let [name,workerList] = data.split(" - ");
         if(!result.find(e=>e.name ===name)){
            result.push({
               name,
               avgSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               workerList: []
            });
            let currentRestaurant = result.find(e=>e.name===name);
            workerList =workerList && workerList.split(", ");
            for(let currentWorker of workerList){
               updateRestaurant(currentRestaurant, currentWorker);
            }
         }
         
      }   
      let bestRestaraunt = result.sort((a,b) => b.avgSalary - a.avgSalary)[0];
      bestRestarauntInfo.textContent = `Name: ${bestRestaraunt.name} Average Salary: ${bestRestaraunt.avgSalary.toFixed(2)} Best Salary: ${bestRestaraunt.bestSalary.toFixed(2)}`
      
      let sortListOfWorker = bestRestaraunt.workerList.sort((a,b) => b.salary - a.salary);
      let buff = "";
      for (let worker of sortListOfWorker) {
         buff += `Name: ${worker.name} With Salary: ${worker.salary} `

      }
      bestRestaurantWorker.textContent += buff;
      
   }

   function updateRestaurant(obj,worker){
      let [name,salary] = worker.split(" ");
      salary = Number(salary);
      obj.sumSalary += Number(salary);
      if(obj.bestSalary < salary){
         obj.bestSalary = salary;
      }
      obj.workerList.push({
         name,
         salary,
      })
      obj.avgSalary = obj.sumSalary / obj.workerList.length;
   }
}