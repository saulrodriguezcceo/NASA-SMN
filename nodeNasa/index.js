const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors({ origin: "*" }));
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
    sendDate(myData, info => {
      res.send(info);
    });
  });

  async function sendDate(myData, callback) {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${myData.key}&date=${myData.fecha}`).then(response => {
        console.log(response.data);
        callback(response.data);
    })
    .catch(err => {
      if (err.response) {
        callback(false)
      } else if (err.request) {
        callback(false)
      } else {
        callback(false)
      }
    })
  }
  app.post("/save/date", (req,res) =>{
    let myData = req.body;
    
    postDateFirebase(myData, info => {
        res.send(info);
    });
    
  });
  async function postDateFirebase(myData, callback) {
    var dateObject = {
      date : myData.fecha
    };
    console.log(myData.fecha);
    axios.post(
      `https://nasa-clima-default-rtdb.firebaseio.com/dates.json`, 
      JSON.stringify(dateObject)

      ).then(response => {
        axios.post(
          `https://nasa-clima-nodo2-default-rtdb.europe-west1.firebasedatabase.app/dates.json`, 
          JSON.stringify(dateObject)
          ).then(response => {
            console.log(response.data);
            callback(response.data);
        }).catch.catch(err => {
          if (err.response) {
            callback(false)
          } else if (err.request) {
            callback(false)
          } else {
            callback(false)
          }
        });
    }).catch(err => {
      if (err.response) {

        callback(false)
      } else if (err.request) {

        callback(false)
      } else {
        callback(false)
      }
    });
  }

  async function postDateFirebaseNode2(myData, callback) {
    var dateObject = {
      date : myData.fecha
    };
    axios.post(
      `https://nasa-clima-nodo2-default-rtdb.europe-west1.firebasedatabase.app/dates.json`, 
      JSON.stringify(dateObject)
      ).then(response => {
        console.log(response.data);
        callback(response.data);
    })
    .catch(err => {
      if (err.response) {
        callback(false)
      } else if (err.request) {
        callback(false)
      } else {
        callback(false)
      }
    })
  }
  app.get("/list/dates", (req, res) =>{
    obtainFirebaseList( info => {
      res.send(info);
    });
  });
  async function obtainFirebaseList(callback) {
    axios.get(
      `https://nasa-clima-default-rtdb.firebaseio.com/dates.json` ).then(response => {
        callback(response.data);
    }).catch(err => {
      if (err.response) {
        axios.get(
          `https://nasa-clima-nodo2-default-rtdb.europe-west1.firebasedatabase.app/dates.json` ).then(response => {
            callback(response.data);
        }).catch(err => {
          if (err.response) {
            callback(false);
          } else if (err.request) {
            callback(false);
          } else {
            callback(false);
          }
        });
      } else if (err.request) {
        axios.get(
          `https://nasa-clima-nodo2-default-rtdb.europe-west1.firebasedatabase.app/dates.json` ).then(response => {
            callback(response.data);
        }).catch(err => {
          if (err.response) {
            callback(false);
          } else if (err.request) {
            callback(false);
          } else {
            callback(false);
          }
        });
      } else {
        axios.get(
          `https://nasa-clima-nodo2-default-rtdb.europe-west1.firebasedatabase.app/dates.json` ).then(response => {
            callback(response.data);
        }).catch(err => {
          if (err.response) {
            callback(false);
          } else if (err.request) {
            callback(false);
          } else {
            callback(false);
          }
        });
      }
    });
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

  app.post("/climates", (req, res) => {
    let myData = req.body;
    console.log(myData.country);
    console.log(myData.state);
    getClimates(myData, info => {
      res.send(info);
    });
  });

  async function getClimates(myData, callback) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${myData.state},${myData.country}&appid=64155071306d8adb3bc6b75c4476acad`).then(response => {
        console.log(response.data);
        callback(response.data);
    }).catch(err => {
      if (err.response) {
        console.log(err.response.data);
        callback(false)
      } else if (err.request) {
        console.log(err.request.data);
        callback(false)
      } else {
        callback(false)
      }
    })
  }
