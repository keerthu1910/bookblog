const jsonserver=require('json-server')
const server=jsonserver.create()
const router=jsonserver.router("../server/db.json")
const middlewares=jsonserver.defaults({
    static:"./build"
})

const port=3001
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