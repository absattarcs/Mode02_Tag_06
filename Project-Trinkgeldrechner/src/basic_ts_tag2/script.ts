//main calculation function 
function calculateTip(){

    //Get input values
    const billInput = document.getElementById("bill") as HTMLInputElement;
    const peopleInput = document.getElementById("person") as HTMLInputElement;
    const serviceInput = document.getElementById("service") as HTMLInputElement;
    
    
    const bill = parseFloat (billInput.value);
    const person = parseInt (peopleInput.value);
    const service =  parseFloat(serviceInput.value);
    console.log(service);

    //Get result display
    const resultElement = document.getElementById ("result") as HTMLInputElement;

    //validate inputs
    if (isNaN(bill) || isNaN(person) || isNaN(service) || person <= 0 ) {
        resultElement.textContent="Please fill the form correctly";
        return;
    }

    // calculate tip per person
    const tipPerPerson = (bill * service) / person;
    const totalBill = (bill + tipPerPerson);
    const totalPerPerson = (bill + bill * service) / person;

    //display the result 
    resultElement.innerHTML = ` <p> Das Trinkgeld ist: € ${tipPerPerson.toFixed(2)} </p> 
    <p>Die Gesammtsumme betrag : € ${totalBill.toFixed(2)} </p> 
     <p>Gesamt : € ${totalPerPerson.toFixed(2)} pro Person </p>`;
}

//calling function in button 
const calculateButton = document.getElementById ("calculate-btn") as HTMLInputElement;
calculateButton.addEventListener("click",calculateTip);