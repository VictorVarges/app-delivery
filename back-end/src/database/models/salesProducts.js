const SalesProductsModel = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false,
    tableName: 'sales_products',
  });

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      through: SalesProducts, foreignKey: 'sale_id', otherKey: 'product_id', as: 'sales',
    });

    models.Products.belongsToMany(models.Sales, {
      through: SalesProducts, foreignKey: 'product_id', otherKey: 'sale_id', as: 'products',
    });

    models.Sales.hasMany(models.SalesProducts, { as: 'MySales', foreignKey: 'sale_id' });
    models.Products.hasMany(models.SalesProducts, { as: 'MyProducts', foreignKey: 'product_id' });
  }


  return SalesProducts;
};

module.exports = SalesProductsModel;
