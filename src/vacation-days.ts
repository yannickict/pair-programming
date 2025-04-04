import { isLeapYear } from "./utils";

export type Employment = {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
};




export function calculateProRataVacationDays(employment: Employment): number {
  const { startDate, untilDate, percentage, vacationDays } = employment;
  
  let totalYearDays = 365
  if (isLeapYear(startDate.getFullYear())){
    totalYearDays = 366
  }

 

  const timeDiff = untilDate.getTime() - startDate.getTime();
   const actualDays = (timeDiff / (1000 * 60 * 60 * 24)) + 1;


     return Math.round(vacationDays * (actualDays / totalYearDays) * (percentage / 100) ) ;

}