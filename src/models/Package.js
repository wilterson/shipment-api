const { Model, DataTypes } = require('sequelize');

class Package extends Model {
  static init(sequelize) {
    super.init({
      weight: DataTypes.FLOAT,
      width: DataTypes.FLOAT,
      height: DataTypes.FLOAT,
      length: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      items: DataTypes.JSON,
      contains: DataTypes.JSON,
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsToMany(models.Quote, { foreignKey: 'quote_id', as: 'packages' });
  }
}

module.exports = Package;
