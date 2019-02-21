const Koa = require("koa2")
const appStatic = require("koa-static")
const app=new Koa()
app.use(appStatic(__dirname))

app.listen(3000,(error)=>{
    console.log("server is ready on port 3000")
})