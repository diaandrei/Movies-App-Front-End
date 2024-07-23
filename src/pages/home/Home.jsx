import React, { useState } from "react";
import { CarouselCard } from "../../components/carousel-card/CarouselCard";
import { FeaturedToday } from "../../components/featured-today/FeaturedToday";
import { ReactCarousel } from "../../components/carousel/Carousel";

import { Link } from "react-router-dom";

const Home = () => {
  const featuredToday = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2021/07/28/00/57/pyramids-6498038_640.jpg",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2024/04/08/16/54/ai-generated-8683952_640.jpg",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2023/11/08/15/54/ai-generated-8375142_640.jpg",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2018/02/12/13/38/art-3148348_640.jpg",
    },
    {
      id: 5,
      img: "https://cdn.pixabay.com/photo/2016/04/14/07/50/film-1328405_640.jpg",
    },
    {
      id: 6,
      img: "https://cdn.pixabay.com/photo/2021/07/28/00/57/pyramids-6498038_640.jpg",
    },
    {
      id: 7,
      img: "https://cdn.pixabay.com/photo/2024/04/08/16/54/ai-generated-8683952_640.jpg",
    },
    {
      id: 8,
      img: "https://cdn.pixabay.com/photo/2023/11/08/15/54/ai-generated-8375142_640.jpg",
    },
    {
      id: 9,
      img: "https://cdn.pixabay.com/photo/2018/02/12/13/38/art-3148348_640.jpg",
    },
    {
      id: 10,
      img: "https://cdn.pixabay.com/photo/2016/04/14/07/50/film-1328405_640.jpg",
    },
  ];
  const criticallyAclaimed = [
    {
      id: 0,
      cover: "https://static.hbo.com/game-of-thrones-1-1920x1080.jpg",
      rating: 5,
      title: "Game of Thrones",
      genre: "Action",
    },
    {
      id: 1,
      cover:
        "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg",
      rating: 5,
      title: "The Boys",
      genre: "Action",
    },
    {
      id: 2,
      cover:
        "https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2018/07/Vikings-S5B-SDCC-1.jpg?w=1440",
      rating: 5,
      title: "Vikings",
      genre: "Action",
    },
    {
      id: 3,
      cover:
        "https://m.media-amazon.com/images/M/MV5BNGZjZDc3NjAtYjI1OC00NWUzLWIxOWItNzUyODc5NDIwMWRjXkEyXkFqcGdeQXVyNTQ4ODA2NzQ@._V1_FMjpg_UX1000_.jpg",
      rating: 5,
      title: "YOU",
      genre: "Psychological thriller",
    },
    {
      id: 4,
      cover:
        "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
      rating: 5,
      title: "Demon Slayer",
      genre: "Anime",
    },
  ];
  const topTenThisWeek = [
    {
      id: 0,
      cover:
        "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg",
      rating: 5,
      title: "The Boys",
    },
    {
      id: 1,
      cover:
        "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg",
      rating: 5,
      title: "The Boys",
      genre: "Action",
    },
    {
      id: 2,
      cover:
        "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg",
      rating: 5,
      title: "The Boys",
      genre: "Action",
    },
    {
      id: 3,
      cover:
        "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg",
      rating: 5,
      title: "The Boys",
      genre: "Action",
    },
    {
      id: 4,
      cover:
        "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg",
      rating: 5,
      title: "The Boys",
      genre: "Action",
    },
  ];
  return (
    <div className="bg-black min-h-screen w-full ">
      <div className="max-w-7xl mx-auto p-5">
        <Link
          to={"/create-movie"}
          className=" text-white border px-4 py-2 rounded-lg hover:scale-110 transition-transform overflow-hidden hover:bg-gold-500 hover:text-black hover:border-black "
        >
          {"Create Movie"}
        </Link>
        <ReactCarousel />
        <CarouselCard title={"Featured Today"} data={criticallyAclaimed} />
        <CarouselCard
          title={"Top 10 on Movies this week"}
          data={topTenThisWeek}
          autoPlaySpeed={3000}
        />
        <CarouselCard title={"Fan Favorites"} data={criticallyAclaimed} />
      </div>
    </div>
  );
};

export default Home;
