# Scamlink Detector


For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Request. POST

* POST http://localhost:80/discord/user/652969127756955658
Content-Type: application/json
{
    "link": "gift-nitro.events"
}

```js
axios.post('/scamlink', {
  'Content-Type': 'application/json',
    data: {
        "link": "gift-nitro.events"
    }
})
    .then(e => {
        let r = e.data;
        console.log(r) //Output
    })
```

## Output. JSON

* Output example

```json

```