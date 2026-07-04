function calculateGrade() {

    var marks = parseInt(document.getElementById("marksBox").value);

    if (marks >= 90) {

        document.getElementById("gradeBox").value = "A";

    }
    else if (marks >= 85) {

        document.getElementById("gradeBox").value = "A-";

    }
    else if (marks >= 80) {

        document.getElementById("gradeBox").value = "B+";

    }
    else if (marks >= 75) {

        document.getElementById("gradeBox").value = "B";

    }
    else if (marks >= 70) {

        document.getElementById("gradeBox").value = "B-";

    }
    else if (marks >= 65) {

        document.getElementById("gradeBox").value = "C+";

    }
    else if (marks >= 60) {

        document.getElementById("gradeBox").value = "C";

    }
    else if (marks >= 55) {

        document.getElementById("gradeBox").value = "C-";

    }
    else if (marks >= 50) {

        document.getElementById("gradeBox").value = "D+";

    }
    else if (marks >= 45) {

        document.getElementById("gradeBox").value = "D";

    }
    else {

        document.getElementById("gradeBox").value = "F";

    }

}