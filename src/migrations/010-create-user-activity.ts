import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("user_activities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      device: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      os: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      browser: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      ts: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
    await queryInterface.addIndex("user_activities", ["ts"]);
    await queryInterface.addIndex("user_activities", ["device"]);
    await queryInterface.addIndex("user_activities", ["user_id", "ts"]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("user_activities");
  },
};
