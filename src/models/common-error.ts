import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface CommonErrorAttributes {
  id: string;
  name: string;
  category: "PSYCHOLOGY" | "TECHNICAL" | "RISK" | "PROCESS";
  severity: "low" | "medium" | "high";
  content: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CommonErrorCreationAttributes extends Optional<
  CommonErrorAttributes,
  "createdAt" | "updatedAt"
> {}

class CommonError
  extends Model<CommonErrorAttributes, CommonErrorCreationAttributes>
  implements CommonErrorAttributes
{
  public id!: string;
  public name!: string;
  public category!: "PSYCHOLOGY" | "TECHNICAL" | "RISK" | "PROCESS";
  public severity!: "low" | "medium" | "high";
  public content!: string;
  public tags!: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initModel(sequelize: Sequelize): typeof CommonError {
    CommonError.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        category: {
          type: DataTypes.ENUM("PSYCHOLOGY", "TECHNICAL", "RISK", "PROCESS"),
          allowNull: false,
        },
        severity: {
          type: DataTypes.ENUM("low", "medium", "high"),
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        tags: {
          type: DataTypes.JSON,
          allowNull: false,
          defaultValue: [],
        },
      },
      {
        sequelize,
        modelName: "CommonError",
        tableName: "common_errors",
        timestamps: true,
        underscored: true,
      },
    );
    return CommonError;
  }
}

export default CommonError;
