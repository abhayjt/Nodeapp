import express  from "express"


   const app=express();

    app.get('/',(req,res)=>{


         res.send("Hi! This server is running now. Success Wit jenkin  fiast deplaymet ");
    })


  app.listen(3000, () => {
  console.log('Server running on port 3000');
});