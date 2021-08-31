const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')
const app = express()

app.use(express.json())
app.use(cors())

const {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse } = ('./controller/ctrl')

// app.use(express.json())
// app.use(cors())
// const getAllHouses = () => axios.get(baseURL).then(housesCallback).catch(errCallback)
// const housesCallback = ({ data: houses }) => displayHouses(houses)
// const errCallback = err => console.log(err)
app.get(`API/houses`, ctrl.getAllHouses)
app.delete(`/api/houses/:id`, ctrl.deleteHouse)
app.post(`/api/houses`, ctrl.createHouse)
app.put(`/api/houses/:id`, ctrl.updateHouse)


app.listen(4004, () => console.log(`serving up on port 4004`))
