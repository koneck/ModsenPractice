function Zero(a, b) {
    if (b === 0) {
        throw new Error("второе число ноль");
    }
}

try {
    Zero(10, 0); 
    console.log("второе число не ноль");
} catch (error) {
    console.error(error.message);
}
