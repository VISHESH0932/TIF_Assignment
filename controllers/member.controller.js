const Member = require('../models/member.model');
const { Generator } = require('snowflake-generator');
const SnowflakeGenerator = new Generator(1420070400000);

exports.addMember = async (req, res) => {
  const { community, user, role } = req.body;
  try {
    const member = await Member.create({
      id: SnowflakeGenerator.generate(),
      community,
      user,
      role
    });
    res.status(201).json({ status: true, content: { data: member } });
  } catch (err) {
    res.status(500).json({ status: false, error: 'MEMBER_CREATION_FAILED' });
  }
};

exports.removeMember = async (req, res) => {
  try {
    await Member.deleteOne({ id: req.params.id });
    res.json({ status: true });
  } catch (err) {
    res.status(500).json({ status: false, error: 'MEMBER_DELETION_FAILED' });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find({ community: req.params.id });
    res.json({
      status: true,
      content: { meta: { total: members.length }, data: members }
    });
  } catch (err) {
    res.status(500).json({ status: false, error: 'MEMBERS_FETCH_FAILED' });
  }
};
