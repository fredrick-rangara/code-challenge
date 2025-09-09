/**
 * A program to calculate an individual's Net Salary in Kenya.
 * It takes basic salary and benefits as input and calculates PAYE, NHIF,
 * NSSF, gross salary, and net salary based on rates from KRA, NHIF, and NSSF.
 */

// Function to calculate NHIF deductions based on gross salary
function calculateNHIFDeductions(grossSalary) {
  if (grossSalary >= 100000) return 1700;
  if (grossSalary >= 90000) return 1600;
  if (grossSalary >= 80000) return 1500;
  if (grossSalary >= 70000) return 1400;
  if (grossSalary >= 60000) return 1300;
  if (grossSalary >= 50000) return 1200;
  if (grossSalary >= 45000) return 1100;
  if (grossSalary >= 40000) return 1000;
  if (grossSalary >= 35000) return 950;
  if (grossSalary >= 30000) return 900;
  if (grossSalary >= 25000) return 850;
  if (grossSalary >= 20000) return 750;
  if (grossSalary >= 15000) return 600;
  if (grossSalary >= 12000) return 500;
  if (grossSalary >= 8000) return 400;
  if (grossSalary >= 6000) return 300;
  if (grossSalary >= 0) return 150;
  return 0;
}

// Function to calculate NSSF deductions (using the new NSSF Act)
function calculateNSSFDeductions(pensionablePay) {
  let tier1 = 0;
  let tier2 = 0;

  if (pensionablePay > 0) {
    tier1 = Math.min(pensionablePay, 7000) * 0.06;
  }
  if (pensionablePay > 7000) {
    tier2 = Math.min(pensionablePay - 7000, 29000) * 0.06;
  }

  // The total contribution is capped at Ksh. 2,160.
  return Math.min(tier1 + tier2, 2160);
}

// Function to calculate PAYE (Tax) based on gross salary
function calculatePAYE(grossSalary) {
  const personalRelief = 2400; // Monthly personal relief
  let taxableIncome = grossSalary;
  let tax = 0;

  if (taxableIncome > 500000) {
    tax += (taxableIncome - 500000) * 0.35;
    taxableIncome = 500000;
  }
  if (taxableIncome > 80000) {
    tax += (taxableIncome - 80000) * 0.325;
    taxableIncome = 80000;
  }
  if (taxableIncome > 24000) {
    tax += (taxableIncome - 24000) * 0.30;
    taxableIncome = 24000;
  }
  if (taxableIncome > 8333) {
    tax += (taxableIncome - 8333) * 0.25;
    taxableIncome = 8333;
  }
  if (taxableIncome > 0) {
    tax += taxableIncome * 0.10;
  }

  return Math.max(0, tax - personalRelief);
}

// Main function to calculate the net salary
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  
  const nssfDeductions = calculateNSSFDeductions(grossSalary);
  
  // Taxable income is gross salary minus NSSF deductions.
  const taxableIncomeForPAYE = grossSalary - nssfDeductions;
  
  const payee = calculatePAYE(taxableIncomeForPAYE);
  const nhifDeductions = calculateNHIFDeductions(grossSalary);

  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
  console.log(`PAYE (Tax): Ksh ${payee.toFixed(2)}`);
  console.log(`NHIF Deductions: Ksh ${nhifDeductions.toFixed(2)}`);
  console.log(`NSSF Deductions: Ksh ${nssfDeductions.toFixed(2)}`);
  console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);

  return {
    grossSalary: grossSalary,
    payee: payee,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions,
    netSalary: netSalary,
  };
}

// Example usage
const basicSalary = 100000;
const benefits = 20000;
console.log("--- Calculating Net Salary ---");
calculateNetSalary(basicSalary, benefits);
