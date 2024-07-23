import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieData = {
      Title: "The Boys",
      Year: "2019-",
      Rated: "TV-MA",
      Released: "26 Jul 2019",
      Runtime: "60 min",
      Genre: "Action, Comedy, Crime",
      Director: "N/A",
      Writer: "Eric Kripke",
      Actors: "Karl Urban, Jack Quaid, Antony Starr",
      Plot: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
      Language: "English",
      Country: "United States",
      Awards: "Won 1 Primetime Emmy. 21 wins & 82 nominations total",
      Poster:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/the-boys-season-4-finale-homelander-soldier-boy-hughie-butcher.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "8.7/10",
        },
      ],
      Metascore: "N/A",
      imdbRating: "8.7",
      imdbVotes: "667,529",
      imdbID: "tt1190634",
      Type: "series",
      totalSeasons: "4",
      Response: "True",
    };

    setMovie(movieData);
  }, []);

  return (
    <div className="bg-black px-4 py-8 h-screen">
      {movie && <DetailCard movie={movie} />}
    </div>
  );
};

const DetailCard = ({ movie }) => {
  const genres = movie.Genre.split(", ");
  const actors = movie.Actors.split(", ");

  return (
    <div className="max-w-7xl mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="  flex items-center justify-between">
        <div className=" ">
          <h1 className="text-3xl font-bold mb-2 text-white">{movie.Title}</h1>
          <div className="flex items-center justify-center gap-3">
            <span className=" text-sm text-white"> {movie.Rated}</span>
            <span className=" flex items-center text-sm text-white">
              <GoDotFill color="" />
              {movie.Year}
            </span>
            <span className="text-sm text-white">{movie.Runtime}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-white">
          <div>
            <strong>IMDb RATING</strong>
            <p className="text-center">{movie.imdbRating}</p>
          </div>
          <div>
            <strong>YOUR RATING</strong>
            <p className=" text-center">{0}</p>
          </div>
          <div>
            <strong>IMDb Votes</strong>
            <p className="text-center">{movie.imdbVotes}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center my-2 rounded ">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-[60%] h-[60%]  "
          />
        </div>

        <div className=" flex items-center justify-between w-full  ">
          <div className="flex items-center">
            {genres?.map((item) => (
              <div className=" hover:bg-blue-500 cursor-pointer hover:border-black hover:text-black px-4 py-1  border-white mr-2 rounded-full border text-white text-sm  ">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className=" text-white">
          <strong>{movie.Plot}</strong>
        </div>
        <div>
          <ul className="list-none gap-2 list-inside text-base text-white flex">
            <strong> Actors: </strong>
            {actors.map((actor, index) => (
              <li
                className=" text-blue-500 hover:cursor-pointer hover:underline"
                key={index}
              >
                {actor}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center text-white">
          <strong>Released: </strong>
          <p className=" ml-2"> {movie.Released}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
