// imports express 
const express = require('express')
// imports cors for allowing cross origin requests
const cors = require('cors');
// creates an express application
const app = express();
// sets up port to first look for an env file for port number, then defaults to port 8001
const port = process.env.PORT || 8001;

// imports and mounts body-parser middleware to access contents of request body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// GET request for car photos where car_id = req param id 
app.get('/:id/photos', async (req, res)=>{
    //try
        //await pool query 
            /* SELECT * FROM photos WHERE car_id = param id */ 


})

// GET request for car at parameter id 
app.get('/:id/car', async (req, res)=>{
        //try
        //await pool query 
            /* SELECT * FROM cars WHERE car_id = param id */ 
})

// GET Request for host info for the owner of car
app.get('/:id/host', async (req, res)=>{
        //try
        //await pool query 
            /* SELECT host.* 
               FROM car 
               JOIN host ON car.host_id = host.id 
               WHERE car.id = req param id */ 
})
// GET REQUEST FOR car_features where car_id = param_id
app.get('/:id/features', async (req, res)=>{
        //try
    //await pool query 
        /* SELECT * FROM car_features WHERE car_id = param id */ 
})
// GET Request for car_extras where car_id = req param id
app.get('/:id/extras', async (req, res)=>{
            //try
        //await pool query 
            /* SELECT * FROM car_extras WHERE car_id = param id */ 
})
// GET Request for reviews where car id = parm_id
app.get('/:id/reviews', async (req, res)=>{
        //try
    //await pool query 
        /* SELECT * FROM reviews WHERE car_id = param id */ 
})

app.listen(port, ()=>{
    console.log("listening on port ", port)
    console.log("connecting to postgres pool: ", pool)
})

