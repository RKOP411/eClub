var express = require('express');
var router = express.Router();
const { connectToDB, ObjectId } = require('../utils/db');
const { generateToken } = require('../utils/auth');
const jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/*  Callback page. */
router.get('/callback', async (req, res) => {
  const code = req.query.code
  if (!code) {
    return res.status(400).send('Bad Request A')
  }

  // Exchange the code for an access token
  try {
    let response = await fetch('https://hkbu.jp.auth0.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: 'dxiOZbTWeGFhW4ScsQrV6rpR1IWO8VJw',
        client_secret: 'AGu90xbpSYfM22Jd3RUHvXL1esG2e_m8y3yfvdm0LHHuP1WMxj7ZX9DrMGwU1879',
        code: code,
        redirect_uri: 'http://localhost:3000/callback', //createUser_info
        scope: 'openid profile email'
      })
    })
    if (!response.ok) {
      return res.status(400).send('Bad Request B')
    }
    const data = await response.json()
    // the response should be like
    // {
    //     "access_token":"eyJz93a...k4laUWw",
    //     "refresh_token":"GEbRxBN...edjnXbL",
    //     "id_token":"eyJ0XAi...4faeEoQ",
    //     "token_type":"Bearer",
    //     "expires_in":86400
    // }
    // we may fetch the user profile with the access token
    
    // Get data
    response = await fetch('https://hkbu.jp.auth0.com/userinfo', {
      headers: {
        'Authorization': `Bearer ${data.access_token}`
      }
    })
    if (!response.ok) {
      return res.status(400).send('Bad Request C')
    }
    const profile = await response.json()
    // Get data

    // after that, generate a jwt token and send it to frontend for authentication
    const token = jwt.sign(data, 'secret')
    return res.redirect(`http://localhost:5173/success?token=${token}`)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Internal Server Error')
  }
})

module.exports = router;
