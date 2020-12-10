import React, { useState } from "react";
import "./styles.css";

const animeData = {
  comedy: [
    {
      name: "One Punch Man",
      rating: 8.8,
      desc:
        "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch."
    },
    {
      name: "Gintama",
      rating: 8.6,
      desc:
        "In an era where aliens have invaded and taken over feudal Tokyo, an unemployed samurai finds work however he can."
    },
    {
      name: " Mob Psycho 100 ",
      rating: 8.5,
      desc:
        "A psychic middle school boy tries to live a normal life and keep his growing powers under control, even though he constantly gets into trouble."
    }
  ],
  adventure: [
    {
      name: "Attack on Titan",
      rating: 8.8,
      desc:
        "After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction."
    },
    {
      name: "Hunter x Hunter",
      rating: 8.9,
      desc:
        "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger."
    },
    {
      name: "Naruto: Shippuden",
      rating: 8.6,
      desc:
        "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village."
    },
    {
      name: "My Hero Academia",
      rating: 8.5,
      desc:
        "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero."
    }
  ]
};

export default function App() {
  const [animeGenre, setAnimeGenre] = useState("adventure");

  function animeList(item) {
    setAnimeGenre(item);
  }

  const animeDataArray = Object.keys(animeData);

  return (
    <div className="App">
      <h1>Anime Genre</h1>
      <p> List of all genre of anime shows</p>
      <div className="genre">
        {animeDataArray.map((item) => {
          return (
            <button
              key={item}
              className="genreBtn"
              onClick={() => animeList(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div>
        <ul>
          {animeData[animeGenre].map((anime) => {
            return (
              <li key={anime.name}>
                <div> {anime.name} </div>
                <div> {anime.rating} </div>
                <div> {anime.desc} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
