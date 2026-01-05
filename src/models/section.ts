import { Model, DataTypes, Sequelize, Optional } from "sequelize";

export interface SectionAttributes {
  id: number;
  course_id: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SectionCreationAttributes
  extends Optional<SectionAttributes, "id" | "createdAt" | "updatedAt"> {}

class Section
  extends Model<SectionAttributes, SectionCreationAttributes>
  implements SectionAttributes
{
  public id!: number;
  public course_id!: number;
  public title!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Section.belongsTo(models.Course, {
      foreignKey: "course_id",
      as: "course",
    });
    Section.hasMany(models.Lesson, {
      foreignKey: "section_id",
      as: "lessons",
    });
  }

  static initModel(sequelize: Sequelize): typeof Section {
    Section.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        course_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Section",
        tableName: "sections",
        timestamps: true,
        underscored: true,
      }
    );
    return Section;
  }
}

export default Section;
