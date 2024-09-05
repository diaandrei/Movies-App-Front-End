import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";

export const WatchListMovieCard = ({
  movie,
  index,
  onDelete,
  openModal,
  totalLength,
  showDeleteButton,
}) => {
  const poster = movie?.poster || "https://via.placeholder.com/150";
  const title = movie?.title || "Untitled";
  const plot = movie?.plot || "No plot available";
  const yearOfRelease = movie?.yearOfRelease || "N/A";
  const genres = movie?.genres || [];
  const rating = movie?.rating || movie?.movieRatings?.[0]?.rating || null;

  return (
    <div className="relative p-4 rounded-md bg-white shadow-lg">
      {showDeleteButton && (
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() =>
            openModal(
              "confirmation",
              "Are you sure you want to delete this title from the watchlist?",
              movie?.userWatchlistId
            )
          }
        >
          <DeleteIcon style={{ color: "red" }} />
        </div>
      )}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Link to={`/movie/${movie?.id}`}>
            <img
              src={poster}
              alt={title}
              className="w-32 h-32 rounded-md object-cover"
            />
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-bold">
            <Link to={`/movie/${movie?.id}`}>{title}</Link>
          </h2>
          <p className="text-gray-400 text-sm font-semibold">{yearOfRelease}</p>
          <p className="mt-2 text-sm font-semibold">{plot}</p>
          <div className="mt-2 flex items-center text-sm ">
            <h3 className="font-bold text-black">Genres:</h3>
            <ul className="ml-2 list-none gap-2 list-inside text-sm text-black flex">
              {genres.map((genre) => (
                <li key={genre.id}>
                  <span className="text-black">{genre.name}</span>
                </li>
              ))}
            </ul>
          </div>
          {rating && (
            <div className="mt-2 flex items-center text-sm ">
              <h3 className="font-bold text-black">Your Rating:</h3>
              <div className="text-yellow-600 mx-1">
                <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
              </div>
              <span className="text-black">{rating}</span>
            </div>
          )}
        </div>
      </div>
      {totalLength - 1 !== index && <div className="border-b px-4 mt-4" />}
    </div>
  );
};
