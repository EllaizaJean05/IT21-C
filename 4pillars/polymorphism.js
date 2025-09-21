class Person{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name);
    }
}

// Child class

class Student extends Person{
    constructor(name, studentID){
        super(name);
        this.studentID = studentID;
    }

    displayStudentInfo(){
        console.log("Name: " + this.name + "\nStudent ID: " + this.studentID);
    }

    // Implementing Polymorphism (Overriding)
    sayName(){
        console.log("From student");
        super.sayName();
        console.log(this.studentID);
    }
}

// Create object

var student = new Student("Ellaiza Jean Balatero", 20240849);
student.displayStudentInfo();

// Before polymorphism

student.sayName();