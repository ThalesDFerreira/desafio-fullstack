'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'usuario1@gmail.com',
          password:
            '$2b$10$DSnzAUm5f9sfS9SYUDToD.e6A.ZQCNDOXXgEmP8bRSVsZ6rpjjA4S',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
