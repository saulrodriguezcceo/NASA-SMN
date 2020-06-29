const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(3000, (err, res) => {
 if (err) {
 console.log('Error al levantar servidor')
 return;
 }
 console.log('Apis escuchando en el puerto 3000')
})

app.post("/sendfecha", (req, res) => {
    let myData = req.body;
    sendMail(myData, info => {
      res.send(info);
    });
  });

  async function sendMail(myData, callback) {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${myData.key}&date=${myData.fecha}`).then(response => {
        console.log(response.data);
        callback(response.data);
    })
    
  }
  app.get("/getatmosferas", (req, res) => {
    getclimate(info => {
      res.send(info);
    });
  });
  
  async function getclimate(callback) {
    axios.get(`https://api.datos.gob.mx/v1/condiciones-atmosfericas`).then(response => {
        callback(response.data);
    })
    
  }