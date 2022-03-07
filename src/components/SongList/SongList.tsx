import React, { useState } from "react";
import { Button } from "../ThemeToggle/ThemeToggle.styles";

import { Div } from "./SongList.styles";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "thong song", id: 1 },
    { title: "hypnotize", id: 2 },
    { title: "why me", id: 3 },
    { title: "forever", id: 4 },
  ]);
  const addSongHandler = (e: any) => {
    setSongs([...songs, { title: e.target.value, id: 5 }]);
  };

  return (
    <Div>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <Button onClick={addSongHandler}>Add a Song</Button>
    </Div>
  );
};
export default SongList;
