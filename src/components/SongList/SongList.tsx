import React, { useState,useEffect } from "react";
import { Button } from "../ThemeToggle/ThemeToggle.styles";
import NewSongForm from "../NewSongForm/NewSongForm";
import { Div } from "./SongList.styles";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "thong song", id: 1 },
    { title: "hypnotize", id: 2 },
    { title: "why me", id: 3 },
    { title: "forever", id: 4 },
  ]);
  const addSongHandler = (title: string) => {
    setSongs([...songs, { title, id: songs.length + 1 }]);
  };

  return (
    <Div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSongHandler={addSongHandler} />
    </Div>
  );
};
export default SongList;
