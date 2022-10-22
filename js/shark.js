// Get values from the page
// starts or controller function
function getValues(){
  //get values from the page
  // Form variables
  let balence = parseFloat(document.getElementById('amount').value);
  let interestRate = parseFloat(document.getElementById('interest').value/100/12);
  let terms = parseInt(document.getElementById('months').value);


 // parse the numbers
  let div = document.getElementById("Result");
  
  //clear out the div
  div.innerHTML = "";
 
  let balVal = validateInputs(balance);
  let intrVal = validateInputs(interestRate);
  
 if (balVal && intrVal) {
  div.innerHTML += amort(balance, interestRate, terms);
 }
 else{
  div.innerHTML += "Please only enter numbers.";
 }

 
}

for (let count = 0; count < terms; ++count)
	{ 
		//in-loop interest amount holder
		let interest = 0;
		
		//in-loop monthly principal amount holder
		let monthlyPrincipal = 0;
		
		//start a new table row on each loop iteration
		result += "<tr align=center>";
		
		//display the month number in col 1 using the loop count variable
		result += "<td>" + (count + 1) + "</td>";
		
		
		//code for displaying in loop balance
		result += "<td> $" + balance.toFixed(2) + "</td>";
		
		//calc the in-loop interest amount and display
		interest = balance * monthlyRate;
		result += "<td> $" + interest.toFixed(2) + "</td>";
		
		//calc the in-loop monthly principal and display
		monthlyPrincipal = payment - interest;
		result += "<td> $" + monthlyPrincipal.toFixed(2) + "</td>";
		
		//end the table row on each iteration of the loop	
		result += "</tr>";
		
		//update the balance for each loop iteration
		balance = balance - monthlyPrincipal;		
	}
	
	//Final piece added to return string before returning it - closes the table
    result += "</table>";
	
	//returns the concatenated string to the page
    return result;

//generate numbers
//display or view function
function displayNumbers(){

}

function validateInputs(value)
{
	//some code here to validate inputs
	if ((value == null) || (value == ""))
	{
		return false;
	}
	else
	{
		return true;
	}
}