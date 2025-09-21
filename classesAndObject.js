
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
var s1 = new Student ("Ellaiza Jean Curay Balatero", "Information Technology");
s1.introduce();


class Animal {

    constructor(name){
        this.name = name;
    }


sleep() {
    console.log(this.name + " is sleeping");
}
eat() {
    console.log(this.name + " is eating");
}
play(){
    console.log(this.name + " is playing");
}
}
var dog = new Animal("Dog");
dog.sleep();
dog.eat();
dog.play();



class Animal {
    #name;

    constructor(name){
        this.#name = name; 

    }

    setName(val){
        this.#name = val;

    }
    getName(){
        return this.#name;
    }
}
var dog = new Animal ("Dog");
console.log(dog.getName());
console.log(dog.name);


class bankAccount{
    #balance;

    constructor(owner, balance){
    this.owner = owner;
    this.#balance = balance;
    }
   deposit(amount){
    this.#balance +=amount;
    console.log("Deposited: " + amount);
   }
//create object
getBalance(){
    return this.#balance;

}
}
var acc = new bankAccount ("Ellaiza Jean C. Balatero", 10000);
acc.deposit(20000);
acc.deposit(5);
console.log("Current Balance: " + acc.getBalance());

