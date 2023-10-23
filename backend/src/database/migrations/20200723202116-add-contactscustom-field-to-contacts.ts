
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("Contacts", {
      coluna_geral_1: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      coluna_geral_2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      coluna_geral_3: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      coluna_geral_4: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      coluna_geral_5: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      coluna_geral_6: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      coluna_geral_7: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      coluna_geral_8: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      coluna_geral_9: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      coluna_geral_10: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
    });
  },


  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Contacts", "email");
  }
};
