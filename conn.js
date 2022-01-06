const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology:true});

const dbobject = mongoose.connection
dbobject.on('connected', () => {console.log('Mongo DB connection successful')})
dbobject.on('error', ()=>{console.log('Mongo DB connection Failed')})