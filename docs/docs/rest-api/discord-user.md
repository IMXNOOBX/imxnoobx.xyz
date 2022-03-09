# Discord User

Get information about a discord user!

## Request. GET

* GET http://localhost:80/discord/user/652969127756955658

```js
axios.get('https://api.imxnoobx.xyz/discord/user/652969127756955658')
    .then(e => {
        let r = e.data;
        console.log(r) //Output
    })
```


## Output. JSON

* Output example

```json
{
  "id": "652969127756955658",
  "username": "жnoobж",
  "avatar": "048439e08f1b7bc1c11bc7587e5df4f2",
  "discriminator": "6228",
  "public_flags": 128,
  "banner": null,
  "banner_color": "#18191C",
  "accent_color": 1579292
}
```