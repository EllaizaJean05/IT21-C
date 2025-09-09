let name = "Ellaiza Jean Curay Balatero";
let course = "Bachelor of Science in Information Technology";
let year = "2nd Year";

console.log("Name:" + name + "\nCourse:" + course +"\nYear Level:" +year);



let hours = 8;
let study = 3;

console.log("Total Hours of Sleep:" + hours + "\nTotal Hours of Study:"+ study);

let studyHours = 3;
if (studyHours >= 5) {
    console.log("Great! You studied enough today.");

} else {
    console.log("You need to study more.");

}

let subjects = ["WEB SYSTEM", "EVENT DRIVEN", "OOP"];
console.log("List of my subject this sem:")

for (let i = 0; i < subjects.length; i++){
    
    console.log(subjects[i]);
}

function greet (name) {
    console.log("\nMy name is " + name);
    
}
greet (name + ", a " + year + " "+ course);




