import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
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
  useEffect(() => {
    console.log("oppsy");
  }, [songs]);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Div style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        {songs.map((song) => {
          return (
            <li
              style={{ background: theme.bg, color: theme.syntax }}
              key={song.id}
            >
              {song.title}
            </li>
          );
        })}
      </ul>
      <NewSongForm addSongHandler={addSongHandler} />
    </Div>
  );
};
export default SongList;
