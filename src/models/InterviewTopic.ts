import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface InterviewTopicAttributes {
  id: number;
  name: string;
  market: "crypto" | "gold";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface InterviewTopicCreationAttributes
  extends Optional<InterviewTopicAttributes, "id" | "createdAt" | "updatedAt"> {}

class InterviewTopic
  extends Model<InterviewTopicAttributes, InterviewTopicCreationAttributes>
  implements InterviewTopicAttributes
{
  public id!: number;
  public name!: string;
  public market!: "crypto" | "gold";
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    InterviewTopic.hasMany(models.InterviewSection, {
      foreignKey: "topic_id",
      as: "sections",
    });
  }

  static initModel(sequelize: Sequelize): typeof InterviewTopic {
    InterviewTopic.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        market: {
          type: DataTypes.ENUM("crypto", "gold"),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "InterviewTopic",
        tableName: "interview_topics",
        timestamps: true,
        underscored: true,
      }
    );
    return InterviewTopic;
  }
}

export default InterviewTopic;
