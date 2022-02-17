const route = require('express').Router();
const { Patient, Plan } = require('../models');

route.get('/:id', async (req, res) => {
  const { id } = req.params;

  const plan = await Plan.findOne({
    where: { plan_id: id },
    include: [
      { model: Patient, as: 'patients', attributes: { exclude: ['plan_id'] } },
    ],
  });

  return res.status(200).json(plan);
});

module.exports = route;
