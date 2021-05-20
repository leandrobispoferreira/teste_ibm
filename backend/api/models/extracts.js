'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extracts = sequelize.define("Extracts", {   
    transaction_date: DataTypes.DATE,
    transaction_value:  DataTypes.DOUBLE
  }, {});

  Extracts.associate = function(models) {
    Extracts.belongsTo(models.Clients, {
      foreignKey: 'origin_id'
    }),
    Extracts.belongsTo(models.Clients, {
      foreignKey: 'destiny_id'
    })
  }
  return Extracts;
};