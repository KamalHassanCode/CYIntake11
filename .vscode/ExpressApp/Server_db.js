const express = require('express')
const app = express()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'test',
  host: 'localhost',
  database: 'db11',
  password: 'test',
  port: 5432,
})
pool.connect((err, client, release) => {
      if (err) {
           return console.error(
              'Error acquiring client', err.stack)
      }
      client.query('SELECT NOW()', (err, result) => {
          release()
          if (err) {
              return console.error(
                  'Error executing query', err.stack)
          }
          console.log("Connected to Database !")
      })
   })

app.get('/data', (req,res)=> {
pool.query('Select * from Simple_table',(err,result)=>{
    if(err)
    throw err;
res.json(result.rows)
})
})

app.get('/data/:id', (req,res)=>{
  const id = req.params.id;
  pool.query('Select * from Simple_table where id=$1', [id], (err,result)=>{
    if (err)
    throw err;
  res.json(result.rows)

  })
})
app.set("view engine", "ejs")
app.get('/'), (req,res)=>
res.render('form_data')

app.use(express.urlencoded())

app.post('/data', (req,res)=>{
  const id=number(req,body.id);
  const name=req.body.name;
  const age= parseInt (req.body)



app.listen(2000,()=>console.log("server running"))