import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface InterviewSectionAttributes {
  id: number;
  topic_id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface InterviewSectionCreationAttributes
  extends Optional<InterviewSectionAttributes, "id" | "createdAt" | "updatedAt"> {}

class InterviewSection
  extends Model<InterviewSectionAttributes, InterviewSectionCreationAttributes>
  implements InterviewSectionAttributes
{
  public id!: number;
  public topic_id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    InterviewSection.belongsTo(models.InterviewTopic, {
      foreignKey: "topic_id",
      as: "topic",
    });
    InterviewSection.hasMany(models.Interview, {
      foreignKey: "section_id",
      as: "questions",
    });
  }

  static initModel(sequelize: Sequelize): typeof InterviewSection {
    InterviewSection.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        topic_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "InterviewSection",
        tableName: "interview_sections",
        timestamps: true,
        underscored: true,
      }
    );
    return InterviewSection;
  }
}

export default InterviewSection;
