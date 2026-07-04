function welcome(){

    alert("Welcome to Dream Bakery!");

}

function offer(){

    alert("Today's Offer: Get 10% OFF on all Cakes!");

}


function buy(){

    alert("Thank you for your purchase!");

}


function sendMessage(){

    var name = document.getElementById("nameBox").value;
    var email = document.getElementById("emailBox").value;
    var message = document.getElementById("messageBox").value;

    if(name == "" || email == "" || message == ""){

        alert("Please fill in all the fields.");

    }

    
    else{

        alert("Thank you " + name + "! Your message has been sent.");

    }

}