import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface MyDiaryAttributes {
  id: number;
  user_id: number;
  emotion: "positive" | "negative" | "neutral";
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MyDiaryCreationAttributes extends Optional<
  MyDiaryAttributes,
  "id" | "createdAt" | "updatedAt"
> {}

class MyDiary
  extends Model<MyDiaryAttributes, MyDiaryCreationAttributes>
  implements MyDiaryAttributes
{
  public id!: number;
  public user_id!: number;
  public emotion!: "positive" | "negative" | "neutral";
  public title!: string;
  public content!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    MyDiary.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }

  static initModel(sequelize: Sequelize): typeof MyDiary {
    MyDiary.init(
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
        emotion: {
          type: DataTypes.ENUM("positive", "negative", "neutral"),
          allowNull: false,
          defaultValue: "neutral",
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "MyDiary",
        tableName: "my_diaries",
        timestamps: true,
        underscored: true,
      },
    );
    return MyDiary;
  }
}

export default MyDiary;
