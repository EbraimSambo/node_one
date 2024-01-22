// import { createServer } from "node:http";

// const server = createServer((request, response)=>{
//     response.write("Hello Node")

//     return response.end()
// })

// server.listen(3333)


import { fastify } from "fastify";

const server = fastify()

server.get('/', ()=>{
    return "Ola Fastify"
})

server.get('/hello', ()=>{
    return "Ola Mundo"
})

server.get('/node', ()=>{
    return "Ola Node"
})

server.listen({
    port: 3333,
})