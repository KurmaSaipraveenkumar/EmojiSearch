import React,{useState} from 'react'

const emojiData =[
    {
    id:1,
    symbol: "😊",
    name: "laugh"
},
{
    id:2,
    symbol: "🥱",
    name: "sleeping"
},
{
    id:3,
    symbol: "😍",
    name: "impresive"
},
{
    id:4,
    symbol: "❤",
    name: "love"
},
{
    id:5,
    symbol: "👌",
    name: "super"
},
{
    id:6,
    symbol: "👍",
    name: "all the best"
}, {
    id:7,
    symbol: "🎶",
    name: "music"
},
{
    id:8,
    symbol: "🎉",
    name: "celebrations"
}, {
    id:9,
    symbol: "😭",
    name: "cry"
},
 {
    id:10,
    symbol: "👿",
    name: "Danger"
}
];


function EmojiSearch() {
    const [searchEmoji,setSearchEmoji] = useState("");
   
    const handleChange = (e) =>{
        setSearchEmoji(e.target.value);
    }

    const showEmoji = emojiData.filter((emoji) => {
        const emojiName = emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase())

    });
  return (
    <div>
        <h1>React Emoji Search App!!!!</h1>
        <input type='text' placeholder='Search the Emoji..!!' value={searchEmoji} onChange={handleChange}></input>
        <div>{
            showEmoji.map((emoji) => emoji.symbol)}
        </div>
        </div>
  )
}

export default EmojiSearch