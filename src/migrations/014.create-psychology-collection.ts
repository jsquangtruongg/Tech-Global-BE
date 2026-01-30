import { QueryInterface, DataTypes } from "sequelize";
 
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable("psychology_collections", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      psychology_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "psychologies", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.addIndex("psychology_collections", ["user_id"], {
      name: "idx_psycol_user",
    });
    await queryInterface.addIndex("psychology_collections", ["psychology_id"], {
      name: "idx_psycol_article",
    });
    await queryInterface.addConstraint("psychology_collections", {
      type: "unique",
      name: "uniq_psycol_user_article",
      fields: ["user_id", "psychology_id"],
    });
  },
 
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable("psychology_collections");
  },
};
