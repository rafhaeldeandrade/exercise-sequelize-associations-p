module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    {
      fullName: DataTypes.STRING,
      plan_id: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'Patients',
    },
  );

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: 'plan_id',
      as: 'plan',
    });
  };

  return Patient;
};
