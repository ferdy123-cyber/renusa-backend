const { Model, DataTypes } = require("sequelize");
const connection = require("../connection");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT(25),
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    modelName: "Datas",
    freezeTableName: true,
    sequelize: connection,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Product;
