# :material-discord: Discord Server

Get information about a discord server!

## Request. GET

* GET http://api.imxnoobx.xyz/discord/server/000078108977594368

```js
axios.get('https://api.imxnoobx.xyz/discord/server/000078108977594368')
    .then(e => {
        let r = e.data;
        console.log(r) //Output
    })
```


## Output. JSON

* Output example

```json
{
  "id": "000078108977594368", // Server ID
  "name": "Discord Server",
  "instant_invite": null,
  "channels": [
    {
      "id": "000000000000000", // Channel ID
      "name": "Discord Channel",
      "position": 8
    }
  ],
  "members": [
    {
      "id": "0", // Server Position ID, Not User ID
      "username": "Wumpus",
      "discriminator": "0000",
      "avatar": null,
      "status": "dnd",
      "avatar_url": "https://cdn.discordapp.com/widget-avatars/XXXXXXXXXXX"
    }
  ],
  "presence_count": 465 // Amount of users online
}
```