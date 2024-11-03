//const fetchProducts = async () => {
  // console.log(fetch('https://fakestoreapi.com/products/4'))
/*   fetch('https://fakestoreapi.com/products/4').then(res => res.json()).then(data => {
    console.log(data)
  }).catch(err => {
    console.log('error', err);
  })
  console.log('it worked'); */

/*   try {
    const res = await fetch('https://fakestoreapi.com/products/4');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchProducts(); */

// Event loop

console.log('1');
setTimeout(() => {
  console.log('2');
}, 0)
console.log('3')

const foo = () => {
  console.log('foo init');
  console.log('foo end');
}

const bar = () => {
  console.log('bar init');
  foo();
  console.log('bar end');
}

bar();

// STACK

// 
// bar
// bar console.log
// bar
// bar foo
// bar foo console.logs
// bar foo
// bar
// 

// async
// api request
// set timeout
// dom