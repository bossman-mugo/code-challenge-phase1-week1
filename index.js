let marks = prompt("Enter the student' marks(between 0 and 100):");
let speed = prompt("Please enter the speed of the vehicle(km/s):");
let demeritPoints = 0;
let basicSalary = prompt("Input the basic salary:");
let benefits = 0;

//function that takes in the marks of the student as an argument
function calculateMarks(marks){
if (marks>79){
    console.log("Marks: A");
}

else if(marks>60 && marks<=79){
    console.log("Grade: B")
}

else if(marks>49 && marks<=59){
    console.log("Grade: C")
}

else if(marks>40 && marks<=49){
    console.log("Grade: D")
}

else if(marks<40){
    console.log("Grade: E")
}

//the function return marks so that the value can be used elsewhere
return marks;
}


//function that takes in the speed
function speedDetector(speed){
    if (speed<70){
        console.log("Ok");
    }

//if the speed is greater than 70 the demerit point start adding up dependin on the speed of the vehicle
    else{
        demeritPoints = Math.round((speed - 70)/5);

    }
//a debugger to check whether the loop is working
    debugger;

//this loop checks whether the Demerit Points are equal or greater to 12
    if(demeritPoints >= 12){

        console.log(`Your Demerit points are:${demeritPoints}`);
        console.log(`Your license is suspended`);
    }
//if the Dermerit Points are less than 12, the code below is executed
    else{
        console.log(`Demerit points: ${demeritPoints}`);
    }

//the function returns speed so that it can be used elsewhere
    return speed;

}


function netSalaryCalculator(basicSalary,benefits){
    let monthlyTaxablePay = 0;
    let annualTaxablePay = 0;
    let taxRate = 0;

    if(monthlyTaxablePay <= 24000 || annualTaxablePay <= 288000){
        taxRate = 10/100;
    }
    else if(monthlyTaxablePay>=24001 && monthlyTaxablePay <= 32333 || annualTaxablePay>=288001 && annualTaxablePay<=388000){
        taxRate = 25/100;
    }
    else if(monthlyTaxablePay>32333 || annualTaxablePay>388000){
        taxRate = 30/100;
    }


}