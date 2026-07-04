function checkCharacter() {

    var ch = document.getElementById("charBox").value;

    if (ch == "A" || ch == "a" ||
        ch == "E" || ch == "e" ||
        ch == "I" || ch == "i" ||
        ch == "O" || ch == "o" ||
        ch == "U" || ch == "u") {

        document.getElementById("resultBox").value = "Vowel";

    }
    else {

        document.getElementById("resultBox").value = "Consonant";

    }

}