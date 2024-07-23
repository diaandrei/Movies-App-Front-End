import React from "react";

const dummyData = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1615650949849-37db4f2c67db?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "1. House of the Dragon",
    createdDate: "2022–",
    noOfEpi: "20 eps",
    ratings: "8.4",
    desc: "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
    creator: [
      {
        id: 0,
        name: "Ryan J. Condal",
        url: "https://www.imdb.com/name/nm2952284/?ref_=wl_pc_1",
      },
      {
        id: 1,
        name: "George R.R. Martin",
        url: "https://www.imdb.com/name/nm0552333/?ref_=wl_pc_1",
      },
    ],
    stars: [
      {
        id: 0,
        name: "Matt Smith",
        url: "https://www.imdb.com/name/nm1741002/?ref_=wl_pca_1_1",
      },
      {
        id: 1,
        name: "Emma D'Arcy",
        url: "https://www.imdb.com/name/nm8458664/?ref_=wl_pca_2_1",
      },
      {
        id: 2,
        name: "Olivia Cooke",
        url: "https://www.imdb.com/name/nm4972453/?ref_=wl_pca_3_1",
      },
    ],
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1615650949849-37db4f2c67db?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2. Gladiator II",
    createdDate: "2024",
    noOfEpi: "",
    ratings: "",
    desc: "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    creator: [
      {
        id: 0,
        name: "Ridley Scott",
        url: "",
      },
    ],
    stars: [
      {
        id: 0,
        name: "Paul Mescal",
        url: "",
      },
      {
        id: 1,
        name: "Joseph Quinn",
        url: "",
      },
      {
        id: 2,
        name: "Connie Nielsen",
        url: "",
      },
    ],
  },
];
const WatchList = () => {
  return (
    <div className="">
      <div className="bg-[#1f1f1f] h-48">
        <div className="max-w-7xl mx-auto h-full ">
          <div className="flex items-center h-full">
            <div>
              <span className="text-white text-2xl font-bold">
                Your Watchlist
              </span>
              <p className="text-[#BCBCBC] mt-3 text-sm font-semibold">
                {
                  "Your Watchlist is the place to track the titles you want to watch. You can sort your Watchlist by the IMDb rating, popularity score and arrange your titles in the order you want to see them."
                }
              </p>
            </div>
          </div>
          <div className="flex h-screen">
            <div className="w-3/4 p-4  overflow-y-auto">
              <div className="rounded-md mb-4  border">
                {dummyData.map((movie, index) => (
                  <MovieCard key={movie.id} movie={movie} index={index} />
                ))}
              </div>
            </div>
            <div className="w-1/4  p-4 overflow-y-auto ">
              <div className="rounded-l-sm border-gold-500 border-l-4 ">
                <span className="text-black text-2xl font-bold pl-2 ">
                  More to explore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MovieCard = ({ movie, index }) => {
  return (
    <div className=" p-4 rounded-md bg-white shadow-lg">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src={movie.img || "https://via.placeholder.com/150"}
            alt={movie.title}
            className="w-32 h-32 rounded-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p className="text-gray-400 text-sm font-semibold">
            {movie.createdDate}
          </p>
          {movie.noOfEpi && (
            <p className="text-gray-400 text-sm font-semibold">
              {movie.noOfEpi}
            </p>
          )}
          {movie.ratings && (
            <p className="text-yellow-500 text-sm ">{`⭐ ${movie.ratings}`}</p>
          )}
          <p className="mt-2 text-sm font-semibold">{movie.desc}</p>
          <div className="mt-2 flex items-center text-sm ">
            <h3 className="font-bold text-black ">Creators:</h3>
            <ul className=" ml-2 list-none gap-2 list-inside text-sm text-black flex">
              {movie.creator.map((creator) => (
                <li key={creator.id}>
                  <a
                    href={creator.url}
                    className=" hover:underline text-blue-500  "
                  >
                    {creator.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 flex items-center text-sm ">
            <h3 className="font-bold text-black ">Stars:</h3>
            <ul className=" ml-2 list-none gap-2 list-inside text-sm text-black flex">
              {movie.stars.map((star) => (
                <li key={star.id}>
                  <a
                    href={star.url}
                    className=" hover:underline text-blue-500  "
                  >
                    {star.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {dummyData?.length - 1 != index && (
        <div className="border-b px-4  mt-4" />
      )}
    </div>
  );
};

export default WatchList;
