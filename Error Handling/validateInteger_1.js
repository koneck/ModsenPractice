function validateInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error("Введено не целое число");
    }
}
try {
    validateInteger(3.1); 
    console.log("Число является целым");
} catch (error) {
    console.error(error.message);
}
