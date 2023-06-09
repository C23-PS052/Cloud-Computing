'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class platform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      platform.belongsTo(models.User, {
        foreignKey: 'user_id',
      });

      platform.hasMany(models.platform_produk, {
        foreignKey: 'platform_id',
      });
    }
  }
  platform.init(
    {
      user_id: DataTypes.STRING,
      nama_channel: DataTypes.STRING,
      url_platform: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'platform',
    },
  );
  return platform;
};
