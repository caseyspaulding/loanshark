
//Get info from page. Calculate Results
let cPayments = parseFloat(months.value);
function getValues(){
    console.log('Calculating...');
    // Form variables
    let amount = document.getElementById('amount');
    let interest = document.getElementById('interest');
    let months = document.getElementById('months');
    //let monthlyPayment = document.getElementById('monthly-payment');
    //let totalPayment = document.getElementById('total-payment');
    //let totalInterest = document.getElementById('total-interest');
    
    // parse the numbers

    let principal = parseFloat(amount.value);
    let cInterest = parseFloat(interest.value) / 100/ 12;
    let cPayments = parseFloat(months.value);
   

    //Compute monthly payment
    
        calculate(principal, cPayments, cInterest)
    }


function calculate(principal, cPayments, cInterest){

    //Compute monthly payment
    let x = Math.pow(1+cInterest, cPayments);
    let monthly = (principal * x * cInterest)/(x-1);
    let total_payments = (monthly * cPayments).toFixed(2);
    let total_interest_sum = ((monthly * cPayments)-principal).toFixed(2);

    let info="";

    info += "<table class='table table-striped table-sm'>";

    info += "<tr><td><h2>Monthly Payment:</h2></td>";
    info += "<td align='right'><h2>$"+round(monthly,2)+"</h2></td></tr>";

    info += "<tr><td>Loan Amount:</td>";
    info += "<td align='right'>$"+principal+"</td></tr>";

    info += "<tr><td>Total Payments:</td>";
    info += "<td align='right'>$"+round(total_payments,2)+"</td></tr>";

    info += "<tr><td>Total Interest Paid:</td>";
    info += "<td align='right'>$"+total_interest_sum+"</td></tr>";

    info += "<tr><td>Payments:</td>";
    info += "<td align='right'>"+cPayments+"</td></tr>";

    info += "</table>";

    //info is a string containing all the html table code
    document.getElementById("loan_info").innerHTML = info; 
   
    // TABLE DATA

    let table="";

    table += "<table class='table table-striped table-sm'>";

        table += "<tr>";
        table += " <td width='30'><strong>Month</strong></td>";
        table += "<td width='30'><strong>Payment</strong></td>";
        table += "<td width='30'><strong>Principle</strong></td>";
        table += " <td width='30'><strong>Interest</strong></td>";
        table += "<td width='30'><strong>Interest Paid</strong></td>";
        table += "<td width='30'><strong>Balance</strong></td>";
        table += "</tr>";

    let current_balance = parseFloat(document.getElementById('amount').value);
    let interest = parseFloat(document.getElementById('interest').value);
    let monthly_payment = monthly
    let payment_counter = 1;
    let total_interest = parseFloat(cInterest);
    while (payment_counter <= cPayments) {
        towards_interest = cInterest * current_balance;
        towards_balance = monthly_payment - towards_interest;
        total_interest = total_interest + towards_interest; 
        current_balance = current_balance - towards_balance;
        
        
        table += "<tr>";
            table += "<td>"+payment_counter+"</td>"
            table += "<td>"+round (monthly_payment,2)+"</td>"
            table += "<td>"+round (towards_balance,2)+"</td>"
            table += "<td>"+round (towards_interest,2)+"</td>"
            table += "<td>"+round (total_interest,2)+"</td>"
            table += "<td>"+round (current_balance,2)+"</td>"
        table += "</tr>";
        payment_counter++;
 
    }
    table +="</table>";

    document.getElementById("tablehtml").innerHTML = table;
}

function round(num, dec){

    return (Math.round(num*Math.pow(10,dec))/ Math.pow(10,dec)).toFixed(dec);
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


