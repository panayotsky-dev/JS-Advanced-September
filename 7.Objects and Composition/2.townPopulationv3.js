function solve(strings){
    let towns = {};
    for (const info of strings) {          //forof
        let [town,population] = info.split(' <-> ')        
        population = +population;
        if(!towns[town]){
            towns[town] = 0;
        }
        towns[town] += population;       
    }
    for (const town in towns) {     //forif
        console.log(`${town} : ${towns[town]}`)
        
    }

}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)