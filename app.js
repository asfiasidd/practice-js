let course = prompt("Enter your course name");
let campus = prompt("Enter your campus name");
let fee = prompt("Do you submit");
if (course == "web development" || course == "WMA"){
    if (campus == "Numaish" || campus == "numaish"){
        if (fee == "yes" || fee == "Yes"){
            confirm("Congratulations !! \n You are Enrolled in our WMA course")
        }
    }
}





let age = prompt("Enter your age");
switch (true) {
    case (age >= 18 && age <= 65):
    document.write("You are young enough! Eligible");
    break;

    default: 
    document.write("You are not eligible");
    break;
}



for (let i = 1; i <=200; i++){
    document.write("Asfia Siddique <br>");
}



for (let i = 1; i <=200; i++){
    if(i%2 == 0){
        document.write(i, "Even number <br>")
    } else {
        document.write(i, "Odd number <br>")
    }
}















