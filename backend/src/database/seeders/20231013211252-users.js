'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'teste@email.com',
          password:
            '$2b$10$.OEfAyeNEX6TxycCOdADLuJyjMZGW0V8.IC5BAd4CukZug3nEwo6C',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
