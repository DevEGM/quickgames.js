# quickgames.js
- __Made For Discord bots which use Discord.js__
- **Make Sure To Install quickmongo/quick.db [quick.db](https://www.npmjs.com/package/quick.db) [quickmongo](https://www.npmjs.com/package/quickmongo) Before Using Package!**
- Report Bugs, Errors, Problems In [Support Server](https://discord.gg/devs)
- Install with ``npm i quickgames.js``
- NPM [Click Me](https://www.npmjs.com/package/quickgames.js)

## Usage 📕
### quick.db
- __Speed Game__
 ```js
const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
client.on('ready', () => {
    console.log('im in!')
})


const quickgames = require('quickgames.js');
client.on('message', async message => {
if(!message.guild) return;
if(message.content.toLowerCase().startsWith('speed')) {
 
let data = await quickgames.speed(message.author.id, message.guild.id, message.author.displayAvatarURL({ format: 'png'}), client.user.username)
  /**
   * user => message.author.id 
   * guild => message.guild.id
   * image => the generated image from api.
   * word => the word that generated from the package
   */
  let embed = new Discord.MessageEmbed()
 .setTitle(`You Have 15Seconds To Type the word`)
 .setImage(data.image)
 .setFooter(message.guild.name , message.guild.iconURL())
 .setTimestamp()
  message.channel.send(embed)
  let author = m => m.author.id === message.author.id;
  let pointcollecter = new Discord.MessageCollector(message.channel, author , { max: 1 , time: 15000 }); 
  pointcollecter.on('collect', async msg => {
      let word = data.word;
      if(msg.content.toLowerCase() === word.toLowerCase()) {
    message.channel.send(`You've Got one Point!`)  
    db.add(`points_${message.author.id}`, 1)
    db.add(`wins_${message.author.id}`, 1)

} else {
    message.channel.send(`Incorrect the right word is ${word.toLowerCase()}`)
    db.add(`loses_${message.author.id}`, 1)
      }
  })
}
})
client.login("token")

```
- __Get User Points__
```js
client.on('message',  async message => {
  if(message.content.toLowerCase().startsWith('points')) {
   if(!message.guild) return;
   let data = await quickgames.points(message.author.id)
   /**
    * total => user points  
    * wins => user wins
    * loses => user loses
    */
   message.channel.send(`Total Points: ${data.total}`)
  }
})
```
 ### quickmongo
 __Speed Game__
 ```js
const Discord = require('discord.js')
const client = new Discord.Client()
const {Database} = require("quickmongo");
const db = new Database("mongo-uri-here") // your mongo uri
client.on('ready', () => {
    console.log('im in!')
})


const {Mongo} = require('quickgames.js');
const quickgames = new Mongo("mongo-uri-here") // your mongo uri
client.on('message', async message => {
if(!message.guild) return;
if(message.content.toLowerCase().startsWith('speed')) {
 
let data = await quickgames.Mspeed(message.author.id, message.guild.id, message.author.displayAvatarURL({ format: 'png'}), client.user.username)
  /**
   * user => message.author.id 
   * guild => message.guild.id
   * image => the generated image from api.
   * word => the word that generated from the package
   */
  let embed = new Discord.MessageEmbed()
 .setTitle(`You Have 15Seconds To Type the word`)
 .setImage(data.image)
 .setFooter(message.guild.name , message.guild.iconURL())
 .setTimestamp()
  message.channel.send(embed)
  let author = m => m.author.id === message.author.id;
  let pointcollecter = new Discord.MessageCollector(message.channel, author , { max: 1 , time: 15000 }); 
  pointcollecter.on('collect', async msg => {
      let word = data.word;
      if(msg.content.toLowerCase() === word.toLowerCase()) {
    message.channel.send(`You've Got one Point!`)  
    db.add(`points_${message.author.id}`, 1)
    db.add(`wins_${message.author.id}`, 1)

} else {
    message.channel.send(`Incorrect the right word is ${word.toLowerCase()}`)
    db.add(`loses_${message.author.id}`, 1)
      }
  })
}
})
client.login("token")

```
- __Get User Points__
```js
client.on('message',  async message => {
  if(message.content.toLowerCase().startsWith('points')) {
   if(!message.guild) return;
   let data = await quickgames.Mpoints(message.author.id)
   /**
    * total => user points  
    * wins => user wins
    * loses => user loses
    */
   message.channel.send(`Total Points: ${data.total}`)
  }
})
```
## Why quickgames.js
- Fast and easy to use
- Note : This Package Is Using [Quick.db](https://www.npmjs.com/package/quick.db) [QuickMongo](https://www.npmjs.com/package/quickmongo) (Database)
- This Package Is Made With 💖 By Mahmoud.#8617
