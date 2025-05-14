const app = require('./app');
const connectDB = require('./config/db');

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on ${process.env.PORT}`);
  });
});
