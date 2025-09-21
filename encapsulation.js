
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
