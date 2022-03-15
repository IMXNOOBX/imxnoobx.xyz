# :material-server-security: Scamlink Detector


Check if the link has been blacklisted as scamlink.

## Request. POST

* POST http://api.imxnoobx.xyz/discord/user/652969127756955658

    Content-Type: application/json

    {

        "link": "gift-nitro.events"

    }

```js
axios.post('https://api.imxnoobx.xyz/scamlink', {
  'Content-Type': 'application/json',
    data: {
        "link": "scamlink.scam"
    }
})
    .then(e => {
        let r = e.data;
        console.log(r) //Output
    })
```

## Output. JSON

* Output example

=== "Scam Link Detected"

    ```json
    {
      "link": "scamlink.scam",
      "result": true
    }
    ```

=== "Scam Link Not Detected"

    ```json
    {
      "link": "scamlink.scam",
      "result": false
    }
    ```