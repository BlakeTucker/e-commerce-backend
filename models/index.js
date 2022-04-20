const product = require('./Product');
const category = require('./category');
const tag = require('./tag');

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

