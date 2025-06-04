import express  from "express"
 import path   from "path";


   const app=express();

    app.get('/',(req,res)=>{


        // res.send("Hi! This server is running now. Success Wit jenkin  fiast deplaymet ");

        res.sendFile(path.join(__dirname, 'index.html'));
    })


  app.listen(3000, () => {
  console.log('Server running on port 3000');
});