const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded({ extended: true }))



/*
// IMPORT MODELS
require('./models/Timetable');



mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://dasha:dasha@cluster0.stkpf.mongodb.net/kursach?retryWrites=true&w=majority"`);

app.use(bodyParser.json());

//IMPORT ROUTES
require('./routes/timetable')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});




*/













const PORT = 5000;
const URL = "mongodb+srv://dasha:dasha@cluster0.stkpf.mongodb.net/kursach?retryWrites=true&w=majority"
//app.use('/api/main', require('./routes/main'))
app.use('/api/timetable', require('./routes/timetable'))

async function start(){
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}


start()
