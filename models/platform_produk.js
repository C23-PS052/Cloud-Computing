'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class platform_produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  platform_produk.init({
    produk_id: DataTypes.STRING,
    platform_id: DataTypes.INTEGER,
    unit_terjual: DataTypes.INTEGER,
    pendapatan: DataTypes.INTEGER,
    laba: DataTypes.INTEGER,
    margin: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'platform_produk',
  });
  return platform_produk;
};