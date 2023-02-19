const mongoose = require("mongoose")
const express=require("express")

const NoteSchema = mongoose.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Author: { type: String, required: true }
},
    {
        versionKey: false
    })

const NotesModel = mongoose.model("note", NoteSchema)

module.exports = {
    NotesModel
}