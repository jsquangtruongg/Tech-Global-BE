import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface PsychologyAttributes {
  id: number;
  title: string;
  type: "positive" | "negative" | "neutral";
  impact: "low" | "medium" | "high";
  frequency: "common" | "rare";
  description?: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PsychologyCreationAttributes extends Optional<
  PsychologyAttributes,
  "id" | "description" | "createdAt" | "updatedAt"
> {}

class Psychology
  extends Model<PsychologyAttributes, PsychologyCreationAttributes>
  implements PsychologyAttributes
{
  public id!: number;
  public title!: string;
  public type!: "positive" | "negative" | "neutral";
  public impact!: "low" | "medium" | "high";
  public frequency!: "common" | "rare";
  public description!: string;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {}

  static initModel(sequelize: Sequelize): typeof Psychology {
    Psychology.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
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
      },
      {
        sequelize,
        modelName: "Psychology",
        tableName: "psychologies",
        timestamps: true,
        underscored: true,
      },
    );
    return Psychology;
  }
}

export default Psychology;
