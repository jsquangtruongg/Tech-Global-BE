import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export type KnowledgeTopic =
  | "METHODS"
  | "PSYCHOLOGY"
  | "RISK"
  | "CANDLESTICKS"
  | "INDICATORS"
  | "SUPPORT";
export type KnowledgeLevel = "BASIC" | "ADVANCED";

export interface KnowledgeAttributes {
  id: string;
  title: string;
  topic: KnowledgeTopic;
  summary: string;
  content: string;
  level: KnowledgeLevel;
  tags?: any;
  related?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KnowledgeCreationAttributes
  extends Optional<
    KnowledgeAttributes,
    "tags" | "related" | "createdAt" | "updatedAt"
  > {}

class Knowledge
  extends Model<KnowledgeAttributes, KnowledgeCreationAttributes>
  implements KnowledgeAttributes
{
  public id!: string;
  public title!: string;
  public topic!: KnowledgeTopic;
  public summary!: string;
  public content!: string;
  public level!: KnowledgeLevel;
  public tags?: any;
  public related?: any;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(_models: any) {}

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
        indexes: [
          { fields: ["topic"] },
          { fields: ["level"] },
          { fields: ["updated_at"] },
        ],
      },
    );
    return Knowledge;
  }
}

export default Knowledge;
