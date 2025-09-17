class Student {

    constructor(name, course){
        this.name = name;
        this.course = course;
    }
    


introduce(){
    console.log("Hi I am " + this.name + "and I study " + this.course);
}
}


//create object
var s1 = new Student ("Ellaiza Jean Curay Balatero", "INformation Technology");
s1.introduce();
