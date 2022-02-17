const route = require('express').Router();
const { Patient, Plan } = require('../models');

// Vou abstrair toda a camada de service aqui no controller mesmo, pra focar no exercício.
route.get('/', async (_req, res) => {
  const patients = await Patient.findAll({
    attributes: { exclude: ['plan_id'] },
    include: [{ model: Plan, as: 'plan' }],
  });

  return res.status(200).json(patients);
});

module.exports = route;
