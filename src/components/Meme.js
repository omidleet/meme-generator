import React from "react";

export default function Meme(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.data.memes));
  // }, []);
  
  // same function, but in async
  
  //useEffect takes a function as its parameter. If that function returns something, it needs to be a cleanup function.
  //Otherwise, it should return nothing. If we make it an async function, 
  //it automatically returns a promise instead of a function or nothing.
  //Therefore, if you want to use async operations inside of useEffect, 
  //you need to define the function separately inside of the callback function, as seen below: 

  React.useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMeme()
  }, [])

  console.log(allMemes);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    //get a random number for accessing the index
    const url = allMemes[randomNumber].url;
    if (url.length === 0) {
      return "URL not found!";
    } else {
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: url,
      }));
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
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
        <button className="form--button" onClick={getMemeImage}>
          Get a new image
        </button>

        <div className="meme">
          <img src={meme.randomImage} className="meme--img" />
          <h2 className="meme--text-top">{meme.topText}</h2>
          <h2 className="meme--text-bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
