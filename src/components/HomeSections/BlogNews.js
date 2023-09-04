"use client";

import { useEffect, useState } from "react";
import Container from "../utils/Container";
import ImageCard from "../utils/ImageCard";
import Title from "../utils/Title";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const BlogNews = () => {
  const [allNews, setAllNews] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        url: "https://newsapi.org/v2/everything?q=bitcoin&apiKey=324f13b8a01640a7a46d0da659104ac9",
      };

      try {
        const res = await axios.request(options);
        setAllNews(res.data.articles);
        setLoader(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <section className="py-40">
      <Container>
        <Title className="text-center text-3xl before:left-1/2 before:-translate-x-1/2 before:w-1/6 mb-20">
          Recent Investment News
        </Title>
        <div className="">
          <div ref={sliderRef} className="keen-slider">
            {
              //     !loader &&
              //   allNews.map((news, i) => (
              //     <div className="keen-slider__slide" key={i}>
              //       <ImageCard
              //         src={news.urlToImage}
              //         title={news.title}
              //         href={news.url}
              //         desc={news.description}
              //       />
              //     </div>
              //   ))
            }
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogNews;
