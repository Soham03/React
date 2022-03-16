const express= require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");


const app=express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3029,function(){
    console.log("Server is running")
})

app.get("/",function(req,res)
{
        res.sendFile(__dirname+"/signup.html")
}  
    )

app.post("/",function(req,res)
{
    var firstName=req.body.fName
    var lastName=req.body.lName
    var email=req.body.email
   let data= {
       members:[
           {
               email_address:email,
               status:"subscribed",
               merge_fields:{
                   FNAME:firstName,
                   LNAME:lastName,
               }

           }
       ]
   };

   let jsonData=JSON.stringify(data)

   const url="https://us14.api.mailchimp.com/3.0/lists/b4d8f3b1cf"

   const options={
       method:"POST",
       auth:"sohambhole:ff79c9e17a5648687ec192079b89922f-us14"

   }

   const request =https.request(url,options,function(response){

        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        }
        else
        {
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data",function(data){
            console.log(JSON.parse(data))
        })
   })

request.write(jsonData)
request.end();
})    

app.post("/failure",function(req,res){
    res.redirect("/");
})

// ff79c9e17a5648687ec192079b89922f-us14

// b4d8f3b1cf