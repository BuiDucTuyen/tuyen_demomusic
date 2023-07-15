import React, { useContext, useEffect } from "react";
import { Songs } from "../Context";
import SongRow from "./SongRow";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);

  const handlePlaySong = (idSong) => {
    handleSetSong(idSong);
  };

  useEffect(() => {
    console.log(song.id);
  }, [song]);

  return (
    <div className="col-span-2  overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((songItem, index) => (
            <SongRow
              key={index}
              song={songItem}
              index={index}
              isSelected={songItem.id === song.id}
              handlePlaySong={handlePlaySong}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
