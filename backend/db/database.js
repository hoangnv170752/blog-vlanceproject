const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = "mongodb+srv://hoangpresident:<password>@cluster0.6dfjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let mongo = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if(!err) {
        console.log("MongoDB Connection Successful");
    } else {
        console.log("MongoDB Connection failed" + err);
    }
});
