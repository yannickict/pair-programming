import { isLeapYear } from "./utils";

describe("leap year", () => {
  test.each([
    [1896, true],
    [1897, false],
    [1900, false],
    [1903, false],
    [1904, true],
    [1986, false],
    [1987, false],
    [1988, true],
    [1992, true],
    [1993, false],
    [1999, false],
    [2000, true],
    [2001, false],
    [2003, false],
    [2004, true],
    [2023, false],
    [2024, true],
    [2025, false],
  ])("isLeapYear(%d) is %s", (year, expected) => {
    expect(isLeapYear(year)).toBe(expected);
  });
});
