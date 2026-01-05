import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface OrderAttributes {
  id: number;
  user_id: number;
  course_id: number;
  order_code: string;
  amount: number;
  status: "PENDING" | "PAID" | "CANCELED";
  payment_link_id?: string | null;
  checkout_url?: string | null;
  description?: string | null;
  coupon_code?: string | null;
  discount_percent?: number;
  paid_at?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderCreationAttributes
  extends Optional<
    OrderAttributes,
    | "id"
    | "payment_link_id"
    | "checkout_url"
    | "description"
    | "coupon_code"
    | "discount_percent"
    | "paid_at"
    | "createdAt"
    | "updatedAt"
  > {}

class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  public id!: number;
  public user_id!: number;
  public course_id!: number;
  public order_code!: string;
  public amount!: number;
  public status!: "PENDING" | "PAID" | "CANCELED";
  public payment_link_id!: string | null;
  public checkout_url!: string | null;
  public description!: string | null;
  public coupon_code!: string | null;
  public discount_percent!: number;
  public paid_at!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Order.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    Order.belongsTo(models.Course, { foreignKey: "course_id", as: "course" });
  }

  static initModel(sequelize: Sequelize): typeof Order {
    Order.init(
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
        order_code: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM("PENDING", "PAID", "CANCELED"),
          allowNull: false,
          defaultValue: "PENDING",
        },
        payment_link_id: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        checkout_url: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        coupon_code: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        discount_percent: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        paid_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Order",
        tableName: "orders",
        timestamps: true,
        underscored: true,
      }
    );
    return Order;
  }
}

export default Order;
