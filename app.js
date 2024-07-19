const express=require("express")
const collection=require("./mongo")
const cors=require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post("/" , async(req,res) => {
    const {userInfo}=req.body

    const data = {
        userInfo:userInfo
    }
    
    await collection.insertMany([data])
})

app.listen(8000 , () => {
    console.log("port connected")
})