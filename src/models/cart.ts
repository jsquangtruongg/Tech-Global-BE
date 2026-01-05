import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface CartAttributes {
  id: number;
  user_id: number;
  course_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CartCreationAttributes
  extends Optional<CartAttributes, "id" | "createdAt" | "updatedAt"> {}

class Cart
  extends Model<CartAttributes, CartCreationAttributes>
  implements CartAttributes
{
  public id!: number;
  public user_id!: number;
  public course_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Cart.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    Cart.belongsTo(models.Course, { foreignKey: "course_id", as: "course" });
  }

  static initModel(sequelize: Sequelize): typeof Cart {
    Cart.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        course_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Cart",
        tableName: "carts",
        timestamps: true,
        underscored: true,
      }
    );
    return Cart;
  }
}

export default Cart;
