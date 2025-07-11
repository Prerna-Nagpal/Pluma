import mongoose from "mongoose";
//You need to create a Schema
//then create a model based off that schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }//Createdat,updatedat
);
const Note = mongoose.model("Note", noteSchema)
export default Note