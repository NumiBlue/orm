const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'T-Shirts',
  },
  {
    category_name: 'Band Shirts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Badges',
  },
  {
    category_name: 'Flags',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
