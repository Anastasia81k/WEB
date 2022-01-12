const {Router} = require("express");
const Timetable = require('../models/Timetable')

const router = Router();
router.get("/", async(req, res)=>{
    try{
        const timetables = await Timetable.find({})
        res.json(timetables)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так c БД, попробуйте снова' })
    }
   /*let timetable = await Timetable.find();
   return res.status(200).send(timetable)*/

})

router.post('/', async (req, res)=>{
    let timetables = await Timetable.create(req.body);
    return res.status(201).send({
        error: false,
        timetables
    })
})

module.exports = router