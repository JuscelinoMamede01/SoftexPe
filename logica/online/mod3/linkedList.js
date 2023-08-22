// Crie uma lista encadeada em que cada elemento representa uma pessoa.
// Ela precisa conter informações como nome, idade e referência ao filho dela.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.child = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  addFirst(name, age) {
    const newPerson = new Person(name, age);
    newPerson.child = this.head;
    this.head = newPerson;
  }

  addLast(name, age) {
    const newPerson = new Person(name, age);
    if (!this.head) {
      this.head = newPerson;
    } else {
      let current = this.head;
      while (current.child) {
        current = current.child;
      }
      current.child = newPerson;
    }
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    const removedPerson = this.head;
    this.head = this.head.child;
    removedPerson.child = null;
    return removedPerson;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.child) {
      const removedPerson = this.head;
      this.head = null;
      return removedPerson.name;
    }
    let current = this.head;
    let previous = null;
    while (current.child) {
      previous = current;
      current = current.child;
    }
    previous.child = null;
    return current.name;
  }

  search(name) {
    let current = this.head;
    while (current) {
      if (current.name === name) {
        return current;
      }
      current = current.child;
    }
    return null;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.child;
    }
    return count;
  }
}
