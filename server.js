// import { createServer } from "node:http";

// const server = createServer((request, response)=>{
//     response.write("Hello Node")

//     return response.end()
// })

// server.listen(3333)


import { fastify } from "fastify";
import { DatabaseMemory } from "./database_memory.js";

const server = fastify()
const database = new DatabaseMemory()

server.get('/', ()=>{
    return "Ola sAMBO"
})
server.get('/videos', ()=>{
    return "Ola Fastify"
})

server.post('/videos', (request, reply)=>{
    const body = request.body
    database.create({
        title: "Meu LOVE",
        desc: "Ebraim Sambo",
        duraction: 122
    })

    console.log(body)

    return reply.status(201).send()
})



server.put('/videos/:id', ()=>{
    return "Ola Fastify"
})


server.listen({
    port: 3333,
})