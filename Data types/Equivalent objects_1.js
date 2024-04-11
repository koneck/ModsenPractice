function Equivalent(obj1, obj2) {
  const keys = Object.keys(obj1);

  for (let key of keys) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, d: 4 };

console.log(Equivalent(obj1, obj2)); //true
console.log(Equivalent(obj1, obj3)); //false
