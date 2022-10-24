function createTickets(input,criteria){
    class Tickets{
        constructor(destination,price,status){
            this.destination =  destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = []
    input.forEach(inputs => result.push(new Tickets(...inputs.split('|'))));
        
    let sortNumbers = ((a,b) => a-b);
    let sortStrings = ((a,b) => a[criteria].localeCompare(b[criteria]));

    return criteria === 'price' ? result.sort(sortNumbers) : result.sort(sortStrings);

 
    
}


   //  if (criteria === 'price'){
    //    return result.sort(sortNumbers)
    // }else {
    //     return result.sort(sortStrings);
    // }