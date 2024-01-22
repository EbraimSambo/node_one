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
    return "Ola Fastify"
})
server.get('/vedeos', ()=>{
    return "Ola Fastify"
})

server.post('/vedeos', (request, reply)=>{
    database.create({
        title: "Meu LOVE",
        desc: "Ebraim Sambo",
        duraction: 122
    })

    console.log(database.list())

    return reply.status(201).send()
})

server.get('/name/:name', (name)=>{
    return "Ola " .name
})

server.put('/vedeos/:id', ()=>{
    return "Ola Fastify"
})


server.listen({
    port: 3333,
})