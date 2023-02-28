const cars = [ 
    {
        "company": "Hennessey",
        "model": "Venom",
        "max-speed": 485
    },
    {
        "company": "Bugatti",
        "model": "Chiron Super Sport",
        "max-speed": 490
    },
    {
        "company": "Koenigsegg",
        "model": "Jesko",
        "max-speed": 483
    },
    {
        "company": "9ff",
        "model": "GT9-R",
        "max-speed": 413
    }
]

function speed_sum(cars) {
    sum = 0;
    for(let i = 0; i < 4; i++){
        sum += cars[i]['max-speed'];
    }
    return sum;
}

function first_car(cars){
    return cars[0]
}

document.write("<h3>Car company: " + first_car(cars)["company"] + "</h3>")
document.write("<h3>Model: " + first_car(cars)["model"] + "</h3>")
document.write("<h3>Max speed: " + first_car(cars)["max-speed"] + "</h3>")
document.write("\n\n")

for(let i = 1; i < 4; i++){
    document.write("<h3>Car company: " + cars[i]["company"] + "</h3>")
    document.write("<h3>Model: " + cars[i]["model"] + "</h3>")
    document.write("<h3>Max speed: " + cars[i]["max-speed"] + "</h3>")
    document.write("\n\n")
}

document.write("<h3>Average speed: " + speed_sum(cars) / 4 + " km/h</h3>")

