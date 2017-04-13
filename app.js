const express = require("express")
const pg = require('./db/knex')

const app = express()
const port = 3002

app.get("/api/planets", (req, res) => {
  pg('planet').select().then((data) => {
    res.json(data)
    //if you had a front end this would rneder through hbs
    // res.render('/', {data})
  })
})

app.listen(port, () => {
  console.log(`api listening on part ${port}`);
})
