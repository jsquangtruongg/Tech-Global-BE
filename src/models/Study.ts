import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface StudyAttributes {
  id: number;
  section_id: number;
  type: "multiple-choice" | "essay" | "case-study";
  content: string;
  options?: any;
  media?: any;
  correct_answer?: string;
  explanation?: string;
  related_question_ids?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface StudyCreationAttributes
  extends Optional<StudyAttributes, "id" | "createdAt" | "updatedAt"> {}

class Study
  extends Model<StudyAttributes, StudyCreationAttributes>
  implements StudyAttributes
{
  public id!: number;
  public section_id!: number;
  public type!: "multiple-choice" | "essay" | "case-study";
  public content!: string;
  public options?: any;
  public media?: any;
  public correct_answer?: string;
  public explanation?: string;
  public related_question_ids?: any;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Study.belongsTo(models.InterviewSection, {
      foreignKey: "section_id",
      as: "section",
    });
  }

  static initModel(sequelize: Sequelize): typeof Study {
    Study.init(
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
      },
      {
        sequelize,
        modelName: "Study",
        tableName: "studies",
        timestamps: true,
        underscored: true,
      }
    );
    return Study;
  }
}

export default Study;
