# :material-information: How To Use

This package usage its very simple and you only need to have **node.js** and **npm** installed. 

Follow step by step the instructions in the next step! 

## Example
 
```js title="index.js"
​const​ { ​Webhook​ } ​=​ ​require​(​"​dis-logs​"​) 

​const​ ​logger​ ​=​ ​new​ ​Webhook​(​"​YOUR_WEBHOOK​"​);

​logger​.​setName​(​"​WEBHOOK_NAME​"​) 
​logger​.​setAV​(​"​​WEBHOOK_AVATAR​"​) ​
// ​https://onlinejpgtools.com/convert-jpg-to-base64 

​//​ you can use any of this options 
​logger​.console("This log only will be printed in the Terminal!")

​logger​.success("This will be sent with a green success color")

​logger​.warn("This will be sent with a yellow warn color")

​logger​.error("This will be sent with a red error color")

​logger​.send("This will be sent without any color")
```