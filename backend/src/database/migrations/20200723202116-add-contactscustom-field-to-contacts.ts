
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn('Contacts', 'coluna_geral_1', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      }),
      queryInterface.addColumn('Contacts', 'coluna_geral_2', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      }),
      queryInterface.addColumn('Contacts', 'coluna_geral_3', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      }),
      queryInterface.addColumn('Contacts', 'coluna_geral_4', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      }),
      queryInterface.addColumn('Contacts', 'coluna_geral_5', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      }),
      queryInterface.addColumn('Contacts', 'coluna_geral_6', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      }),
      queryInterface.addColumn('Contacts', 'coluna_geral_7', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      }),
      queryInterface.addColumn('Contacts', 'coluna_geral_8', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      }),
      queryInterface.addColumn('Contacts', 'coluna_geral_9', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      }),
      queryInterface.addColumn('Contacts', 'coluna_geral_10', {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      })
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Contacts', 'coluna_geral_1'),
      queryInterface.removeColumn('Contacts', 'coluna_geral_2'),
      queryInterface.removeColumn('Contacts', 'coluna_geral_3'),
      queryInterface.removeColumn('Contacts', 'coluna_geral_4'),
      queryInterface.removeColumn('Contacts', 'coluna_geral_5'),
      queryInterface.removeColumn('Contacts', 'coluna_geral_6'),
      queryInterface.removeColumn('Contacts', 'coluna_geral_7'),
      queryInterface.removeColumn('Contacts', 'coluna_geral_8'),
      queryInterface.removeColumn('Contacts', 'coluna_geral_9'),
      queryInterface.removeColumn('Contacts', 'coluna_geral_10'),
    ];
  }
};
