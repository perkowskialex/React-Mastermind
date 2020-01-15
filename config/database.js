const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;
db.once("connected", function() {
  console.log(`connected to mongodb at ${db.host}:${db.port}`);
});
