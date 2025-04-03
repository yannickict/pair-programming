export type Employment = {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
};

export function calculateProRataVacationDays(employment: Employment): number {
  // TODO: calculate pro rata (consider workload and days worked)
  return employment.vacationDays;
}
