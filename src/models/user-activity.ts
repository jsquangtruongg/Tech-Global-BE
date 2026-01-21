import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface UserActivityAttributes {
  id: number;
  user_id?: number | null;
  device?: string | null;
  os?: string | null;
  browser?: string | null;
  ts: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserActivityCreationAttributes
  extends Optional<
    UserActivityAttributes,
    "id" | "user_id" | "device" | "os" | "browser" | "createdAt" | "updatedAt"
  > {}

class UserActivity
  extends Model<UserActivityAttributes, UserActivityCreationAttributes>
  implements UserActivityAttributes
{
  public id!: number;
  public user_id!: number | null;
  public device!: string | null;
  public os!: string | null;
  public browser!: string | null;
  public ts!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    UserActivity.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }

  static initModel(sequelize: Sequelize): typeof UserActivity {
    UserActivity.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        device: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        os: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        browser: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ts: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "UserActivity",
        tableName: "user_activities",
        timestamps: true,
        underscored: true,
      }
    );
    return UserActivity;
  }
}

export default UserActivity;
