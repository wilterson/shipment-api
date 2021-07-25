const { Model, DataTypes } = require('sequelize');

class Quote extends Model {
  static init(sequelize) {
    super.init({
      origin: DataTypes.JSON,
      destination: DataTypes.JSON,
      ship_date: DataTypes.DATE,
      package_meta: DataTypes.JSON,
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasOne(models.Shipment);
    this.hasMany(models.Package);
  }
}

module.exports = Quote;
