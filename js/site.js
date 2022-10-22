// Button listen for submit
//Calculate Results
function getValues(){
    console.log('Calculating...');
    // Form variables
    let amount = document.getElementById('amount');
    let interest = document.getElementById('interest');
    let months = document.getElementById('months');
    let monthlyPayment = document.getElementById('monthly-payment');
    let totalPayment = document.getElementById('total-payment');
    let totalInterest = document.getElementById('total-interest');
    

    // parse the numbers

    let principal = parseFloat(amount.value);
    let calculatedInterest = parseFloat(interest.value) / 100 / 12;
    let calculatedPayments = parseFloat(months.value);

    //Compute monthly payment
    let x = Math.pow(1+calculatedInterest, calculatedPayments);
    let monthly = (principal * x * calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } else {
        alert('Please check your numbers');

    }

    


}


function table(principal, calculatedInterest, calculatedPayments, months){
    let returnArray = [];


    /*var result = "Loan amount: $" + amount.toFixed(2) +  "<br />" + 
        "Interest rate: " + (interest*100).toFixed(2) +  "%<br />" +
        "Number of months: " + months + "<br />" +
        "Monthly payment: $" + monthly.toFixed(2) + "<br />" +
        "Total paid: $" + (payment * months).toFixed(2) + "<br /><br />";

    results += "<table border='1'><tr><th>Month #</th><th>Balance</th>" + 
        "<th>Interest</th><th>Principal</th>";
*/
    
    //Loop 360 times
    for (let i = 0; i < months; i++) {
        
        let interest = 0;
        let monthlyPrincipal = 0;

        if(principal > 0){
            let calculatedPrincipal = calculatedPayments - principal;
            returnArray.push(calculatedPrincipal);
            returnArray.push(calculatedPayments);
            returnArray.push(calculatedInterest);
            returnArray.push(calculatedPrincipal);

        }else{
            returnArray.push(i);
        }
    }
    returnArray;
}

// CF * Loop over the array and create a tablerow for each item using template.


function displayData(tbArray) {

    //get the table body element from the page
    let tablebody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("template");

    //clear table first
    tablebody.innerHTML = "";

    for (let index = 0; index < tbArray.length; index += 6) {

        let tableRow = document.importNode(templateRow.content, true)

        //grab use the to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = tbData[i];
        rowCols[1].textContent = tbData*[i+1];
        rowCols[2].textContent = tbData*[i+2];
        rowCols[3].textContent = tbData*[i+3];
        rowCols[4].textContent = tbData*[i+4];
        rowCols[5].textContent = tbData*[i+5];

        tablebody.appendChild(tableRow);

    }


}
// Show Error
function showError(error){
    // Creat a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear error function

function clearError(){
    document.querySelector('.alert').remove();
}