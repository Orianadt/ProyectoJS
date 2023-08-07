const calculateBtn = document.getElementById('calculate-btn');
const loanAmountInput = document.getElementById('loan-amount');
const loanTermInput = document.getElementById('loan-term');
const interestRateInput = document.getElementById('interest-rate');
const monthlyPaymentResult = document.getElementById('monthly-payment');
const totalPaymentResult = document.getElementById('total-payment');

calculateBtn.addEventListener('click', () => {
  const loanAmount = parseFloat(loanAmountInput.value);
  const loanTerm = parseInt(loanTermInput.value);
  const interestRate = parseFloat(interestRateInput.value);

  if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(interestRate)) {
    alert('Por favor ingrese valores válidos.');
    return;
  }

  const monthlyInterestRate = interestRate / 12 / 100;
  const totalPayments = loanTerm;
  const monthlyPayment = (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

  monthlyPaymentResult.textContent = `Cuota mensual: $${monthlyPayment.toFixed(2)}`;
  totalPaymentResult.textContent = `Total a pagar: $${(monthlyPayment * totalPayments).toFixed(2)}`;
});

const axios = require('axios').default;
calculateBtn.addEventListener('click', () => {
  
    axios.get('https://api.example.com/loan-terms')
      .then(response => {
        const loanTerms = response.data;
      })
      .catch(error => {
        console.error(error);
        alert('Error al obtener los datos de la API.');
      });
  });