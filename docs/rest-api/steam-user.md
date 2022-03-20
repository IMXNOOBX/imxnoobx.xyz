# :material-steam: Steam User

Get information about a steam user!

## Request. GET

* GET http://api.imxnoobx.xyz/steam/user/76561199027322487

```js
axios.get('https://api.imxnoobx.xyz/steam/user/76561199027322487')
    .then(e => {
        let r = e.data;
        console.log(r) //Output
    })
```

## Output. JSON

* Output example

```json
{
  "steamid": "76561199027322487",
  "communityvisibilitystate": 3,
  "profilestate": 1,
  "personaname": "жnoobж",
  "commentpermission": 1,
  "profileurl": "https://steamcommunity.com/id/IMXNOOBX/",
  "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/42/425bc5550f6635c7e5a024adcf482c7bfbe9909a.jpg",
  "avatarmedium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/42/425bc5550f6635c7e5a024adcf482c7bfbe9909a_medium.jpg",
  "avatarfull": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/42/425bc5550f6635c7e5a024adcf482c7bfbe9909a_full.jpg",
  "avatarhash": "425bc5550f6635c7e5a024adcf482c7bfbe9909a",
  "personastate": 0,
  "primaryclanid": "103582791470608762",
  "timecreated": 1581766944,
  "personastateflags": 0,
  "loccountrycode": "ES"
}
```
