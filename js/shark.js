// Button listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)


function startOver() {

  document.loan_form_amt.value="";
  document.loan_form.months.value="";
  document.loan_form.rate.value="";
  document.loan_form.extra.value="";

  document.getElementById("loan_info").innerHTML="";
  document.getElementById("table").innerHtml="";

}


function validate() {

    const loan_amt = document.loan_form.loan_amt.value;
    const months = document.loan_form.months.value;
    const rate = document.loan_form.rate.value;
    const extra = document.loan_form.extra.value;

    parseFloat(loan_amt);
    parseint(months);
    parseFloat(rate);
    parseFloat(extra);
}

function calculate(loan_amt, months, rate, extra) {

  i = rate/100;

  let monthly_payment = amount*(i/12)*Math.pow((1+i/12),months) / (Math.pow((1+i/12), months) - 1);

  alert(monthly_payment);

}