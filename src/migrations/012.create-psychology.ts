import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable("psychologies", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("positive", "negative", "neutral"),
        allowNull: false,
      },
      impact: {
        type: DataTypes.ENUM("low", "medium", "high"),
        allowNull: false,
      },
      frequency: {
        type: DataTypes.ENUM("common", "rare"),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
    await queryInterface.addIndex("psychologies", ["type", "impact", "frequency"], {
      name: "idx_psychologies_filters",
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable("psychologies");
  },
};
