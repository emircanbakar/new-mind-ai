/* document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('products-container');
  console.log(element)
})  
 */

const renderProducts = (data) => {
  const containerElement = document.querySelector('.products');
  console.log(containerElement);
  data.forEach(product => {
    const divElement = document.createElement('div');
    divElement.classList.add('product-item');
    const imgElement = document.createElement('img');
    const pElement = document.createElement('p');
    // divElement.innerText = `<b>${product.title}</b>`
    // divElement.innerHTML = `<b>${product.title}</b>`
    imgElement.src = product.image;
    pElement.innerHTML = product.title;

    divElement.append(imgElement);
    divElement.append(pElement);

    // containerElement.append(divElement);
  })

  let htmlContent = '';
  data.forEach(product => {
    htmlContent += `<div>
    <img src="${product.image}"></img>
    <p>${product.title}</p></div>
    `;
  })
  // containerElement.innerHTML = htmlContent;
}

const handleClick = () => {
  console.log('handle click')
};

/* const button = document.querySelector('#btn');
if (button) {
  button?.addEventListener('click', () => {
    console.log('click');
  })
} */

const fetchProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data = await res.json();
    renderProducts(data);
  } catch (error) {
    console.log(error);
  }
};



fetchProducts();