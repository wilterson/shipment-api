const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          uuid: '243944f3-b987-4939-8f3d-4d0d03d8528f',
          full_name: 'John Doe',
          email: 'user_email@hotmail.com',
          tax_id: '45657879',
          category: 'individual',
          address: JSON.stringify({
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
          phone: JSON.stringify({
            prefix: '+1',
            number: '32453455345'
          }),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          uuid: uuidv4(),
          full_name: 'Mark Doe',
          email: 'mark@hotmail.com',
          tax_id: '7894565',
          category: 'individual',
          address: JSON.stringify({
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
          phone: JSON.stringify({
            prefix: '+1',
            number: '878798798'
          }),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          uuid: uuidv4(),
          full_name: 'JohnDoe & Cia',
          email: 'johndoe@johndoeinc.com',
          tax_id: '45677788',
          category: 'company',
          address: JSON.stringify({
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
          phone: JSON.stringify({
            prefix: '+1',
            number: '669955454'
          }),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          uuid: uuidv4(),
          full_name: 'Cia ltda',
          email: 'contact@cialtda.com',
          tax_id: '778789544',
          category: 'company',
          address: JSON.stringify({
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
          phone: JSON.stringify({
            prefix: '+1',
            number: '78887877844'
          }),
          created_at: new Date(),
          updated_at: new Date(),
        },

      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
