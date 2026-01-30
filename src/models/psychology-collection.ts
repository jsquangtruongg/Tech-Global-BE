import { Model, DataTypes, Sequelize } from "sequelize";
 
class PsychologyCollection extends Model {
  public id!: number;
  public user_id!: number;
  public psychology_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
 
  static associate(models: any) {
    PsychologyCollection.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id",
    });
    PsychologyCollection.belongsTo(models.Psychology, {
      as: "article",
      foreignKey: "psychology_id",
    });
  }
 
  static initModel(sequelize: Sequelize): typeof PsychologyCollection {
    PsychologyCollection.init(
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
        psychology_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "PsychologyCollection",
        tableName: "psychology_collections",
        timestamps: true,
        underscored: true,
        indexes: [
          { fields: ["user_id"] },
          { fields: ["psychology_id"] },
          { unique: true, fields: ["user_id", "psychology_id"] },
        ],
      },
    );
    return PsychologyCollection;
  }
}
 
export default PsychologyCollection;
