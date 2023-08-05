const User=require("../model/user");

//Register the item
const register =async (req,res)=>
{
  const Itemname=req.body.Itemname;
  const Itemdesc=req.body.Itemdesc;
  const Itemcatg=req.body.Itemcatg;
  const Itemprc=req.body.Itemprc;
  //console.log(Name+" "+Age);
  try
  {
     const user=await User.create({
        Itemname,
        Itemdesc,
        Itemcatg,
        Itemprc
     });
     res.json({
        status:"Succees",
        ItemName:user.Itemname,
        Itemdesc:user.Itemdesc,
        Itemcatg:user.Itemcatg,
        Itemname:user.Itemprc,
     });
 }
 catch(err)
 {
    res.json( 
    {
       status:"Failed",
       data:err  
    })
 }
}

//Retrive the item
const retriveall=async(req,res)=>
{
   try{
   const retriveitems=await User.find();
   res.json(
      {
         status:"Success",
         Items:retriveitems,
      }
   )
   }
   catch(err)
   {
      res.json(
         {
            status:"Failed",
            data:err
         }
      )
   }
}

//Update the item
const updateone=async(req,res)=>{
   try{
      const {id}=req.params;
      const Item=await User.findByIdAndUpdate(id,req.body,{
         new:true,
         runValidators:true
      })
      res.json({
         status:"Success",
         Item: Item
      })
   }
   catch(err)
   {
      res.json({
         status:"Failed",
         data:err
      })
   }
}

//Delete the item
const deleteone=async(req,res)=>{
   
     const id=req.params.id;
     await User.findByIdAndRemove(id).exec();

}

//Retrive one item
const retriveone=async(req,res)=>{
   try{
      const id=req.params.id;
      const Item=await User.findById(id,req.body,{
         new:true,
         runValidators:true
      })
      res.json({
         status:"Success",
         Item:Item
      })
   }
   catch(err)
   {
      res.json({
         status:"Failed",
         data:err
      })
   }
}

module.exports={register,retriveall,updateone,deleteone,retriveone};