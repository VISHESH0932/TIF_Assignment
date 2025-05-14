const Role = require('../models/role.model');
const { Generator } = require('snowflake-generator');
const SnowflakeGenerator = new Generator(1420070400000);

exports.createRole = async (req, res) => {
  const { name } = req.body;
  try {
    const role = await Role.create({ id: SnowflakeGenerator.generate(), name });
    res.status(201).json({ status: true, content: { data: role } });
  } catch (err) {
    res.status(500).json({ status: false, error: 'ROLE_CREATION_FAILED' });
  }
};

exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json({
      status: true,
      content: { meta: { total: roles.length }, data: roles }
    });
  } catch (err) {
    res.status(500).json({ status: false, error: 'ROLES_FETCH_FAILED' });
  }
};
