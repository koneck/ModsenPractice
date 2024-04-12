class Person {
  constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
  }

  info() {
      console.log(`name: ${this.name}, age: ${this.age}, country: ${this.country}`);
  }
}

const person1 = new Person("Anton", 43, "Russia");
const person2 = new Person("Sana", 22, "Usa");

person1.info();
person2.info();
