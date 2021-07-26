const { Model, DataTypes } = require('sequelize');

class Quote extends Model {
  static init(sequelize) {
    super.init({
      origin: DataTypes.JSON,
      destination: DataTypes.JSON,
      ship_date: DataTypes.DATE,
      packages_meta: DataTypes.JSON,
    }, {
      sequelize,
      modelName: 'Quote'
    });
  }

  static associate(models) {
    this.hasOne(models.Shipment, { foreignKey: 'quote_id' });
    this.hasMany(models.Package, { foreignKey: 'quote_id', as: 'packages' });
  }
}

module.exports = Quote;
