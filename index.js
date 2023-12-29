import express from "express"


const app = express()
app.use(express.json())

app.get("/" , (req , res)=>{
    res.send("<h1>Have a good Day</h1>")
})
app.get("/hello" , (req , res)=>{
    res.send("<h1>Kese ho app</h1>")
})
const PORT = 3000

app.listen(PORT , ()=>{
    console.log(`Server is Running on port ${PORT}`)
})
