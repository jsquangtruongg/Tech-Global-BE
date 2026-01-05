import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface CourseAttributes {
  id: number;
  title: string;
  desc: string;
  image?: string;
  category: string;
  level: string;
  lessons_count: number;
  price: number;
  discount?: number;
  slug: string;
  status: "draft" | "published" | "archived";
  video_demo?: string;
  instructor_id?: number;
  duration?: string;
  rating?: number;
  students?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CourseCreationAttributes
  extends Optional<
    CourseAttributes,
    | "id"
    | "image"
    | "discount"
    | "slug"
    | "status"
    | "video_demo"
    | "duration"
    | "rating"
    | "students"
    | "createdAt"
    | "updatedAt"
  > {}

class Course
  extends Model<CourseAttributes, CourseCreationAttributes>
  implements CourseAttributes
{
  public id!: number;
  public title!: string;
  public desc!: string;
  public image!: string;
  public category!: string;
  public level!: string;
  public lessons_count!: number;
  public price!: number;
  public discount!: number;
  public slug!: string;
  public status!: "draft" | "published" | "archived";
  public video_demo!: string;
  public instructor_id?: number | undefined;
  public duration!: string;
  public rating!: number;
  public students!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Course.hasMany(models.Section, {
      foreignKey: "course_id",
      as: "sections",
    });
    Course.belongsTo(models.User, {
      foreignKey: "instructor_id",
      as: "instructor",
    });
    Course.hasMany(models.Cart, {
      foreignKey: "course_id",
      as: "inCarts",
    });
  }

  static initModel(sequelize: Sequelize): typeof Course {
    Course.init(
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
        desc: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        level: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lessons_count: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        discount: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        slug: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        status: {
          type: DataTypes.STRING,
          defaultValue: "draft",
        },
        video_demo: {
          type: DataTypes.STRING,
        },

        duration: {
          type: DataTypes.STRING,
        },
        rating: {
          type: DataTypes.FLOAT,
          defaultValue: 0,
        },
        students: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: "Course",
        tableName: "courses",
        timestamps: true,
        underscored: true,
      }
    );
    return Course;
  }
}

export default Course;
