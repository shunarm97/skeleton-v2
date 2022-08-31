const express = require('express')

const userRouter = require("./users/users.router").router

const app = express()

//! esta configuracion es para utilizar el req.body
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "all ok"})
})


app.use("/api/v1/users", userRouter)

app.listen(8000, () => {
    console.log('server started at port 8000')
})