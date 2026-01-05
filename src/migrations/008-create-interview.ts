import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    // Create Interview Topics table
    await queryInterface.createTable("interview_topics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      market: {
        allowNull: false,
        type: DataTypes.ENUM("crypto", "gold"),
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

    // Create Interview Sections table
    await queryInterface.createTable("interview_sections", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      topic_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "interview_topics",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
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

    // Create Interview Questions table
    await queryInterface.createTable("interviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      section_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "interview_sections",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      question: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT("long"),
      },
      level: {
        allowNull: false,
        type: DataTypes.ENUM("Entry", "Junior", "Middle", "Senior", "Expert"),
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
    await queryInterface.dropTable("interviews");
    await queryInterface.dropTable("interview_sections");
    await queryInterface.dropTable("interview_topics");
  },
};
