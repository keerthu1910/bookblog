const jsonserver=require('json-server')
const server=jsonserver.create()
const router=jsonserver.router("./server/db.json")
require('dotenv').config()
const middlewares=jsonserver.defaults({
    static:"./build"
})

const port=(process.env.PORT || 5000)
server.use(middlewares)
server.use(
    jsonserver.rewriter({
        "/api/*":"/$1",
    })
)

server.use(router)
server.listen(port,()=>{
    console.log("server is running")
})