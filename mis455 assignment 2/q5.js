function calculateDiscount() {

    var name = document.getElementById("nameBox").value;

    var fees = parseFloat(document.getElementById("feeBox").value);

    var birthYear = parseInt(document.getElementById("birthYearBox").value);

    var age = 2026 - birthYear;

    var discount = 0;

    if (fees > 50000 && age > 21) {

        discount = fees * 0.15;

    }
    else if (fees > 40000 && age > 20) {

        discount = fees * 0.10;

    }
    else if (fees > 30000 && age > 19) {

        discount = fees * 0.05;

    }
    else {

        discount = fees * 0.02;

    }

    var payable = fees - discount;

    document.getElementById("discountBox").value = discount;

    document.getElementById("payableBox").value = payable;

    document.getElementById("nameResultBox").value = name;

}