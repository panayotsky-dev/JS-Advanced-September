// The input comes as array of strings. Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.
// Output
// As output, you must print all the towns and their population.
function solve(array){
   
   let kurec = array
   .map(element => {
    let data = element.split(' <-> ');
    return {
        name: data[0],
        population: Number(data[1]),
        };
   });
   
   let deeba={};
   for (let town of kurec) {
    if (deeba[town.name] === undefined){
        deeba[town.name] = town.population;
    }else{
        deeba[town.name] += town.population;
    }
    
   }for (const [town, population] of Object.entries(deeba)) {
    console.log(`${town} : ${population}`);
}
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)
