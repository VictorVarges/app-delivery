const SalesProductsModel = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    timestamps: false,
    tableName: 'products',
  });

  SalesProductsModel.associate = (models) => {
    models.SalesModel.belongsToMany(models.ProductModel, {
      through: 'SalesProducts', foreignKey: 'sale_id', otherKey: 'product_id', as: 'sales',
    });

    models.ProductModel.belongToMany(models.SalesModel, {
      through: 'SalesProducts', foreignKey: 'product_id', otherKey: 'sale_id', as: 'products',
    });
  }

  return SalesProducts;
};

module.exports = SalesProductsModel;