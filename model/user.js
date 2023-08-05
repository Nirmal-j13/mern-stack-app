const mongoose=require("mongoose");

const userschema = mongoose.Schema({
      Itemname:{
        type:String,
        required:true,
      },
      Itemdesc:{
        type:String,
        required:true,
      },
      Itemcatg:{
        type:String,
        required:true,
      },
      Itemprc:{
        type:Number,
        required:true,
      }
    },
    {
      timestamps:true,
      toJSON:{virtual:true},
    },
)

const User = mongoose.model("Class",userschema);

module.exports=User;