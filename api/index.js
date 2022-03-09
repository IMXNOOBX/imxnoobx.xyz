const express = require('express')
const auth = require('dotenv').config()
const axios = require('axios').default;

const app = express()
app.use(express.json())
const djs_instance = axios.create({
    baseURL: 'https://discordapp.com/api/v9/',
    headers: {
        'Authorization': `Bot ${process.env.DSCAUTH}`,
        'Content-Type': 'application/json',
        'User-Agent': 'imxnoobx.xyz-rest-api'
    },
    // maxContentLength: 2000,
    // maxBodyLength: 2000,
});

const steam_instance = axios.create({
    baseURL: `https://api.steampowered.com/`,
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'imxnoobx.xyz-rest-api'
    },
    // maxContentLength: 2000,
    // maxBodyLength: 2000,
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/discord/user/:userid', async (req, res) => {
    console.log('Request received at endpoint: ' + req.path)
    let par = req.params
    if (!par.userid) {
        return res.status(404).send({
            message: `No user id parameter found. Check https://docs.imxnoobx.xyz`
        });
    } else if (isNaN(par.userid)) {
        return res.status(406).send({
            message: `The user id parameter must be a number (integer). Check https://docs.imxnoobx.xyz`
        });
    }

    djs_instance.get(`/users/${par.userid}`)
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(function (error) {
            if (error.response.status == 404) {
                return res.status(404).send({
                    message: `User not found, Check the user id. Check https://docs.imxnoobx.xyz`
                });
            } else {
                return res.status(500).send({
                    message: `Discord rejected the request please try again later!. Check https://docs.imxnoobx.xyz`,
                    err: error
                });
            }

        });
})

app.get('/discord/server/:serverid', async (req, res) => {
    console.log('Request received at endpoint: ' + req.path)
    let sv = req.params.serverid
    if (!sv) {
        return res.status(404).send({
            message: `No server id parameter found. Check https://docs.imxnoobx.xyz`
        });
    } else if (isNaN(sv)) {
        return res.status(406).send({
            message: `The server id parameter must be a number (integer). Check https://docs.imxnoobx.xyz`
        });
    }

    djs_instance.get(`/guilds/${sv}/widget.json`)
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(function (error) {
            // console.log(error);
            if (error.response.status == 403) {
                return res.status(403).send({
                    message: `Discord server widget disabled!. Check https://docs.imxnoobx.xyz`                });
            } else if (error.response.status == 404) {
                return res.status(404).send({
                    message: `Server not found, Check the server id. Check https://docs.imxnoobx.xyz`                });
            } else {
                return res.status(500).send({
                    message: `Discord rejected the request!. Check https://docs.imxnoobx.xyz`,
                    err: error
                });
            }
        });
})

app.post('/scamlink', async (req, res) => {
    // console.log(req.body)
    if(!req.body || !req.body.link) {
        return res.status(400).send({
            message: `Invalid json post request, Check https://docs.imxnoobx.xyz`
        });
    }

    let iurl = req.body.link;
    axios.get('https://github.com/DevSpen/scam-links/raw/master/src/links.txt').then(e => {
        let r = e.data;
        const result = r.includes(iurl)
        res.status(200).send({
            link: iurl,
            result: result
        });   
        // console.log(result)   
    }).catch(function (error) {
        return res.status(500).send({
            message: `GitHub rejected the request!. Check https://docs.imxnoobx.xyz`,
            err: error
        });
    });
})


app.get('/steam/user/:steamid', async (req, res) => {
    console.log('Request received at endpoint: ' + req.path)
    let par = req.params
    if (!par.steamid) {
        return res.status(404).send({
            message: `No user id parameter found. Check https://docs.imxnoobx.xyz`
        });
    } else if (isNaN(par.steamid)) {
        return res.status(406).send({
            message: `The user id parameter must be a number (integer). Check https://docs.imxnoobx.xyz`
        });
    }

    steam_instance.get(`/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAMAUTH}&steamids=${par.steamid}&format=json`)
        .then(function (response) {
            res.status(200).send(response.data.response.players[0]);
        }).catch(function (error) {
            console.log(error);
            if (error.response.status == 404) {
                return res.status(404).send({
                    message: `User not found, Check the user id. Check https://docs.imxnoobx.xyz`
                });
            } else {
                return res.status(500).send({
                    message: `Steam rejected the request please try again later!. Check https://docs.imxnoobx.xyz`,
                    err: error
                });
            }

        });
})

app.listen(80, () => {
    console.log('listening on port 80')
})
// https://developer.mozilla.org/es/docs/Web/HTTP/Status