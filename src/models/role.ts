import { Model, DataTypes, Sequelize, Optional } from "sequelize";
import User from "./user";

export interface RoleAttributes {
  code: string;
  value: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoleCreationAttributes
  extends Optional<RoleAttributes, "createdAt" | "updatedAt"> {}

class Role
  extends Model<RoleAttributes, RoleCreationAttributes>
  implements RoleAttributes
{
  public code!: string;
  public value!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: { User: typeof User }) {
    Role.hasMany(models.User, {
      foreignKey: "role_code",
      sourceKey: "code",
      as: "users",
    });
  }
  static initModel(sequelize: Sequelize): typeof Role {
    Role.init(
      {
        code: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
        value: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Role",
        tableName: "roles",
        timestamps: true,
        underscored: true,
      }
    );
    return Role;
  }
}

export default Role;
