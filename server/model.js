const mongoose = require("mongoose");
// 链接mongo 并且使用mirol这个集合
const DB_URL = "mongodb://localhost/mirol";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
  console.log("mogon is connected");
});

const models = {
  user: {
    user: { type: String, require: true },
    pwd: { type: String, require: true },
    type: { type: String, require: true },
    avatar: { type: String },
    desc: { type: String },
    title: { type: String },
    company: { type: String },
    money: { type: String }
  },
  chat: {}
};

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: name => mongoose.model(name)
};
