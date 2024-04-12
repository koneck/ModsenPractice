class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        return baseSalary * 1.1;
    }
}

const manager1 = new Manager("Oleg", 300);
const manager2 = new Manager("Anton", 500);

const manager1Salary = manager1.calculateAnnualSalary();
const manager2Salary = manager2.calculateAnnualSalary();

console.log("менеджера 1:", manager1Salary);
console.log("менеджера 2:", manager2Salary);
