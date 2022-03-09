# Instalation

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
const logger = new Webhook('YOUR_WEBHOOK_URL') 
```

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

You can create a webhook icon by generating a image with [onlinejpgtools.com](​https://onlinejpgtools.com/convert-jpg-to-base64) to base64 converter

```js
logger.setAV('STRING_BASE64')
```
<center>
<img src="https://media.discordapp.net/attachments/905017554794332201/951106889217867886/unknown.png" alt="WEBHOOK IMAGE IMAGE" />
</center>