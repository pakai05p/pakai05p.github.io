let temperatureData = [-2.5, 19, 13, 17, 24, 4, 30]


let dailyOffers = [
    "Forró csoki",
    "meleg tea",
    "Finom süti",
    "Fagyi",
    "Jéghideg limonádé"
]

let temperatureLimits = [0, 15, 20, 25, 1000]

function temperatureShow() {
    let daysValue = document.getElementById("days").value
    let tempShow = document.querySelector("div[id = 'tempShow']")
    tempShow.innerHTML = temperatureData[daysValue], "°C"
    offerShow(daysValue); temperatureMinimum(); temperatureMaximum(); temperatureAverege();
}

function offerShow(daysValue) {
    for (i = 0; i < temperatureData.length; i++) {
        if (temperatureData[daysValue] < temperatureLimits[i]) {
            let offerShow = document.querySelector("div[id = 'offerShow']");
            offerShow.innerHTML = dailyOffers[i]
            break
        }
    }
}

function temperatureMinimum() {
    let Smallest
        = temperatureData[0]
    for (i = 0; i < temperatureData.length; i++) {
        if (Smallest > temperatureData[i]) {
            Smallest = temperatureData[i]
        }
    }
    let minimumTemperature = document.querySelector("div[id=minimumTemperature]")
    minimumTemperature.innerHTML = Smallest, "°C"
}

function temperatureMaximum() {
    let biggest = temperatureData[0]
    for (i = 0; i < temperatureData.length; i++) {
        if (biggest < temperatureData[i]) {
            biggest = temperatureData[i]
        }
    }
    let maximumTemperature = document.querySelector("div[id=maximumTemperature]")
    maximumTemperature.innerHTML = biggest, "°C"
}

function temperatureAverege() {

    let sum = 0
    for (i = 0; i < temperatureData.length; i++) {
        sum += temperatureData[i]
    }

    let db = 0
    for (i = 0; i < temperatureData.length; i++) {
        if (temperatureData[i] < 1000) {
            db++
        }
    }
    let avarage =parseInt( sum / db)
    let avaregeTemperature = document.querySelector("div [id='avarageTemperature']")
    avaregeTemperature.innerHTML = (sum/db), "°C"
}
temperatureShow(); offerShow (); temperatureMinimum(); temperatureMinimum(); temperatureMaximum(); temperatureAverege();