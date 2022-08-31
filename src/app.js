const express = require('express')

const userRouter = require("./users/users.router").router
const authRouter = require("./auth/auth.route").router
const app = express()

//! esta configuracion es para utilizar el req.body
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "all ok"})
})


app.use("/api/v1/users", userRouter)
app.use("/api/v1/auth", authRouter)

app.listen(8000, () => {
    console.log('server started at port 8000')
})