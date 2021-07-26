module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('quotes',
      [
        {
          origin: JSON.stringify({
            country: 'US',
            state: 'VA',
            city: 'Leesburg',
            postal_code: '20175',
            address: 'Shenandoah Street Southeast 234, VA - US',
            street: 'Shenandoah Street Southeast',
            street_number: '234',
            is_residencial_address: true,
            complement_address: null
          }),
          destination: JSON.stringify({
            country: 'US',
            state: 'VA',
            city: 'Herndon',
            postal_code: '20171',
            address: 'Dulles Station Boulevard 2341, VA - US',
            street: 'Dulles Station Boulevard',
            street_number: '2341',
            is_residencial_address: true,
            complement_address: null
          }),
          ship_date: new Date(),
          packages_meta: JSON.stringify({
            type: 'box',
            package_quantity: 2,
            weight_total: 4,
            weight_unit: 'LBS',
            measure_unit: 'IN',
            cargo_value: 0,
            currency: JSON.stringify({
              code: 'USD',
              symbol: '$'
            }),
            has_perfume: false,
            has_battery: false
          }),
          created_at: new Date(),
          updated_at: new Date(),
        }
      ], {});

    await queryInterface.bulkInsert('packages',
      [
        {
          quote_id: 1,
          weight: 2,
          width: 100,
          height: 100,
          length: 100,
          quantity: 1,
          items: JSON.stringify([
            {
              commodity: JSON.stringify({
                value: JSON.stringify({
                  description: 'Other',
                  'hts no': '6101.30.20'
                })
              }),
              unit_price: '',
              quantity: 1,
            }
          ]),
          contains: JSON.stringify({
            perfume: false,
            battery: false,
          }),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          quote_id: 1,
          weight: 2,
          width: 100,
          height: 100,
          length: 100,
          quantity: 1,
          items: JSON.stringify([
            {
              commodity: JSON.stringify({
                value: JSON.stringify({
                  description: 'Other',
                  'hts no': '6101.30.20'
                })
              }),
              unit_price: '',
              quantity: 1,
            }
          ]),
          contains: JSON.stringify({
            perfume: false,
            battery: false,
          }),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});

    await queryInterface.bulkInsert('shipments',
      [
        {
          user_uuid: '243944f3-b987-4939-8f3d-4d0d03d8528f',
          quote_id: 1,
          parcel_rate_source: 'Correios Brasil',
          recipient_id: '243944f3-b987-4939-8f3d-4d0d03d8528f',
          sender_id: '243944f3-b987-4939-8f3d-4d0d03d8528f',
          estimated_date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('packages', null, {});
    await queryInterface.bulkDelete('quotes', null, {});
  }
};
