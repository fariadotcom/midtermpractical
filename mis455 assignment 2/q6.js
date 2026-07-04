function checkTemperature() {

    var temp = parseInt(document.getElementById("tempBox").value);

    if (temp < 0) {

        document.getElementById("resultBox").value = "Freezing Weather";

    }
    else if (temp >= 0 && temp < 10) {

        document.getElementById("resultBox").value = "Very Cold Weather";

    }
    else if (temp >= 10 && temp < 20) {

        document.getElementById("resultBox").value = "Cold Weather";

    }
    else if (temp >= 20 && temp < 30) {

        document.getElementById("resultBox").value = "Normal in Temp";

    }
    else if (temp >= 30 && temp < 40) {

        document.getElementById("resultBox").value = "Its Hot";

    }
    else {

        document.getElementById("resultBox").value = "Its Very Hot";

    }

}