const { Model, DataTypes } = require('sequelize');

class Shipment extends Model {
  static init(sequelize) {
    super.init({
      parcel_rate_source: DataTypes.STRING,
      estimated_date: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'Shipment'
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_uuid', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'recipient_id', as: 'recipient' });
    this.belongsTo(models.User, { foreignKey: 'sender_id', as: 'sender' });
    this.belongsTo(models.Quote, { foreignKey: 'quote_id', as: 'quote' });
  }
}

module.exports = Shipment;
