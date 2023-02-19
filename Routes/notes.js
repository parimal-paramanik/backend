const express = require("express")
const  notesRouter = express.Router()
const {NotesModel} = require("../Model/notesModel")
notesRouter.use(express.json())

notesRouter.post("/newNotes", async(req,res)=>{
    try{
    const newNotes = new NotesModel(req.body)
      await newNotes.save()
      res.send("Notes Added")
         
    }catch(error){
      res.send("error")
    }
})
notesRouter.get("/getnote", async(req,res)=>{
  try{
    const notes = await NotesModel.find()
    res.send(notes)
  }catch(error){
    res.send(error.message)
  } 

})

notesRouter.delete("/delete/:id", async(req,res)=>{
  try{
      await NotesModel.findByIdAndDelete({_id:req.params.id})
      res.send("Delete done")
  }catch(error){
      res.send(error)
  }
})
notesRouter.patch("/update/:id", async(req,res)=>{
    try{
        await NotesModel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.send("Update done")
    }catch(error){
        res.send(error)
    }
})

module.exports={
    notesRouter
}