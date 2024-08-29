const mongoose = require("mongoose");

const url = "mongodb+srv://raghuveermustimalla:12112002@cluster0.sm7wh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
