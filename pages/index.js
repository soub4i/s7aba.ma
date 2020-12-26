import React, { useState, useContext } from "react";
import { Context } from "../context";
import { getEpisodes } from "../content/episodes"

function HomePage({ episodes }) {
  const { state, dispatch } = useContext(Context);
  // onClick={() =>
  //   dispatch({
  //     type: "LOGGED_IN_USER",
  //     payload: "Ryan Dhungel",
  //   })
  return <div className="flex flex-wrap md items-center h-screen">
    <div className="bg-white w-full md:w-1/2 h-screen">
      <div className="mx-32">
        <h1 className="text-6xl font-bold mt-16">S7aba Podcast</h1>

        <div className="flex mt-16 font-light text-gray-500">
          <div className="pr-4">
            <span className="uppercase">Minimalist Cloud Podcast</span>
            <p className="text-2xl text-gray-900 font-semibold pt-2">Power by Moroccan Darija & Tea</p>
          </div>
        </div>

        <div
          className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm"
        >
          Some description here
          {JSON.stringify(episodes)}
        </div>

        <button className="uppercase mt-5 text-sm font-semibold hover:underline">
          read more
      </button>
      </div>
    </div>
    <div className="bg-red-600 w-full md:w-1/2 h-screen">
      <img
        src="https://source.unsplash.com/_alEmiTYyYk/1600x900"
        className="h-screen w-full"
        alt=""
      />
    </div>
  </div>
}

HomePage.getInitialProps = async (ctx) => {
  const episodes = await getEpisodes();
  return { episodes }
}

export default HomePage