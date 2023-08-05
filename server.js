const express=require("express");
const dbconnect=require("./utils/dbconnect");
const userroutes=require("./routes/userroutes");
const cors=require("cors");
const app=express();

app.use(express.json());

app.use(cors({
    origin:{},
    methods:["POST","GET","PUT"],
    credentialsL:true
}));

app.use(express.urlencoded({extended:true}));

//User routes
app.use('/api/v5/users',userroutes);


app.listen(8000,()=>{
    console.log("Port is running at "+ 8000);
})

