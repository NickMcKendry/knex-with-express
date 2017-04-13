const express = require("express")

const app = express()
const port = 3001

app.get("/api/planets", (req, res) => {
  res.send('Space Yo')
})

app.listen(port, () => {
  console.log(`api listening on part ${port}`);
})
