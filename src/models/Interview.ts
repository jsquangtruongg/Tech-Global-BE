import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface InterviewAttributes {
  id: number;
  section_id: number;
  question: string;
  answer: string;
  level: "Entry" | "Junior" | "Middle" | "Senior" | "Expert";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface InterviewCreationAttributes
  extends Optional<InterviewAttributes, "id" | "createdAt" | "updatedAt"> {}

class Interview
  extends Model<InterviewAttributes, InterviewCreationAttributes>
  implements InterviewAttributes
{
  public id!: number;
  public section_id!: number;
  public question!: string;
  public answer!: string;
  public level!: "Entry" | "Junior" | "Middle" | "Senior" | "Expert";
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Interview.belongsTo(models.InterviewSection, {
      foreignKey: "section_id",
      as: "section",
    });
  }

  static initModel(sequelize: Sequelize): typeof Interview {
    Interview.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        section_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        question: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        answer: {
          type: DataTypes.TEXT("long"),
          allowNull: false,
        },
        level: {
          type: DataTypes.ENUM("Entry", "Junior", "Middle", "Senior", "Expert"),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Interview",
        tableName: "interviews",
        timestamps: true,
        underscored: true,
      }
    );
    return Interview;
  }
}

export default Interview;
