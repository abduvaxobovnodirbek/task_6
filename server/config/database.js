const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected`);
};

module.exports = connectToDatabase;
