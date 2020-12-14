let {speed, getpoints, split} = require('./src/games')
module.exports = {
Mongo: require('./src/games2'),
speed: async function(user, guild, boticon , botname) {
let data = await speed(user, guild, boticon , botname)
return data;
},
split: async function(user, guild, boticon , botname) {
let data = await split(user, guild, boticon , botname)
return data;
},
points: async function(user) {
let data = await getpoints(user)
return data;
}
}


