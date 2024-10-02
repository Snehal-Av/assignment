const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    pname:{
        type:String,
        require:true
    },
    reasion:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    division:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    priority:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    startDate:{
        type:Date,
        require:true
    },
    endDate:{
        type:Date,
        require:true,
       
    },
    status:{
     type:String,
     require:true,
     
    },
    location:{
      type:String,
      require:true
    }
})


const projectUser=new mongoose.model("addproject",projectSchema)

module.exports=projectUser