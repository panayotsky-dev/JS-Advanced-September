// You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it.
function solve(name,population,treasury){
    let obj={
        name:name,
        population:+population,
        treasury:+treasury
    }
    return obj;
}
solve('Tortuga',
7000,
15000
)