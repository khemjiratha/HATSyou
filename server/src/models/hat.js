module.exports = (sequelize, DataTypes) => {
  const Hat = sequelize.define("Hat", {
    hatId: DataTypes.STRING,
    hatType: DataTypes.STRING,
    hatBrand: DataTypes.STRING,
    hatColor: DataTypes.STRING,
    amountOfHat: DataTypes.STRING,
    
  })

  return Hat;
}
