//get windchill if applicable

//equation is approximation: windchill = temp - (windspeed * .7)

let temp = 25
let windspeed = 5
if (temp < 10 && windspeed> 4.8) {
    let windchill = (temp - (windspeed*.7)) + "&deg;C"
    document.getElementById("windchill").innerHTML = windchill;
    console.log(windchill)
} else {
    windchill = "N/A"
    document.getElementById("windchill").innerHTML = windchill;
    console.log(windchill)
}
console.log(windchill);

