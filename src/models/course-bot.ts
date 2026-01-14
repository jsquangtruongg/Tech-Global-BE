import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface CourseBuyTradeAttributes {
  id: number;
  code: string;
  name: string;
  subtitle?: string | null;
  image?: string | null;
  is_popular?: boolean;
  rating?: number;
  profit_display?: string | null;
  drawdown_display?: string | null;
  asset_type?: string | null;
  highlights?: string[] | null;
  monthly_usd: number;
  yearly_usd: number;
  status: "ACTIVE" | "INACTIVE";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CourseBuyTradeCreationAttributes
  extends Optional<
    CourseBuyTradeAttributes,
    | "id"
    | "subtitle"
    | "highlights"
    | "status"
    | "createdAt"
    | "updatedAt"
    | "image"
    | "is_popular"
    | "rating"
    | "profit_display"
    | "drawdown_display"
    | "asset_type"
  > {}

class CourseBuyTrade
  extends Model<CourseBuyTradeAttributes, CourseBuyTradeCreationAttributes>
  implements CourseBuyTradeAttributes
{
  public id!: number;
  public code!: string;
  public name!: string;
  public subtitle!: string | null;
  public image!: string | null;
  public is_popular!: boolean;
  public rating!: number;
  public profit_display!: string | null;
  public drawdown_display!: string | null;
  public asset_type!: string | null;
  public highlights!: string[] | null;
  public monthly_usd!: number;
  public yearly_usd!: number;
  public status!: "ACTIVE" | "INACTIVE";
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initModel(sequelize: Sequelize): typeof CourseBuyTrade {
    CourseBuyTrade.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subtitle: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        is_popular: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        rating: {
          type: DataTypes.FLOAT,
          defaultValue: 5.0,
        },
        profit_display: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        drawdown_display: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        asset_type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        highlights: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        monthly_usd: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        yearly_usd: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
          allowNull: false,
          defaultValue: "ACTIVE",
        },
      },
      {
        sequelize,
        modelName: "CourseBuyTrade",
        tableName: "course_buy_trades",
        timestamps: true,
        underscored: true,
      }
    );

    return CourseBuyTrade;
  }
}

export default CourseBuyTrade;
