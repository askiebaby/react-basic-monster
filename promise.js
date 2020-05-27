const myPromise = new Promise((resolve, reject) => {
  if (true) {
    // switch it
    setTimeout(() => {
      resolve('Successful');
    }, 1000);
  } else {
    reject('Errorrrrr');
  }
});

myPromise.then((value) => console.log(value)).catch((err) => console.log(err));
