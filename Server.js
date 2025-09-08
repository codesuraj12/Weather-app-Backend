const express = require('express')
const dotenv = require('dotenv')
   const cors = require('cors');
const app = express()
const port = 3000


dotenv.config()
app.use(cors({
     origin: ["http://localhost:5173", "https://weather-app-frontend-rho-amber.vercel.app/"]
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/weather/:city', async(req, res) => {
try {
    const {city} = req.params
    const API_KEY = process.env.WEATHER_API_KEY
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)

const data = await response.json()
res.json(data)
console.log(data)
} catch (error) {
    res.send('error',error)
}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
