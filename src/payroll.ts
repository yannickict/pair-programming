export type Salary = {
  born: Date;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {
  const age: number = calculateAge(salary.born, salary.payday);
  let totalDeductions = 0;
  const deductions = new Map();
  if(age > 17){
    deductions.set(
      "AHV", salary.gross / 100.00 * DEDUCTION_RATES.get("AHV")
    );
    deductions.set(
      "IV", salary.gross / 100.00 * DEDUCTION_RATES.get("IV")
    );
    deductions.set(
      "EO", salary.gross / 100.00 * DEDUCTION_RATES.get("EO")
    );
  }
  if(salary.gross * 12 > 2500){
    deductions.set(
      "NBU", salary.gross / 100.00 * DEDUCTION_RATES.get("NBU")
    );
    deductions.set(
      "ALV", salary.gross / 100.00 * DEDUCTION_RATES.get("ALV")
    );
  }
  if(salary.gross * 12 > 22680){
    deductions.set(
      "PK", salary.gross / 100.00 * DEDUCTION_RATES.get("PK")
    );
  }
  for(const deduction of deductions.values()){
    totalDeductions += deduction;
  }

  const net = salary.gross - totalDeductions;
  
  const result: Payslip = {
    salary: salary,
    deductions: new Map(),
    totalDeductions: totalDeductions,
    net: net,
  };
  return result;
}

function calculateAge(born: Date, payday: Date): number {
  return payday.getFullYear() - born.getFullYear();
}