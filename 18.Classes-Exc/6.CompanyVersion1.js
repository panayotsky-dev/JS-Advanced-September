class Company{
    constructor(){
        this.departments = {}

    }
    addEmployee(name,salary,position,department){
        if (!name || !salary || salary < 0 || !position || !department ){
            throw new Error("Invalid input!")
        }
        if (!this.departments[department]){
           this.departments[department] = {
            averageSalary: 0,
            sumSalary: 0,
            employees: []
           }
        }
        
        
        this.departments[department].employees.push({name,salary,position})
       
        this._updateDepartmentValues(this.departments[department], salary)

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
     _updateDepartmentValues(department,salary){
        department.sumSalary += Number(salary)
        department.avgSalary = department.sumSalary / department.employees.length
        // this.departments[department].avgSalary += this.departments[department].sumSalary / this.departments[department].employee.length

     }
    bestDepartment(){
        let bestDepart =Object.entries(this.departments)
        .sort(([depNameOne,depInfoOne],[depNameTwo,depInfoTwo])=>{
          return   depInfoTwo.avgSalary - depInfoOne.avgSalary
        })[0]
        let sortEmployees = bestDepart[1].employees.sort((a,b) =>{
            return b.salary - a.salary || a.name.localeCompare(b.name)
        })

        let buff =`Best Department is: ${bestDepart[0]}\n`
            buff += `Average salary: ${bestDepart[1].avgSalary.toFixed(2)}\n`

            // for(let emp of sortEmployees){
            //     buff += `${emp.name} ${emp.salary} ${emp.position}\n`
            // }
           

            for(let i = 0;i < sortEmployees.length; i++){
                let emp = sortEmployees[i];
                buff +=`${emp.name} ${emp.salary} ${emp.position}`
                buff += i=== sortEmployees.length -1 ? "" : `\n`
            }
            return buff
        

        
//         bestDepartment()
// This function should return the department with the highest average salary rounded to the second digit 
// after the decimal point and its employees sorted by their salary by descending order 
// and by their name in ascending order as a second criterion:

        
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
