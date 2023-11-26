console.log("hello express js")

import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  
  console.log("hello express js" , new Date());
  res.send('Hello World!' + new Date())
})
app.get('/profile', (req, res) => {
  
  console.log("hello express js" , new Date());
  res.send('this is my profile' + new Date())
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})