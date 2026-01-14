import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("buy_bots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("buy_bots");
  },
};

