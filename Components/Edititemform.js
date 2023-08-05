import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function Edititemform()
{
    const [itemname, setItemname] = useState("");
    const [itemdesc, setItemdesc] = useState("");
    const [itemcatg, setItemcatg] = useState("");
    const [itemprc,  setItemprc] = useState();
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
     retrive();
    },[])
    const retrive=async()=>
    {
    try{
      let res=await fetch(`http://localhost:8000/api/v5/users/retriveone/${id}`)
      res=await res.json();
      console.warn(res);
      console.log(res.Item.Itemname);
      console.log(res.Item.Itemdesc);
      console.log(res.Item.Itemcatg);
      console.log(res.Item.Itemprc);
      setItemname(res.Item.Itemname);
      setItemdesc(res.Item.Itemdesc);
      setItemcatg(res.Item.Itemcatg);
      setItemprc(res.Item.Itemprc);
       }
       catch(e)
       {
          
       }
    }
          const HandleSubmit=async(event)=>
           {
              event.preventDefault();
            try{
              if(itemname.length<3)
              {
                    return(
                           <div>
                              {toast.warn('ItemName must be greater than 3!', {
                           position: toast.POSITION.TOP_RIGHT
                             })}
                           </div>)
              }
              if(itemdesc.length<15)
              {
                    return(
                           <div>
                              {toast.warn('ItemDescription  must be greater than 15 !', {
                           position: toast.POSITION.TOP_RIGHT
                             })}
                           </div>)
              }
              if(itemcatg.length<3)
              {
                    return(
                           <div>
                              {toast.warn('ItemCategory  must be greater than 15 !', {
                           position: toast.POSITION.TOP_RIGHT
                             })}
                           </div>)
              }
              if(!Number(itemprc))
              {
                    return(
                           <div>
                              {toast.warn('Itemprice  must be a number !', {
                           position: toast.POSITION.TOP_RIGHT
                             })}
                           </div>)
              }
           else if(itemname.length>3&&itemdesc.length>15&&itemcatg.length>3)
           {
            console.log(itemname);
           let res= await fetch(`http://localhost:8000/api/v5/users/updateone/${id}`, {
            method: "Put",
            body: JSON.stringify({
                 Itemname:itemname,
                 Itemdesc:itemdesc,
                 Itemcatg:itemcatg,
                 Itemprc:itemprc,
            }),   
            headers: {
                "Content-Type": "application/json"
            }
        });
         res=await res.json();
         console.log(res);
         return(
              <div>
                {toast.info('Updated Successfully !', {
    position: toast.POSITION.TOP_RIGHT
})}
              </div>)
           }
       }
           catch(e)
           {
              
           }
       }
    return(
        <div class="... flex items-center justify-center">
        <form class="mt-6">
        <h1 class="text-6xl font-bold 
            bg-gradient-to-g bg-clip-text  
            from-green-500 via--500 to-indigo-500
            animate-text mb-8 
            ">
           Update the Item
        </h1>
        <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Item Name</label>
        <input 
               type="text" placeholder="Item Name" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
               value={itemname}
              onChange={(e)=>setItemname(e.target.value)}
              required/>
           <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Item Description</label>
        <textarea
               type="text" placeholder="Item Description (Max 50-60 Characters)"
               class="block p-2.5 w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
               value={itemdesc} 
              onChange={(e)=>setItemdesc(e.target.value)}
              required/>
          <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Item Price</label>
        <input 
               type="number" placeholder="Item Price" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
               value={itemprc}
              onChange={(e)=>setItemprc(e.target.value)}
              required/>
          <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Item Category</label>
         <input
               type="text" placeholder="Category" 
               class="text-sm text-gray-base w-full 
                      mt-1 mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              value={itemcatg}
              onChange={(e)=>setItemcatg(e.target.value)}
              required/>
       <button  class="mt-5 relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
       onClick={HandleSubmit}>
              <ToastContainer/>
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Update Item</span>
</button>
    </form>
    </div>
    )
}