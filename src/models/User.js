const { v4: uuidv4 } = require('uuid');
const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      tax_id: DataTypes.STRING,
      category: DataTypes.STRING,
      address: DataTypes.JSON,
      phone: DataTypes.JSON,
    }, {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: (user, options) => {
          user.id = uuidv4();
        },
      }
    });
  }

  static associate(models) {
    this.hasMany(models.Shipment, { foreignKey: 'user_uuid' });
    this.hasMany(models.Shipment, { foreignKey: 'recipient_id' });
    this.hasMany(models.Shipment, { foreignKey: 'sender_id' });
  }
}

module.exports = User;
