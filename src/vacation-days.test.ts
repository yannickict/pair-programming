import { calculateProRataVacationDays, Employment } from "./vacation-days";

test("full year 100% employment gives all vacation days", () => {
  // Arrange
  const fullTime: Employment = {
    startDate: new Date(Date.parse("2025-01-01 00:00:00+01:00")),
    untilDate: new Date(Date.parse("2025-12-31 23:59:59+01:00")),
    percentage: 100,
    vacationDays: 25,
  };
  const expected = 25;

  // Act
  const actual = calculateProRataVacationDays(fullTime);

  // Assert
  expect(actual).toBe(expected);
});




test("full year 60% employment gives reduced vacation days", () => {
 // Arrange
 const fullTime: Employment = {
  startDate: new Date(Date.parse("2025-01-01 00:00:00+01:00")),
  untilDate: new Date(Date.parse("2025-12-31 23:59:59+01:00")),
  percentage: 60,
  vacationDays: 25,
};
const expected = 15;

// Act
const actual = calculateProRataVacationDays(fullTime);

// Assert
expect(actual).toBe(expected);


});

test("partial year 100% employment (half year)", () => {
  // Arrange
  const time: Employment = {
    startDate: new Date("2025-01-01 00:00:00+01:00"),
    untilDate: new Date("2025-06-30 23:59:59+01:00"),
    percentage: 100,
    vacationDays: 25,
  };


  const expected = 12;

  // Act
  const actual = calculateProRataVacationDays(time);

  // Assert
  expect(actual).toBe(expected);
});

test("partial year 70% employment (Jan - Mar)", () => {
  // Arrange
  const time: Employment = {
    startDate: new Date("2025-01-01 00:00:00+01:00"),
    untilDate: new Date("2025-03-31 23:59:59+01:00"),
    percentage: 70,
    vacationDays: 25,
  };


  const expected = 4;

  // Act
  const actual = calculateProRataVacationDays(time);

  // Assert
  expect(actual).toBe(expected);
});