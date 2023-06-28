let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

waitingData
  .then((data) => {
    console.log(a + data);
  })
  .catch((err) => {
    console.log("err", err);
  });
