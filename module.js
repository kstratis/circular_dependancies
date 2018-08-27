import { value, fn } from "./entry.js";

try {
  console.log(fn()); // should log 42
  console.log("Works correctly");
} catch(e) {
  console.log("Broken " + e);
}

try {
  console.log(value); // should throw a TDZ error
  console.log("Broken");
} catch(e) {
  console.log("Works correctly");
}

console.log('-------');

Promise.resolve().then(() => {
  try {
    console.log(value); // should log 42
    console.log("Works correctly");
  } catch(e) {
    console.log("Broken " + e);
  }
});
console.log('promise parsed');
