var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin@sofielan-4nlt9.mongodb.net/STB?retryWrites=true&w=majority',()=>{
    console.log('db connect')
});
