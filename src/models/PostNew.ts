import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface PostNewAttributes {
  id: number;
  title: string;
  slug: string;
  desc: string;
  content: string;
  image?: string;
  
  category: string;
  status: "draft" | "published" | "archived";
  views: number;
  author_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PostNewCreationAttributes
  extends Optional<
    PostNewAttributes,
    | "id"
    | "image"
    | "status"
    | "views"
    | "author_id"
    | "createdAt"
    | "updatedAt"
  > {}

class PostNew
  extends Model<PostNewAttributes, PostNewCreationAttributes>
  implements PostNewAttributes
{
  public id!: number;
  public title!: string;
  public slug!: string;
  public desc!: string;
  public content!: string;
  public image!: string;
  public category!: string;
  public status!: "draft" | "published" | "archived";
  public views!: number;
  public author_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    PostNew.belongsTo(models.User, {
      foreignKey: "author_id",
      as: "authorData",
    });
  }

  static initModel(sequelize: Sequelize): typeof PostNew {
    PostNew.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        slug: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        desc: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT("long"),
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM("draft", "published", "archived"),
          defaultValue: "draft",
        },
        views: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        author_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "PostNew",
        tableName: "post_news",
        timestamps: true,
        underscored: true,
      }
    );
    return PostNew;
  }
}

export default PostNew;
