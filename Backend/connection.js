// mongodb+srv://shakeelareeba02:shakeelareeba@cluster0.wu8dtsx.mongodb.net/GL?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require('mongoose');
const url = "mongodb+srv://shakeelareeba02:shakeelareeba@cluster0.wu8dtsx.mongodb.net/GL?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;