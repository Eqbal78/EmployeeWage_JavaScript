console.log("Welcome to Employee Wage Problem \n");

// UC1 - Ability to check whether Employee is present or absent.
const IS_ABSENT = 0
let Check = Math.floor(Math.random() * 10) % 2;
if (Check == IS_ABSENT) 
{
    console.log("Employee is absent");
}
else 
{
    console.log("Employee is present");
}

// UC2 - Ability to Calculate Daily Employee Wage based on part time or full time work.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHours = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) 
{
    case IS_PART_TIME:
        console.log("Employee is working part time");
        empHours = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        console.log("Employee is working full time");
        empHours = FULL_TIME_HOURS;
        break;
    default:
        empHours = 0;
        break;
}
let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee wage: " + empWage);


// UC3 - Refactor the Code to write a function to get work hours.
function getWorkingHrs(empCheck) 
{
    switch (empChecks) 
    {
        case IS_PART_TIME:
            console.log("Employee is working part time");
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            console.log("employee is working full time");
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empChecks = Math.floor(Math.random() * 10) % 3;
let empHrs = getWorkingHrs(empChecks);
let empWages = WAGE_PER_HOUR * empHrs;
console.log("Employee wage: " + empWages); 


// UC4 - Calculate total employee wage for a month assuming 20 working day in a month
const NUM_OF_WORKING_DAYS = 20;
let empHurs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) 
{
    let EmpCheck = Math.floor(Math.random() * 10) % 3;
    empHurs += getWorkingHrs(EmpCheck);
}
empWagess = WAGE_PER_HOUR * empHurs;
console.log("Total working hours in month : " + empHurs + "\nTotal monthly employee wage  : " + empWagess);