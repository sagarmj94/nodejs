let a = 10;
let b = 0;
setTimeout(() => {
  b = 20;
  console.log("logic", a + b);
}, 1000);
console.log("complete exe...", a + b);
