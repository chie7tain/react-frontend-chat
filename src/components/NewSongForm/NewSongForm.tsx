import React, { useState } from "react";

interface SongForm {
  addSongHandler: (e: any) => void;
}

const NewSongForm: React.FC<SongForm> = ({ addSongHandler }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addSongHandler(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="Add Song" />
    </form>
  );
};
export default NewSongForm;
