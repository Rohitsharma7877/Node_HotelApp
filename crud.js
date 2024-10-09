const express= require("express")

app.get("/", async(req, res)=>{
    try{
        const crud =await scroll.find();
        res.send(crud)
    }
    catch(error){
        console.log(err);
        res.send("somethings wrong")
    }
})

app.post("/create", async(req, res)=>{
    const payload = req.body
    console.log("create the notes", payload)
    try{
        const newcrud =new scroll(payload);
        await newcrud.save()
        res.send(crud)
    }
    catch(error){
        console.log(err);
        res.send("somethings wrong")
    }
})
