const SalesProductsModel = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
  saleId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
  }, {
    timestamps: false,
    tableName: 'products',
  });

  SalesProductsModel.associate = (models) => {
    // models.SalesModel.hasMany(models.SalesModel, { 
    //   through: 'SalesProducts', foreignKey: 'saleId', otherKey: 'productId', as: 'sales',
    // });

    // models.ProductModel.hasMany(models.ProductsModel, { 
    //   through: 'SalesProducts', foreignKey: 'productId', otherKey: 'saleId', as: 'products',
    // });
  }
  
  return SalesProducts;
  };
  
  module.exports = SalesProductsModel; 