class VendingMachine {
    #balance;
    #inventory;
    #password;

    constructor() {
        this.#balance = 0;
        this.#inventory = {
            Chips: { Price: 20, Stock: 5 },
            Soda: { Price: 25, Stock: 3 },
            Candy: { Price: 5, Stock: 10 }
        };
        this.#password = "admin 123";
    }

    insertMoney(amount) {
        if (amount <= 0) {
            console.log("Please enter a valid amount");
            return;
        }
        this.#balance += amount;
        console.log("You inserted: " + amount + ". Current Balance: " + this.#balance);
    }

    selectItem(itemName) {
        let item = this.#inventory[itemName];
        if (!item) {
            console.log("Item not available");
            return;
        }
        if (item.Stock <= 0) {
            console.log(itemName + " is out of stock");
            return;
        }
        if (this.#balance < item.Price) {
            console.log("Not enough money. " + itemName + " costs: " + item.Price + " but you have " + this.#balance);
            return;
        }

        this.#balance -= item.Price;
        item.Stock--;

        console.log("You bought " + itemName + " for " + item.Price + ". Remaining balance: " + this.#balance);
    }

    developerMode(password) {
        if (password !== this.#password) {
            console.log("Access denied. Wrong Password");
            return;
        }

        console.log("=== Developer Mode ===");
        console.log("Balance: " + this.#balance);
        console.log("Inventory:", this.#inventory);
    }
}

// === Testing ===
let vm = new VendingMachine();
vm.insertMoney(50);

vm.selectItem("Soda");
vm.selectItem("Chips");
vm.selectItem("Candy");

vm.developerMode("Wrong");
vm.developerMode("admin 123");
