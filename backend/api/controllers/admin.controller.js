const Notice = require('../models/notice.model')
const Attendee = require('../models/attendee.model')
const Researcher = require('../models/researcher.model')
const Presenter = require('../models/presenter.model')

const approveNotice = async (req,res) => {
    try{
        const firstNotice = await Notice.findByIdAndUpdate(req.params.id,
            {
                isApproved : "Approved",
            })
        res.status(200).json({message: 'notice successfully approved'})
    }catch(err){
        res.status(400).json({message: err.message })
    }
}

const getNotice = async(req,res) =>{
    try{
        const firstNotice = await Notice.find()
        res.json(firstNotice)
    }catch(err){
        res.status(400).json({message: err.message})
    } 
}

const attendeesCount = async(req,res)=>{
    try{
        const attendeeCount = await Attendee.count()
        res.json(attendeeCount)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const researchersCount = async(req,res) => {
    try{
        const researcherCount = await Researcher.count();
        res.json(researcherCount)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const presentersCount = async(req,res) => {
    try{
        const presentersCount = await Presenter.count();
        res.json(presentersCount)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}





module.exports = { approveNotice , getNotice ,attendeesCount, researchersCount, presentersCount }