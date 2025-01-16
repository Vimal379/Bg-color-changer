import React from "react";
import { useState } from "react";

const Home = () => {
  const [bgColor, setBgColor] = useState("red");
  return (
    <div
      className="w-full h-screen  flex justify-center  items-end m-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-fit h-[8vh] bg-zinc-500 rounded-3xl mb-10 px-4 py-2 flex justify-between items-center gap-x-2">
        <button
          onClick={() => setBgColor("Red")}
          className="bg-white rounded-2xl px-1 "
        >
          Red
        </button>

        <button
          onClick={() => setBgColor("yellow")}
          className="bg-white rounded-2xl px-1 "
        >
          Yellow
        </button>
        <button
          onClick={() => setBgColor("Olive")}
          className="bg-white rounded-2xl px-1 "
        >
          Olive
        </button>
        <button
          onClick={() => setBgColor("Aqua")}
          className="bg-white rounded-2xl px-1 "
        >
          Aqua
        </button>
        <button
          onClick={() => setBgColor("Brown")}
          className="bg-white rounded-2xl px-1 "
        >
          Brown
        </button>
        <button
          onClick={() => setBgColor("Pink")}
          className="bg-white rounded-2xl px-1 "
        >
          Pink
        </button>
        <button
          onClick={() => setBgColor("Green")}
          className="bg-white rounded-2xl px-1 "
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default Home;
