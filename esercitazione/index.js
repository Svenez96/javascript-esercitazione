const product = {
    id:1,
    title:"pc portatile",
    price:1200
}

console.log(product);

product.id = 3;

const key = "price";

product[key] = 1400;

console.log(product);