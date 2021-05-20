'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define("Clients", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    account_number: DataTypes.INTEGER,
    account_balance: DataTypes.DOUBLE,
    active: DataTypes.BOOLEAN,
  }, {});

  Clients.associate = function(models) {
    Clients.hasMany(models.Extracts, {
      foreignKey: 'origin_id'
    }),
    Clients.hasMany(models.Extracts, {
      foreignKey: 'destiny_id'
    })
  }
  return Clients;
};