function checkVote() {

    var age = parseInt(document.getElementById("ageBox").value);

    if (age >= 18) {

        document.getElementById("resultBox").value = "Eligible to Vote";

    }
    else {

        document.getElementById("resultBox").value = "Not Eligible to Vote";

    }

} 