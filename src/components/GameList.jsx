import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import Browser from "./Browser";

export default function GameList() {
  const [list, setList] = useState(null);
  const price = "99";

  useEffect(() => {
    fetch("/moby/games?")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log("Lista gierek", data);

        setList(data);
      });
  }, []);

  return (
    <>
      <section className="gameList_container">
        {list?.games?.map((game) => (
          <section className="gameBox" key={game.title}>
            <div className="gameBox_img">
              {" "}
              <img className="gameImg" src={game.sample_cover.image}></img>
            </div>
            <article className="gameContent">
              <div className="gameTitle">
                <h6>{game.title}</h6>
                <p>
                  {game.platforms.map((el) => el.platform_name).join(" , ")}
                </p>
                <p>{game.genres[0].genre_name}</p>
              </div>
              <div className="gamePrice"><p>59<sup>99</sup></p></div>
            </article>
          </section>
        ))}
      </section>
    </>
  );
}
