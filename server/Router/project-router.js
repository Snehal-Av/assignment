const express=require('express')
const {projectForm, getallProject, updateProject, proDepartment, dashCards, getAllDelete} = require('../Controller/projectController')
const route=express.Router()

route.post("/project",projectForm)
route.get("/getproject",getallProject)
route.put("/updateproject/:id/status",updateProject)
route.get("/depart",proDepartment)
route.get("/dashcard",dashCards)



module.exports=route