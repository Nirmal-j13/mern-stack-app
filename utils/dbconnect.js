const mongoose=require("mongoose");

const dbconnect=async (req,res)=>
{
    try 
    {
      await mongoose.connect("mongodb+srv://nirmalnj2003:Nirmal123@cluster0.gaxia06.mongodb.net/?retryWrites=true&w=majority")
      .then(()=>console.log("DB Connected"));
    }
    catch(e) 
    {
      console.log(e);
    }
}
dbconnect();