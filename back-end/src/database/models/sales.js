const SalesModel = (sequelize, DataTypes) => {
  const sales = sequelize.define('Sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'sales',
  });

  return sales;
};

module.exports = SalesModel; 