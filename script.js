const cars = [ 
    {
        "company": "Hennessey",
        "model": "Venom",
        "max-speed": "485"
    },
    {
        "company": "Bugatti",
        "model": "Chiron Super Sport",
        "max-speed": "490"
    },
    {
        "company": "Koenigsegg",
        "model": "Jesko",
        "max-speed": "483"
    },
    {
        "company": "9ff",
        "model": "GT9-R",
        "max-speed": "413"
    }
]

function first_car(cars) {
    document.write("<h3>Car company: " + cars[0]["company"] + "</h3>")
    document.write("<h3>Model: " + cars[0]["model"] + "</h3>")
    document.write("<h3>Max speed: " + cars[0]["max-speed"] + "</h3>")
    return true
}

first_car(cars)

for(let i = 1; i < 4; i++){
    document.write("<h3>Car company: " + cars[i]["company"] + "</h3>")
    document.write("<h3>Model: " + cars[i]["model"] + "</h3>")
    document.write("<h3>Max speed: " + cars[i]["max-speed"] + "</h3>")
    document.write("\n\n")
}

function re(cars){
  return re;
}
console.log(cars)