import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface BuyBotAttributes {
  id: number;
  user_id: number;
  order_code: string;
  product_id: string;
  plan: "monthly" | "yearly";
  email: string;
  tradingview_username: string;
  amount: number;
  status: "PENDING" | "PAID" | "CANCELED";
  payment_link_id?: string | null;
  checkout_url?: string | null;
  description?: string | null;
  coupon_code?: string | null;
  discount_percent?: number;
  paid_at?: Date | null;
  activation_at?: Date | null;
  email_sent_at?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BuyBotCreationAttributes
  extends Optional<
    BuyBotAttributes,
    | "id"
    | "payment_link_id"
    | "checkout_url"
    | "description"
    | "coupon_code"
    | "discount_percent"
    | "paid_at"
    | "activation_at"
    | "email_sent_at"
    | "createdAt"
    | "updatedAt"
  > {}

class BuyBot
  extends Model<BuyBotAttributes, BuyBotCreationAttributes>
  implements BuyBotAttributes
{
  public id!: number;
  public user_id!: number;
  public order_code!: string;
  public product_id!: string;
  public plan!: "monthly" | "yearly";
  public email!: string;
  public tradingview_username!: string;
  public amount!: number;
  public status!: "PENDING" | "PAID" | "CANCELED";
  public payment_link_id!: string | null;
  public checkout_url!: string | null;
  public description!: string | null;
  public coupon_code!: string | null;
  public discount_percent!: number;
  public paid_at!: Date | null;
  public activation_at!: Date | null;
  public email_sent_at!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    BuyBot.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }

  static initModel(sequelize: Sequelize): typeof BuyBot {
    BuyBot.init(
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
        order_code: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        product_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        plan: {
          type: DataTypes.ENUM("monthly", "yearly"),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: { isEmail: true },
        },
        tradingview_username: {
          type: DataTypes.STRING,
          allowNull: false,
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
        activation_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        email_sent_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "BuyBot",
        tableName: "buy_bots",
        timestamps: true,
        underscored: true,
      }
    );
    return BuyBot;
  }
}

export default BuyBot;
