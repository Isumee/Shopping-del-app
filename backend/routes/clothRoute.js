import express from "express"
import { addCloth, listCloth, removeCloth } from "../controllers/clothController.js"
import multer from "multer"

const clothRouter = express.Router()

//image storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

clothRouter.post("/add",upload.single("image"), addCloth)
clothRouter.get("/list",listCloth)
clothRouter.post("/remove",removeCloth)

export default clothRouter;