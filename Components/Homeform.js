import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
export default function Homeform()
{
    let navigate=useNavigate();
    const [search, setSearch] = useState("");
    const [Items, setItems] = useState([]);
    const Deleteform=async(id)=>
    {
        window.location.reload(true);
        await fetch('http://localhost:8000/api/v5/users/deleteone/' + id, {
            method: 'DELETE',
          })
          .then(res => res.text())
          .then(res => console.log(res))
          navigate("/");
    }
    useEffect(() => {
         fetch(
            'http://localhost:8000/api/v5/users/retriveall'
        ).then((res) => {
           console.log(res.json()
           .then((data)=>
           {
            console.log(data);
            setItems(data.Items);
           }
        ))})},[]);
    return (
        <div>  
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm mt-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search the Items" required
        onChange={(e) => {
            setSearch(e.target.value);
        }}/>
    </div>
</form> 
<div class="mt-10 relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Item ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Item name
                </th>
                <th scope="col" class="px-6 py-3">
                    Item Description
                </th>
                <th scope="col" class="px-6 py-3">
                    $ Item Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Update / Delete
                </th>
            </tr>
        </thead>
        <tbody>
        {Items
            .filter((val) => {
                        return val.Itemname.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((val, id) => {
                        //const appid=val._id;
                        return (
                <>
                <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {new String(val._id).substring(0,8)}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {val.Itemname}
                </th>
                <th scope="row" class="box-content h-12 w-32 font-medium dark:text-white">
                   {val.Itemdesc}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   $ {val.Itemprc}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {val.Itemcatg}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link to={"/Edititemform/"+val._id}
                   class="relative mr-4 rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
>
<span class="absolute right-0 w-5 h-32-mt-12 transition-all duration-1000 transform translate-x-12 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Update</span>
</Link>
<button  onClick={()=>Deleteform(val._id)}  class="relative rounded px-5 py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
<span class="absolute right-0 w-5 h-32 -mt-12 transition-all duration-1000 transform translate-x-12  rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Delete</span>
</button>
                </th>
            </tr>
            </>
            );
        })}
        </tbody>
    </table>
</div>

    </div>
    );
}