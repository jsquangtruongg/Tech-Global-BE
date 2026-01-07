import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("studies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      section_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "interview_sections",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      type: {
        type: DataTypes.ENUM("multiple-choice", "essay", "case-study"),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      options: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      media: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      correct_answer: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      explanation: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      related_question_ids: {
        type: DataTypes.JSON,
        allowNull: true,
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
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("studies");
  },
};
