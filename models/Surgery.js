module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define(
    'Surgery',
    {
      surgery_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
