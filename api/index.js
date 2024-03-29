const express = require('express')
const {Webhook} = require('dis-logs')
const auth = require('dotenv').config()
const axios = require('axios').default;
const rateLimit = require('express-rate-limit')
const { lookup } = require('geoip-lite');

const log = new Webhook(process.env.DIS_LOGS_WEBHOOK)

const app = express()
app.use(express.json())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: function (req, res) {
        return res.status(429).json({
          error: 'You sent too many requests. Please wait a while then try again'
        })
    }
})

app.use(limiter)

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
    res.send({
        message: 'Check the full documentation at https://docs.imxnoobx.xyz/rest-api/',
        endpoints: {
            'GET /discord/user/:userid': 'Get discord user info',
            'GET /discord/server/:serverid': 'Get discord server info',
            'POST /scamlink': 'Check if the provided url in "link" json parameter is a scam link',
            'GET /steam/user/:steamid': 'Get steam user info',
        }
    })
})

app.get('/discord/user/:userid', async (req, res) => {
    log.console('[debug] - Request received at endpoint: ' + req.path)
    let par = req.params
    if (!par.userid) {
        return res.status(404).send({
            message: `No user id parameter found. Check http://docs.imxnoobx.xyz/rest-api/handle-errors/#404-not-found`
        });
    } else if (isNaN(par.userid)) {
        return res.status(406).send({
            message: `The user id parameter must be a number (integer). Check https://docs.imxnoobx.xyz/rest-api/handle-errors/#406-not-acceptable`
        });
    }

    djs_instance.get(`/users/${par.userid}`)
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(function (error) {
            if (error.response.status == 404) {
                return res.status(404).send({
                    message: `User not found, Check the user id. Check http://docs.imxnoobx.xyz/rest-api/handle-errors/#404-not-found`
                });
            } else {
                return res.status(500).send({
                    message: `Discord rejected the request please try again later!. Check https://docs.imxnoobx.xyz/rest-api/handle-errors/#500-internal-server-error`,
                    err: error.message
                });
            }

        });
})

app.get('/discord/server/:serverid', async (req, res) => {
    log.console('[debug] - Request received at endpoint: ' + req.path)
    let sv = req.params.serverid
    if (!sv) {
        return res.status(404).send({
            message: `No server id parameter found. Check http://docs.imxnoobx.xyz/rest-api/handle-errors/#404-not-found`
        });
    } else if (isNaN(sv)) {
        return res.status(406).send({
            message: `The server id parameter must be a number (integer). Check https://docs.imxnoobx.xyz/rest-api/handle-errors/#406-not-acceptable`
        });
    }

    djs_instance.get(`/guilds/${sv}/widget.json`)
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(function (error) {
            log.console(error);
            if (error.response.status == 403) {
                return res.status(403).send({
                    message: `Discord server widget disabled!. Check https://docs.imxnoobx.xyz/rest-api/`                });
            } else if (error.response.status == 404) {
                return res.status(404).send({
                    message: `Server not found, Check the server id. Check http://docs.imxnoobx.xyz/rest-api/handle-errors/#404-not-found`                });
            } else {
                return res.status(500).send({
                    message: `Discord rejected the request!. Check https://docs.imxnoobx.xyz/rest-api/handle-errors/#500-internal-server-error`,
                    err: error.message
                });
            }
        });
})

app.post('/scamlink', async (req, res) => {
    log.console(req.body)
    if(!req.body || !req.body.link) {
        return res.status(400).send({
            message: `Invalid json post request, Check https://docs.imxnoobx.xyz/rest-api/`
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
        log.console(result)   
    }).catch(function (error) {
        return res.status(500).send({
            message: `GitHub rejected the request!. Check https://docs.imxnoobx.xyz/rest-api/handle-errors/#500-internal-server-error`,
            err: error
        });
    });
})


app.get('/steam/user/:steamid', async (req, res) => {
    log.console('[debug] - Request received at endpoint: ' + req.path)
    let par = req.params
    if (!par.steamid) {
        return res.status(404).send({
            message: `No user id parameter found. Check http://docs.imxnoobx.xyz/rest-api/handle-errors/#404-not-found`
        });
    } else if (isNaN(par.steamid)) {
        return res.status(406).send({
            message: `The user id parameter must be a number (integer). Check https://docs.imxnoobx.xyz/rest-api/handle-errors/#406-not-acceptable`
        });
    }

    steam_instance.get(`/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAMAUTH}&steamids=${par.steamid}&format=json`)
        .then(function (response) {
            res.status(200).send(response.data.response.players[0]);
        }).catch(function (error) {
            log.console(error);
            if (error.response.status == 404) {
                return res.status(404).send({
                    message: `User not found, Check the user id. Check http://docs.imxnoobx.xyz/rest-api/handle-errors/#404-not-found`
                });
            } else {
                return res.status(500).send({
                    message: `Steam rejected the request please try again later!. Check https://docs.imxnoobx.xyz/rest-api/handle-errors/#500-internal-server-error`,
                    err: error
                });
            }

        });
})

app.get('/ip', async (req, res) => {
    log.console('[debug] - Request received at endpoint: ' + req.path)
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress.split(`:`).pop(); // ip = ::ffff:10.10.10.10
    // log.console(ip) // ip = 10.10.10.10
    if (!ip) {
        return res.status(404).send({
            message: `Cound't determine your ip. Please Check http://docs.imxnoobx.xyz/rest-api/handle-errors/#404-not-found`
        });
    }
    let ipd = lookup(ip);
    if (!ipd) {
        return res.status(404).send({
            message: `Cound't determine your ip. Please Check http://docs.imxnoobx.xyz/rest-api/handle-errors/#404-not-found`
        });
    }
    res.status(200).send(ipd);

})

app.use(function(req, res, next) {
    res.status(404).send({
        message: `Invalid endpoint. Check http://docs.imxnoobx.xyz/rest-api/handle-errors/#404-not-found`
    });
});

app.listen(80, () => {
    log.console('[debug] - listening on port 80')
})
// https://developer.mozilla.org/es/docs/Web/HTTP/Status
