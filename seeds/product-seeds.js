const { Product } = require('../models');

const productData = [
  {
    product_name: 'Black T-Shirt',
    price: 14.99,
    stock: 15,
    category_id: 1,
  },
  {
    product_name: 'Pride Badge',
    price: 10.0,
    stock: 25,
    category_id: 4,
  },
  {
    product_name: 'Power Badge',
    price: 9.99,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'Folk Punk Anthology',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Rising Appalachia Shirt',
    price: 19.99,
    stock: 25,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
