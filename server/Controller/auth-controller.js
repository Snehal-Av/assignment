const bcrypt=require('bcryptjs');
const UserModel = require('../Model/User');

const signUp=async(req,res)=>{
    try {
        const {email,password}=req.body;
        console.log(email,password)
        const userExist=await UserModel.findOne({email})
        console.log(userExist)

        if(userExist){
            return res.status(400).json({error:"Email already exists"});
        }

        // const hashPassword=await bcrypt.hash(password,10);

        const userCreated=await UserModel.create({email,password});
         res.status(201).json({msg:"Register successfully",token:userCreated.genrateToken(),userId:userCreated._id.toString()})
        // res.status(200).send({msg:"Registratuion successful"})
        // const saveUser=await userCreated.save();
        // res.status(201).json(saveUser)
    } catch (error) {
        console.log(error)
    }
}

const logIn=async(req,res)=>{
try {
    const {email,password}=req.body;
    const userExist=await UserModel.findOne({email})
    if(!userExist){
        return res.status(401).send({message:"Invalid Credidential"})
    }else if(userExist){
        res.status(200).send({msg:"login successful",token:userExist.genrateToken(),userId:userExist._id.toString()})
    }
    // const user=await bcrypt.compare(password,userExist.password)
    // const user=await userExist.camparePassword(password)

} catch (error) {
    console.log(error)
}
}

module.exports={signUp,logIn}