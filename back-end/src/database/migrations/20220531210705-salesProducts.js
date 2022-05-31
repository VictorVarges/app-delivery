'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      
      saleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
      },
      quantity:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};
