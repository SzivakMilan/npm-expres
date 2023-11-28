const express = require('express')
const path = require(`path`)
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, `/frontend/index.html`))
})


app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, `/frontend/public/style.css`))
  })

  app.get('/kismacska', (req, res) => {
    res.send('kismacska')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})