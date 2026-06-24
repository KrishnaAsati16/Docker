const express = require ('express');

const app = express()

// api url
app.get("/",(req,res) =>{
    res.json(
        [
            {
                id:1,
                emplayName:"rahul",
                emplaySalary: 70
            },
              {
                id:2,
                emplayName:"Meer",
                emplaySalary: 700
            },
              {
                id:1,
                emplayName:"Aman",
                emplaySalary: 7
            },

        ]
    )
})

app.listen(1000,() =>{
    console.log("Server is ready")
})


//  docker build -t my-app .