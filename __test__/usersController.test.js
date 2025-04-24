const request = require("supertest")
const app = require("../src/index.js")
const mongoose = require("mongoose")


const User = require("./../src/models/user.model.js")


describe("user controller test", () => {
    beforeEach(async () => {
        await User.deleteMany();
    }, 10000)


    afterAll(async () => {
        await User.deleteMany()
        await mongoose.connection.close()
    })



    it("Deberia crear un usuario correctamente en la base de datos", async ()=>{
        const user = {
            "name":"juan",
            "username":"juanchito",
            "password":"123456"
            }

            const response = await request(app).post("/api/users").send(user)
            expect(response.body.data).toBeDefined( )
            expect(response.body.ok).toBeTruthy()
            
              
    })
    it("deberia eliminar el usuario por medio del _id ",async ()=>{
        const user = {
            "name":"juan",
            "username":"juanchito",
            "password":"123456"
            }
            const dbUser = new User(user)
            await dbUser.save()

            const response = await request(app).delete(`/api/users/${dbUser._id.toString()}`)
            console.log(response.body)

            expect(response.body.ok).toBeTruthy()
            expect(response.body.data).toBeDefined()
    })
})

