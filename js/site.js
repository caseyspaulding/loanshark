// Button listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)

//Calculate Results
function calculateResults(e){
    console.log('Calculating...');
    // Form variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const months = document.getElementById('months');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    

    // parse the numbers

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(months.value);
    

    //Compute monthly payment
    const x = Math.pow(1+calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } else {
        showError('Please check your numbers');

    }
    e.preventDefault();
}


/*
function table(){
    while (principal > 0) {
        monthlyPayment +- 1;
        amount*12
    }
}

// CF * Loop over the array and create a tablerow for each item using template.


function displayData(Array) {

    //get the table body element from the page
    let tablebody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("template");

    //clear table first
    tablebody.innerHTML = "";

    for (let index = 0; index < Array.length; index++) {

        let tableRow = document.importNode(templateRow.content, true)

        //grab use the to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = *Data*[i];
        rowCols[1].textContent = *Data*[i+1];
        rowCols[2].textContent = *Data*[i+2];
        rowCols[3].textContent = *Data*[i+3];
        rowCols[4].textContent = *Data*[i+4];
        rowCols[5].textContent = *Data*[i+5];

        tablebody.appendChild(tableRow);

    }


}
*/
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