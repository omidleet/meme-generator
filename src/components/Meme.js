import React from 'react';
import memesData from '../memesData.js';


export default function Meme(props) {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        //get a random number for accessing the index
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        //console.log(setMemeImage);
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text" 
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text" 
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button className="form--button" onClick={getMemeImage}>Get a new image</button>

                <div className='meme'>
                    <img src={meme.randomImage} className='meme--img' />
                    <h2 className='meme--text-top'>{meme.topText}</h2>
                    <h2 className='meme--text-bottom'>{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}