# :material-download: Instalation

## Download the package 

```js
npm install --save dis-logs 
```

## Import Package

index.js
```js
const { Webhook } = require('dis-logs')
```

## Set Up Your Own Webhook 

```js
const logger = new Webhook('YOUR_WEBHOOK_URL') // (1)
```

1. Check how you can get your own discord webhook [here](https://www.youtube.com/watch?v=fKksxz2Gdnc)


## Customize your webhook 

### Webhook Name
The name is a string less than 34 characters
```js
logger.setName('WEBHOOK_NAME')
```
<center>
<img src="https://media.discordapp.net/attachments/905017554794332201/951105568221855745/unknown.png" alt="WEBHOOK NAME IMAGE" />
</center>

### Webhook Icon

You can create a webhook icon by generating a image with <a href="https://onlinejpgtools.com/convert-jpg-to-base64">onlinejpgtools.com</a> to base64 converter

```js 
logger.setAV('STRING_BASE64') // (1)
```

1.  You can create a webhook icon by generating a image with <a href="https://onlinejpgtools.com/convert-jpg-to-base64">onlinejpgtools.com</a> to base64 converter

<center>
<img src="https://media.discordapp.net/attachments/905017554794332201/951106889217867886/unknown.png" alt="WEBHOOK IMAGE IMAGE" />
</center>