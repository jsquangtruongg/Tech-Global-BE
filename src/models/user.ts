import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  phone?: string;
  role_code: string;
  avatar?: string;
  filename?: string;
  refreshToken?: string;
  lastActiveAt?: Date;
  lastDevice?: string;
  lastOs?: string;
  lastBrowser?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<
  UserAttributes,
  | "id"
  | "avatar"
  | "phone"
  | "filename"
  | "refreshToken"
  | "role_code"
  | "createdAt"
  | "updatedAt"
> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public phone!: string;
  public role_code!: string;
  public avatar!: string;
  public filename!: string;
  public refreshToken!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    User.belongsTo(models.Role, {
      foreignKey: "role_code",
      targetKey: "code",
      as: "roleData",
    });
    User.hasMany(models.Course, {
      foreignKey: "instructor_id",
      as: "courses",
    });
    User.hasMany(models.Cart, {
      foreignKey: "user_id",
      as: "cartItems",
    });
  }

  static initModel(sequelize: Sequelize): typeof User {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "firstName",
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "lastName",
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
        },
        role_code: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "R3",
        },
        avatar: {
          type: DataTypes.STRING,
        },
        filename: {
          type: DataTypes.STRING,
        },
        refreshToken: {
          type: DataTypes.STRING,
        },
        lastActiveAt: {
          type: DataTypes.DATE,
          field: "last_active_at",
          allowNull: true,
        },
        lastDevice: {
          type: DataTypes.STRING,
          field: "last_device",
          allowNull: true,
        },
        lastOs: {
          type: DataTypes.STRING,
          field: "last_os",
          allowNull: true,
        },
        lastBrowser: {
          type: DataTypes.STRING,
          field: "last_browser",
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true,
        underscored: true,
      },
    );
    return User;
  }
}

export default User;
