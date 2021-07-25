const { Model, DataTypes } = require('sequelize');

class Shipment extends Model {
  static init(sequelize) {
    super.init({
      parcel_rate_source: DataTypes.STRING,
      estimated_date: DataTypes.DATE,
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_uuid' });
    this.belongsTo(models.User, { foreignKey: 'recipient' });
    this.belongsTo(models.User, { foreignKey: 'sender' });
  }
}

module.exports = Shipment;
