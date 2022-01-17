import express from "express";
import mongoose from "mongoose";
import Post from "./post.js";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL = "mongodb+srv://admin:admin@cluster0.lujnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router);

async function StartUp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => {
            console.log('SERVER STARTED ON PORT ' + PORT)
        })
    }catch(e){
        console.log(e)
    }
}

StartUp();
