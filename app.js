require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/v1/auth', require('./routes/auth.routes'));
app.use('/v1/role', require('./routes/role.routes'));
app.use('/v1/community', require('./routes/community.routes'));
app.use('/v1/member', require('./routes/member.routes'));

module.exports = app;
