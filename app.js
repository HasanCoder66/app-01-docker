import express from 'express'

const app = express()
app.use(express.json())

let users = []


app.get("/api/health", (req, res) => {
    return res.status(200).json({
        status:true,
        message:"hello from the server"
    })
})

app.put("/api/users", (req, res) => {
    return res.status(200).json({
        status:true,
        message:"user updated successfully!"
    })
})


app.get("/api/users", (req, res) => {
    return res.status(200).json({
        status:true,
        message:"users retrieve successfully!",
        data: users
    })
})

app.post("/api/users", (req, res) => {

    users.push(req.body)

    return res.status(200).json({
        status:true,
        message:"user created successfully!"
    })
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
    
})