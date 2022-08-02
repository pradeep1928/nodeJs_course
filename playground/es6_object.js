const product = {
    label: 'Note book',
    price: 10,
    stock: 123,
    salePrice: undefined,
    rating: 4.8
}

const {label: productLabel, price, rating = 5} = product
console.log(productLabel, price, rating)


// destructuring directly in function 
const transaction = (type, {label, price}) => {
    console.log(type, label, price)
}

transaction('order', product)