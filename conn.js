const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ns_user:01845551440@crud.fihai.mongodb.net/mern_crud');
// mongoose.connect('mongodb+srv://ns_user:01845551440@crud.fihai.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology:true});

const dbobject = mongoose.connection
dbobject.on('connected', () => {console.log('Mongo DB connection successful')})
dbobject.on('error', ()=>{console.log('Mongo DB connection Failed')})

module.exports = mongoose