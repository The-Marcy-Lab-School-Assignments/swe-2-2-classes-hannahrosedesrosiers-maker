class Rectangle {
  constructor(length, width) { 
    this.length = length
    this.width = width

  }
  getArea() { 
    return (this.length * this.width)
  }

  getPerimeter() { 
    return ((this.length * 2) + (this.width * 2))

  }

  isSquare() { 
    return (this.length === this.width)
  }
  
}

class Vehicle {

  constructor(type, capacity) {
    this.type = type
    this.capacity = capacity
    this.color = 'black'
    this.passengers = []
  }
  
  paint(color) {
    this.color = color
    return this.color

  }

  addPassenger(passenger) {

    if (this.passengers.length >= this.capacity) {
      return -1
  } else {
  
  this.passengers.push(passenger)
  return this.passengers.length
}
}
  
}

class PasswordManager {
  #password;
  
  constructor(password) { 
    this.#password = password
  }

  checkPassword(attempt) {
    return attempt === this.#password
  }
  
  setPassword(oldPassword, newPassword) {
    if (oldPassword !== this.#password) { 
      return false
    }
    this.#password = newPassword
    return true
   }

}

class TodoList {
  #items;
  constructor(title) {
    this.title = title
    this.#items = []
  }
  
  addItem(description) { 
    this.#items.push(description)
return this.#items.length    
  }

  getItems() { 
    return [...this.#items]
  }

  removeItem(description) { 
    const index = this.#items.indexOf(description);
    return index < 0 ? null :
      this.#items.splice(index, 1)[0];
  }


}

class BankAccount {
  #balance;
  static #totalHoldings = 0
  constructor(firstName, lastName, balance = 0) {
    this.firstName = firstName
    this.lastName = lastName
    this.#balance = balance
    BankAccount.#totalHoldings += balance
  }
  
  deposit(amount) {
    this.#balance += amount
    BankAccount.#totalHoldings += amount
    return `Your balance is $${this.#balance.toFixed(2)}`
  }
  showBalance(){return `Your balance is $${this.#balance.toFixed(2)}`}
  withdraw(amount) {
    if (amount > this.#balance) { 
      return 'You do not have enough funds.'
    }
    this.#balance -= amount
    BankAccount.#totalHoldings -= amount
    return `Your balance is $${this.#balance.toFixed(2)}.`
  }
  
  static getTotalHoldings() {
    return BankAccount.#totalHoldings;
   }

}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
