/* console.log('test');
setTimeout(() => {
  console.log('test3');
}, 3000);
console.log('teest2');
 */
// callback, promises

/* const getNumber = (callback) => {
  setTimeout(() => {
    // return 5;
    callback(5)
  }, 3000);
}

const printNumber = (number) => {
  console.log(number);
}

getNumber(printNumber); */


const getNumber = () => {
  setTimeout(() => {
    return 5;
  }, 3000);
}


const number = getNumber();

// console.log(number);

// promises
const isSmokingPromise = () => {
  return new Promise((resolve, reject) => {
    const age = 152;

    if (age > 18) {
      setTimeout(() => {
        resolve('success');
      }, 3000)
    } else {
      setTimeout(() => {
        reject('fail');
      }, 3000)
    }
  });
}
/* const isSmokingPromise = new Promise((resolve, reject) => {
  const age = 15;

  if (age > 18) {
    resolve('success');
  } else {
    reject('is not allowed to smoke');
  }
}); */

/* isSmokingPromise.then(res => {
  console.log(res); // success
}).catch(err => {
  console.log(err);// error
}).finally(res => {
  console.log('finally');// it finished
}) */

// pending // waiting
// resolve (everything is oke)
// reject (error is occurred)

// async await 
const isSmoking = async () => {
  // const res = isSmokingPromise(); // promise pending
  try {
    const res = await isSmokingPromise();
    // const res = 5;
    // res = 7;
    console.log(res);
  } catch (error) {
    console.log('hata cikti')
    // console.log(error);
  } finally {
    console.log('process is over');
  }
};

isSmoking();

// dom manipulation
// api request
// settimeout
