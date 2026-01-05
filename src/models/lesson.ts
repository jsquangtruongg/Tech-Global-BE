import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface LessonAttributes {
  id: number;
  section_id: number;
  title: string;
  duration?: string;
  video_url?: string;
  preview?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LessonCreationAttributes
  extends Optional<
    LessonAttributes,
    "id" | "duration" | "preview" | "createdAt" | "updatedAt"
  > {}

class Lesson
  extends Model<LessonAttributes, LessonCreationAttributes>
  implements LessonAttributes
{
  public id!: number;
  public section_id!: number;
  public title!: string;
  public duration!: string;
  public video_url?: string;
  public preview!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Lesson.belongsTo(models.Section, {
      foreignKey: "section_id",
      as: "section",
    });
  }

  static initModel(sequelize: Sequelize): typeof Lesson {
    Lesson.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        section_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        duration: {
          type: DataTypes.STRING,
          defaultValue: "00:00",
        },
        video_url: {
          type: DataTypes.STRING,
        },
        preview: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        modelName: "Lesson",
        tableName: "lessons",
        timestamps: true,
        underscored: true,
      }
    );
    return Lesson;
  }
}

export default Lesson;
