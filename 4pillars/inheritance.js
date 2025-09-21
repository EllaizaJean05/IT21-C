class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
displayInfo(){
    console.log("Name: " + this.name + "\nAge: " +this.age + "\nGender: " + this.gender);

}
}
class Student extends Person {
    constructor(name,age,gender, StudentID, yearlevel){
        super (name, age, gender);
        this.StudentID = StudentID;
        this.yearlevel = yearlevel;


}


displayStudentInfo() {
    console.log("Name: " + this.name 
        + "\nGender: " + this.gender 
        + "\nAge: " + this.age 
        + "\nStudentID: " + this.StudentID 
        + "\nYear Level: " + this.yearlevel);
}
}






// Child class for Instructor

class Instructor extends Person{
    constructor(name, gender, age, employeeID, position, yearsEmployed){
        super(name, gender, age);
        this.employeeID = employeeID;
        this.position = position;
        this.yearsEmployed = yearsEmployed;
    }

    displayInstructorInfo(){
         console.log("Name: " + this.name + "\nGender: " + this.gender + "\nAge: " + this.age 
            + "\nEmployee ID: " + this.employeeID + "\nPosition: " + this.position
            + "\nYears Employed: "+ this.yearsEmployed
         );
    }
}


// Create object for student

var student = new Student("Ellaiza Jean Balatero", 19, "Female", "20240849", "2nd Year");
console.log("Student Info \n");
student.displayStudentInfo();
console.log("\n");
student.displayInfo();

// Create object for instructor

var instructor = new Instructor("Marchilyn", "Female", 18, "20181108", "Instructor I (COS)", 2);
console.log("Instructor Info \n");
instructor.displayInstructorInfo();
instructor.displayInfo();
 






