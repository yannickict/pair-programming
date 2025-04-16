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
      "AHV",  Number((salary.gross / 100.00 * DEDUCTION_RATES.get("AHV")).toFixed(2))
    );
    deductions.set(
      "IV",  Number((salary.gross / 100.00 * DEDUCTION_RATES.get("IV")).toFixed(2))
    );
    deductions.set(
      "EO", Number((salary.gross / 100.00 * DEDUCTION_RATES.get("EO")).toFixed(2))
    );
  }
  if(salary.gross * 12 > 2500){
    deductions.set(
      "NBU",  Number((salary.gross / 100.00 * DEDUCTION_RATES.get("NBU")).toFixed(2))
    );
    deductions.set(
      "ALV",  Number((salary.gross / 100.00 * DEDUCTION_RATES.get("ALV")).toFixed(2))
    );
  }
  if(salary.gross * 12 > 22680){
    deductions.set(
      "PK",  Number((salary.gross / 100.00 * DEDUCTION_RATES.get("PK")).toFixed(2))
    );
  }
  for(const deduction of deductions.values()){
    totalDeductions += Number(deduction);
  }

  const net = salary.gross - totalDeductions;

  const result: Payslip = {
    salary: salary,
    deductions: deductions,
    totalDeductions: totalDeductions,
    net: net,
  };
  return result;
}

function calculateAge(born: Date, payday: Date): number {
  return payday.getFullYear() - born.getFullYear();
}