"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.createTable("common_errors", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.ENUM("PSYCHOLOGY", "TECHNICAL", "RISK", "PROCESS"),
        allowNull: false,
      },
      severity: {
        type: Sequelize.ENUM("low", "medium", "high"),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tags: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.dropTable("common_errors");
  },
};
