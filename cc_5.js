// Coding Challenge 5

// Create array of employee objects
let employees = [
    {
        name: "Olivia Johnson",
        hourlyRate: 30,
        hoursWorked: 40,
    },
     {
        name: "Rachel James",
        hourlyRate: 40,
        hoursWorked: 45,
    },
     {
        name: "Richard Smith",
        hourlyRate: 35,
        hoursWorked: 42,
    },
];

// Function for base pay

function calculateBasePay(rate, hours){
    return rate * 40
}

// Function for overtime pay

function calculateOvertimePay(rate, hours){
    if (hours > 40) return (1.5 * rate) * (hours - 40)
        else return 0
}

// Function deducting taxes

let grossPay = calculateBasePay() + calculateOvertimePay()
function calculateTaxes(grossPay){
    return grossPay * 0.85
}

// Function for processing payroll

function processPayroll(employee){
    return console.log(`Name: ${employee.name}, Base Pay: $${calculateBasePay(employee.hourlyRate, employee.hoursWorked)}, 
    Overtime Pay: $${calculateOvertimePay(employee.hourlyRate, employee.hoursWorked)}, Gross Pay: $${calculateBasePay(employee.hourlyRate, employee.hoursWorked) + calculateOvertimePay(employee.hourlyRate, employee.hoursWorked)}`)
}

processPayroll(employees[0]);
