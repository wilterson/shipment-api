const Package = require('../models/Package');
const Quote = require('../models/Quote');
const Shipment = require('../models/Shipment');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const shipments = await Shipment.findAll({
      include:
        [
          { association: 'recipient' },
          { association: 'sender' },
          { association: 'user' },
          { association: 'quote', include: { association: 'packages' } },
        ]
    });

    return res.json(shipments);
  },

  async get(req, res) {
    const { id } = req.params;

    const shipment = await Shipment.findByPk(id, {
      include:
        [
          { association: 'recipient' },
          { association: 'sender' },
          { association: 'user' },
          { association: 'quote', include: { association: 'packages' } },
        ]
    });

    return res.json(shipment);
  },

  async store(req, res) {
    const {
      user_uuid,
      email,
      parcel_rate_source,
      recipient: recipientData,
      sender: senderData,
      estimated_date,
      quote: quoteData,
    } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'You need to be logged in to create a shipment.' });
    }

    const sender = await User.findOrCreate({ where: senderData });
    const recipient = await User.findOrCreate({ where: recipientData });

    const quote = await Quote.create(quoteData, { include: [{ association: 'packages' }] });

    const created = await Shipment.create({
      user_uuid,
      parcel_rate_source,
      estimated_date,
      quote_id: quote.id,
      recipient_id: recipient[0].id,
      sender_id: sender[0].id
    });

    const shipment = await Shipment.findByPk(created.id, {
      include:
        [
          { association: 'recipient' },
          { association: 'sender' },
          { association: 'user' },
          { association: 'quote', include: { association: 'packages' } },
        ]
    });

    return res.json(shipment);
  }
};
