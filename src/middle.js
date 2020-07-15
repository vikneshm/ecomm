const express = require('express')
const app = express()
const port=3001;

app.use((req,res,next)=>{
	next()
})

app.get('/',(req,res) => {
	res.send('Home Page1321')
})

app.listen(port,console.log(`Listening to port ${port}`));