'use strict';

const { sequelize } = require('../models');
const { all } = require('../routes');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('diskusi', { 
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      id_user: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_topic: {
        type: Sequelize.STRING,
        allowNull: false
      },
      judul_diskusi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isi_diskusi: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      total_lihat: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('diskusi');
     
  }
};
