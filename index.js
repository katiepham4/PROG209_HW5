document.getElementById("theGrandList").style.display = "none";
PersonArray = []; // define an array of type Person

function formSubmitEvent() {
    let Person = {
        name:  document.getElementById("custname").value,
        city: document.getElementById("city").value,
        paymentpreference: document.getElementById("paymentpreference").value
    }

    PersonArray.push(Person);

    let newtext = Person.name + " " + Person.city + " " + Person.paymentpreference;
    let myUI = document.getElementById("list");
    let myLI = document.createElement("li");
    myLI.appendChild(document.createTextNode(newtext));
    myUI.appendChild(myLI);
    document.getElementById("theGrandList").style.display = "block";
}


