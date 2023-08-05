import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Additemform() 
{
       const [itemname, setItemname] = useState("");
       const [itemdesc, setItemdesc] = useState("");
       const [itemcatg, setItemcatg] = useState("");
       const [itemprc, setItemprc] = useState();
       const Handlename=(event)=>
       {
            setItemname(event.target.value);
              console.log(event.target.value);
       }
       const Handledesc=(event)=>
       {
            setItemdesc(event.target.value);
              console.log(event.target.value);
       }
       const Handlecatg=(event)=>
       {
            setItemcatg(event.target.value);
              console.log(event.target.value);
       }
       const Handleprice=(event)=>
       {
            setItemprc(event.target.value);
              console.log(event.target.value);
       }
       const HandleSubmit=async(event)=>
       {
        try{
        event.preventDefault();
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
        await fetch("http://localhost:8000/api/v5/users/register", {
        method: "POST",
        body: JSON.stringify({
             Itemname:itemname,
             Itemdesc:itemdesc,
             Itemcatg:itemcatg,
             Itemprc:itemprc
        }),   
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json)).then(()=>setItemname(""),setItemdesc(""),setItemcatg(""),setItemprc(""));
    return(
    <div>
       {toast.success('Successfully Added the Item !', {
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
            animate-text mb-5
            ">
           Add the Item
        </h1>
        <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Item Name</label>
        <input 
               type="text" placeholder="Item Name" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              value={itemname} 
              onChange={Handlename}
              required/>
       <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Item Description</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Item Description (Max 50-60 Characters)"
 value={itemdesc} 
 onChange={Handledesc}
 required/>
    <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Item Price</label>
        <input 
               type="number" placeholder="Item Name" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              value={itemprc} 
              onChange={Handleprice}
              required/>
   <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Item Category</label>
         <input
               type="text" placeholder="Category" 
               class="text-sm text-gray-base w-full 
                       mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              onChange={Handlecatg}
              value={itemcatg}  
              required/>
       <button  class=" relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
       onClick={HandleSubmit}>
              <ToastContainer/>
<span class="absolute right-0 w-8 h-32 -mt-12 mb-5 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Add Item</span>
</button>
    </form>
    </div>
    )
}