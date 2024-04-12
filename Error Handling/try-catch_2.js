function Property(obj, Name) {
    try {
        return obj[Name];
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("TypeError");
        } else {
            throw error; 
        }
    }
}

const obj = { name: "OLeg", age: 30 };
console.log(Property(obj, "name")); 
console.log(Property(obj, "email")); 
