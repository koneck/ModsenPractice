function testScope() {

    var x_var = 1;
    let x_let = 1;
    const x_const = 1;

    console.log(`var: ${x_var}`);
    console.log(`let: ${x_let}`);
    console.log(`const: ${x_const}`);
}

testScope();
// вне блока ни одна переменная не видна
console.log(`var: ${typeof x_var === 'undefined' ? "не видно" : x_var}`);
console.log(`let: ${typeof x_let === 'undefined' ? 'не видно' : x_let}`);
console.log(`const): ${typeof x_const === 'undefined' ? 'не видно' : x_const}`);
