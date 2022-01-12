const {Router} = require("express");
const Specialty = require('../models/Specialty')

const router = Router();
router.get("/", async(req, res)=>{
    try{
        const speciality = await Specialty.find({})
        res.json(speciality)
    } catch (e) {
        res.status(500)
    }
})

module.exports = router