const express = require('express')
const app = express ()

app.get('/',(req,res)=>{
res.send('hello world')
})

app.get('/Profile', (req,res)=>
res.send("Profile page")
)
app.get('/About', (req,res)=>
res.send("About page")
)
app.get('/user',(req,res)=>
res.json([
    { id:1, 
        title:'watch',
        price:200
    },
])),

app.use(express.static('public'))
app.get('user', (req,res)=>{
    res.json(data);
}),


app.listen(8080,()=>console.log("Server running at port 8080"))
