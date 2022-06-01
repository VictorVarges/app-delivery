const SalesModel = (sequelize, DataTypes) => {
  const sales = sequelize.define('Sales', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  delieveryAddres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  delieveryNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  saleDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  }, {
    underscore: true,
    timestamps: false,
    tableName: 'sales',
  });

  SalesModel.associate = (models) => {
    // SalesModel.belongsTo(models.UsersModel, { foreignKey: 'userId', as: 'users' });
    // SalesModel.belongsTo(models.UsersModel, { foreignKey: 'sellerId', as: 'seller' });
    SalesModel.hasMany(models.SalesProductsModel, { foreignKey: 'saleId', as: 'seller' });
  }
  
  return sales;
  };
  
  module.exports = SalesModel; 