module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
    'Surgery',
    {
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Surgeries',
    },
  );

  return Surgery;
};
