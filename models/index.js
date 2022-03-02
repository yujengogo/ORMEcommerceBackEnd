// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongssTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Catagory.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  foreignKey: 'product_id',
  through: ProductTag
})
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey: 'tag_id',
  through: ProductTag
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
