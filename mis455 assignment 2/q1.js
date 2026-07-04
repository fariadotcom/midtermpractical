function findGreater() {

    var num1 = parseInt(document.getElementById("num1Box").value);

    var num2 = parseInt(document.getElementById("num2Box").value);

    if (num1 > num2) {

        console.log("Greater Number = " + num1);

    }
    else if (num2 > num1) {

        console.log("Greater Number = " + num2);

    }
    else {

        console.log("Both numbers are equal.");

    }

}