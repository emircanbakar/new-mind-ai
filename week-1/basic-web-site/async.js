// Javascript is a Single Thread

/* console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
console.log('3');
 */

// callback

/* const getProducts = (callbackFunc) => {
  setTimeout(() => {
    const data = ['adem', 'erhan']
    callbackFunc(data);
  }, 3000); // 3000 miliseconds -> 3 secs
};

const printProducts = (data) => {
  const container = document.querySelector('.container');
  data.forEach(item => {
    const newElement = document.createElement('p');
    newElement.innerHTML = item;
    container.appendChild(newElement);
  })
}

getProducts(printProducts); // callback function */

// what are the async things?
// API Request
// SetTimeout
// DOM manipulation

const getProducts = async () => {
  // promises
  // console.log(fetch('https://fakestoreapi.com/products'));
  /* fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    printProducts(data);
  }) */
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  // axios example
  const axiosData = await axios.get('https://fakestoreapi.com/products');
  console.log(axiosData.data)
  printProducts(data);
};

const printProducts = (data) => {
  const container = document.querySelector('.container');
  data.forEach(item => {
    const newElement = document.createElement('p');
    newElement.innerHTML = item.title;
    container.appendChild(newElement);
  })
}

getProducts(); // callback function