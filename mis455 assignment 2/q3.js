function findGreatest() {

    var num1 = parseInt(document.getElementById("num1Box").value);

    var num2 = parseInt(document.getElementById("num2Box").value);

    var num3 = parseInt(document.getElementById("num3Box").value);

    if (num1 >= num2 && num1 >= num3) {

        console.log("Greatest Number = " + num1);

    }
    else if (num2 >= num1 && num2 >= num3) {

        console.log("Greatest Number = " + num2);

    }
    else {

        console.log("Greatest Number = " + num3);

    }

}