const Community = require('../models/community.model');
const Member = require('../models/member.model');
const { Generator } = require('snowflake-generator');
const SnowflakeGenerator = new Generator(1420070400000);

exports.createCommunity = async (req, res) => {
  const { name } = req.body;
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  try {
    const community = await Community.create({
      id: SnowflakeGenerator.generate(),
      name,
      slug,
      owner: req.user.id
    });
    res.status(201).json({ status: true, content: { data: community } });
  } catch (err) {
    res.status(500).json({ status: false, error: 'COMMUNITY_CREATION_FAILED' });
  }
};

exports.getCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json({
      status: true,
      content: { meta: { total: communities.length }, data: communities }
    });
  } catch (err) {
    res.status(500).json({ status: false, error: 'COMMUNITIES_FETCH_FAILED' });
  }
};

exports.getCommunity = async (req, res) => {
  try {
    const community = await Community.findOne({ id: req.params.id });
    if (!community) {
      return res.status(404).json({ status: false, error: 'COMMUNITY_NOT_FOUND' });
    }
    res.json({ status: true, content: { data: community } });
  } catch (err) {
    res.status(500).json({ status: false, error: 'COMMUNITY_FETCH_FAILED' });
  }
};


exports.getMyCommunities = async (req, res) => {
  try {
    const memberships = await Member.find({ user: req.user.id }).populate('community');
    const communities = memberships.map((m) => m.community);
    res.json({
      status: true,
      content: {
        meta: { total: communities.length },
        data: communities
      }
    });
  } catch (err) {
    res.status(500).json({ status: false, error: 'FETCH_MY_COMMUNITIES_FAILED' });
  }
};

exports.getOwnedCommunities = async (req, res) => {
  try {
    const ownedCommunities = await Community.find({ owner: req.user.id });
    res.json({
      status: true,
      content: {
        meta: { total: ownedCommunities.length },
        data: ownedCommunities
      }
    });
  } catch (err) {
    res.status(500).json({ status: false, error: 'FETCH_OWNED_COMMUNITIES_FAILED' });
  }
};
