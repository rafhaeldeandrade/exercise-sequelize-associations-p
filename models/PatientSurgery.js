module.exports = (sequelize, _DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {},
    {
      timestamps: false,
      tableName: 'Patient_surgeries',
    },
  );

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Patient, {
      through: models.PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
      as: 'surgeries',
    });

    models.Surgery.belongsToMany(models.Surgery, {
      through: models.PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
      as: 'patients',
    });
  };

  return PatientSurgery;
};
