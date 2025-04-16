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
            deductions: new Map([
                ["ALV", 7.7],
                ["NBU", 5.11],

            ]),
            totalDeductions: 12.81,
            net: 687.19,
        };


        //Act

        const payslip = calculatePayslip(salary);

        //Assert

        expect(payslip).toEqual(result);

    });




    test("Payslip 18 year old", () => {

        //Arrange

        const salary: Salary = {
            born: new Date("2000-01-01"),
            payday: new Date("2018-01-02"),
            gross: 1200,
        };


        const result: Payslip = {
            salary,
            deductions: new Map([
                ["AHV", 104.4],
                ["IV", 16.8],
                ["EO", 6],
                ["ALV", 13.2],
                ["NBU", 8.76],
                
            ]),
            totalDeductions: 149.61,
            net: 1050.84,
        };


        //Act

        const payslip = calculatePayslip(salary);

        //Assert

        expect(payslip).toEqual(result);

    });


    test("Payslip 21 year old", () => {

        //Arrange

        const salary: Salary = {
            born: new Date("2000-01-01"),
            payday: new Date("2021-01-02"),
            gross: 5900,
        };


        const result: Payslip = {
            salary,
            deductions: new Map([
                ["AHV", 513.3],
                ["IV", 82.6],
                ["EO", 29.5],
                ["ALV", 64.9],
                ["NBU", 43.07],
                ["PK", 525.1],
            ]),
            totalDeductions: 1258.47,
            net: 4641.53,
        };


        //Act

        const payslip = calculatePayslip(salary);

        //Assert

        expect(payslip).toEqual(result);

    });






});
