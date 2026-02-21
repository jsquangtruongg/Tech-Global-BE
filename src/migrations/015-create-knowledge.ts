import { QueryInterface, DataTypes } from "sequelize";

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable("knowledge_articles", {
      id: {
        type: DataTypes.STRING(120),
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      topic: {
        type: DataTypes.ENUM(
          "METHODS",
          "PSYCHOLOGY",
          "RISK",
          "CANDLESTICKS",
          "INDICATORS",
          "SUPPORT",
        ),
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT("long"),
        allowNull: true,
      },
      level: {
        type: DataTypes.ENUM("BASIC", "ADVANCED"),
        allowNull: false,
        defaultValue: "BASIC",
      },
      tags: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
      },
      related: {
        type: DataTypes.JSON,
        allowNull: true,
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
    await queryInterface.addIndex("knowledge_articles", ["topic"], {
      name: "idx_kl_topic",
    });
    await queryInterface.addIndex("knowledge_articles", ["level"], {
      name: "idx_kl_level",
    });
    await queryInterface.addIndex("knowledge_articles", ["updated_at"], {
      name: "idx_kl_updated",
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable("knowledge_articles");
  },
};
