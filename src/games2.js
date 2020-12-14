const { Database } = require('quickmongo');

	class Mongo {
	
	
	constructor(key) {
        
    
if(!key) throw new Error("[Database] Invalid MongoDB URI")
if (typeof key !== "string") throw new Error("[Database] MongoDB URI Must be a string")
	    this.key = key


}

 async Mspeed(user, guild, boticon , botname){
 let names = [
  "planes",
  "breathe",
  "muddle",
  "itchy",
  "magnificent",
  "brief",
  "coach",
  "straight",
  "tin",
  "cave",
  "subsequent",
  "ear",
  "end",
  "true",
  "fearful",
  "suppose",
  "divergent",
  "van",
  "thumb",
  "thread",
  "tame",
  "eggnog",
  "steer",
  "boil",
  "wine",
  "parched",
  "ludicrous",
  "expansion",
  "roasted",
  "ragged",
  "press",
  "boot",
  "bottle",
  "border",
  "effect",
  "dispensable",
  "street",
  "cluttered",
  "comparison",
  "fragile",
  "frequent",
  "aware",
  "straw",
  "puzzled",
  "shiny",
  "rampant",
  "cub",
  "flow",
  "bustling",
  "press",
  "wonder",
  "explain",
  "aquatic",
  "jagged",
  "full",
  "building",
  "insidious",
  "cloth",
  "consider",
  "oatmeal",
  "duck",
  "smiling",
  "frail",
  "tour",
  "bucket",
  "average",
  "smash",
  "sharp",
  "loose",
  "amazing",
  "howareu",
  "supermarket",
  "coffee shop",
  "youtube",
  "discord",
  "darkhosting",
  "roblox",
  "fortnite",
  "Google",
  "netflix",
  "becool",
  "yessir",
  "minecraft",
  "anime",
  "sub2pewdiepew",
  "winner",
  "soundcould",
  "googleclood",
  "becool",
  "knife",
  "boozkia",
  "onepunch",
  "onepiece",
  "crunchyroll",
  "animecould",
  "apexlegends",
  "trohpey",
  "ps5",
  "goodhub",
  "master",
  "speed",
  "hru",
  "imfine",
  "fr",
  "omg",
  "thisissoepic",
  "ucanwin",
  "tbh",
  "meme"
]

const randomword = names[Math.floor(Math.random() * names.length)];
let random = [
    `https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=${randomword}`,
    `https://dynamic.brandcrowd.com/asset/logo/8ffdc28c-ea27-4b0c-89c3-3f9a9b40e5fd/logo?v=4&text=${randomword}`,
    `https://dynamic.brandcrowd.com/asset/logo/963fcb8b-1ba3-46f1-82bd-8e92a5a024d1/logo?v=4&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=${randomword}`,
    `https://dynamic.brandcrowd.com/asset/logo/c1e008df-5207-463e-a6a7-a823174d0bda/logo?v=4&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=${randomword}`,
    `https://dynamic.brandcrowd.com/asset/logo/b5e150af-101d-4e96-9518-dff66548dc31/logo?v=4&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text=${randomword}`
]
const randomimage = random[Math.floor(Math.random() * random.length)];

let data = {
user: user,
word: randomword,
guild: guild    ,
image: randomimage , 
}
return data;
}

 async Mgetpoints(user) {
	 	const db = new Database(this.key) 

    let points = await db.get(`points_${user}`)
    let wins = await db.get(`wins_${user}`)
    let loses = await db.get(`loses_${user}`)
    let data = {
        total: `${points || '0'}`,
        wins: `${wins || '0'}`,
        lose: `${loses || '0'}`,
    }
    return data;
}

async Msplit(user, guild, boticon , botname){
	const file = require('./split.json');
	const fetch = file[Math.floor(Math.random() * file.length)];
	const word = fetch.word;
	const answer = fetch.answer;
	let random = [
    `https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=${word}`,
    `https://dynamic.brandcrowd.com/asset/logo/8ffdc28c-ea27-4b0c-89c3-3f9a9b40e5fd/logo?v=4&text=${word}`,
    `https://dynamic.brandcrowd.com/asset/logo/963fcb8b-1ba3-46f1-82bd-8e92a5a024d1/logo?v=4&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=${word}`,
    `https://dynamic.brandcrowd.com/asset/logo/c1e008df-5207-463e-a6a7-a823174d0bda/logo?v=4&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=${word}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text=${word}`
]
const randomimage = random[Math.floor(Math.random() * random.length)];
	let data = {
user: user,
word: word,
answer: answer,
guild: guild,
image: randomimage
}
return data;
}

}
module.exports = Mongo