import { log } from "console";
import clothModel from "../models/clothModel.js";
import fs from 'fs'

//add cloth item
const addCloth = async (req,res)=>{
     
   let image_filename = `${req.file.filename}`

   const cloth = new clothModel({
    name:req.body.name,
    description: req.body.description,
    price: req.body.price,
    category:req.body.category,
    image:image_filename
   })

   try {
    await cloth.save();
    res.json({success:true,message:"Cloth Added"})
   } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
   }

}

//all cloth list
const listCloth = async (req,res) => {
   try {
      const cloths = await clothModel.find({})
      res.json({success:true,data:cloths})
   } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
   }
}

//remove cloth item

const removeCloth = async (req,res)=>{
  try {
    const cloth = await clothModel.findById(req.body.id)
    fs.unlink(`uploads/${cloth.image}`,()=>{})

    await clothModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"Cloth Removed"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

export {addCloth,listCloth,removeCloth}