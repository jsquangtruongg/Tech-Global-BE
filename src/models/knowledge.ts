import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface KnowledgeAttributes {
  id: string;
  title: string;
  topic:
    | "METHODS"
    | "PSYCHOLOGY"
    | "RISK"
    | "CANDLESTICKS"
    | "INDICATORS"
    | "SUPPORT";
  summary: string;
  content?: string;
  level: "BASIC" | "ADVANCED";
  tags: string[];
  related?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KnowledgeCreationAttributes extends Optional<
  KnowledgeAttributes,
  "createdAt" | "updatedAt"
> {}

class Knowledge
  extends Model<KnowledgeAttributes, KnowledgeCreationAttributes>
  implements KnowledgeAttributes
{
  public id!: string;
  public title!: string;
  public topic!:
    | "METHODS"
    | "PSYCHOLOGY"
    | "RISK"
    | "CANDLESTICKS"
    | "INDICATORS"
    | "SUPPORT";
  public summary!: string;
  public content!: string;
  public level!: "BASIC" | "ADVANCED";
  public tags!: string[];
  public related!: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initModel(sequelize: Sequelize): typeof Knowledge {
    Knowledge.init(
      {
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
      },
      {
        sequelize,
        modelName: "Knowledge",
        tableName: "knowledge_articles",
        timestamps: true,
        underscored: true,
      },
    );
    return Knowledge;
  }
}

export default Knowledge;
