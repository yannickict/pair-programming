import { calculatePayslip, Payslip, Salary } from "./payroll";

describe("Calculate Payslip", () => {

    test("Payslip 16 year old", () => {

        //Arrange

        const salary: Salary = {
            born: new Date("2000-01-01"),
            payday: new Date("2016-01-02"),
            gross: 700,
        };


        const result: Payslip = {
            salary,
            deductions: new Map(),
            totalDeductions: 0.0,
            net: 700,
        };


        //Act

        const payslip = calculatePayslip(salary);

        //Assert

        expect(payslip).toEqual(result);

    });




});
