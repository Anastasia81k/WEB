const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productRouter = express.Router();

productRouter.get('/', (req, res)=>{
    res.render('pages/home');
})

productRouter.get('/about', (req, res)=>{
    let items = [
        {name:'Происхождение лошади',url:'https://fermoved.ru/loshadi/opisanie-vidy-osobennosti.html#h2_0'},
        {name:'Описание лошади',url:'https://fermoved.ru/loshadi/opisanie-vidy-osobennosti.html#h2_1'},
        {name:'Бег лошадей',url:'https://fermoved.ru/loshadi/opisanie-vidy-osobennosti.html#h2_2'},
        {name:'Породы лошадей',url:'https://fermoved.ru/loshadi/opisanie-vidy-osobennosti.html#h2_5'},
        {name:'Сбруя лошадей',url:'https://fermoved.ru/loshadi/opisanie-vidy-osobennosti.html#h2_9'}];
    res.render('pages/about',{
        links:items})
})

productRouter.get('/photo', (req, res)=>{
    res.render('pages/photo');
})


function messages(req, res, next){
    let message;
    res.locals.message = message;
    next();
}

productRouter.get('/info', messages, (req, res)=>{
    res.render('pages/forma')
})

productRouter.post('https://formspree.io/nastya81k@gmail.com', (req, res)=>{
    let message = req.body;
    res.locals.message = message;
    res.render('pages/forma',{
        message: true
    });
})

app.use("/", productRouter);

app.listen(port, ()=>{
    console.log("Server started")
})