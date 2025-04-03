export type Salary = {
  name: string;
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
  ["PKA", 8.9],
]);

export type Payslip = {
  net: number;
  deductions: Deductions;
};

export function calculatePayslip(salary: Salary): Payslip {
  // TODO: implement
  const result: Payslip = {
    net: salary.gross,
    deductions: new Map(),
  };
  return result;
}
