const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bcrypt=require('bcryptjs')
const dotenv=require('dotenv')
const router = require('./Router/auth-router')
const route = require('./Router/project-router')

dotenv.config();
const app=express()

const corsOptions={
  origin:'http://localhost:3000',
  methods:"GET,POST,PUT,DELETE,PATCH",
  Credential:true
}
app.use(cors(corsOptions))
app.use(express.json());
app.use("/auth",router)
app.use("/form",route)



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("connected successfully");
  
}).catch((err)=>console.log(err))



app.listen(process.env.PORT,()=>{
  console.log(`server is runnig on port ${process.env.PORT}`);
  
})