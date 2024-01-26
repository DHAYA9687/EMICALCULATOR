import React, { useState } from "react";
import "./App.css";
const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [emi, setEMI] = useState(null);

  const calculateEMI = () => {
    // Implement your EMI calculation logic here
    // For simplicity, using a basic formula
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setEMI(isNaN(emiValue) ? null : emiValue.toFixed(2));
  };
  return (
    <div className="box">
      <h2>EMI Calculator</h2>
      <label>
        Principal Amount:
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </label>
      <br />
      <label>
        Interest Rate (annual):
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Loan Term (years):
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateEMI}>Calculate EMI</button>

      {emi !== null && <p>EMI: {emi}</p>}
    </div>
  );
};

export default EMICalculator;
