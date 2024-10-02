const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})

userSchema.methods.genrateToken=function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email
        },
        process.env.SECRETE_KEY,
        {
            expiresIn:'30d'
        }
    )
    } catch (error) {
        
    }
}

const UserModel=new mongoose.model("User",userSchema)

module.exports=UserModel