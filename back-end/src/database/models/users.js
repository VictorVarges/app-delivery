const UsersModel = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false,
    tableName: 'users',
    undescored: true,
  });

  UsersModel.associate = (models) => {
    UsersModel.hasMany(models.SalesModel, { forengeKey: 'user_id', as: 'userId' });
    UsersModel.hasMany(models.SalesModel, { forengeKey: 'seller_id', as: 'sellerId' });
  }

  return users;
};

module.exports = UsersModel;