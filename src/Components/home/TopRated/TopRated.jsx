import React, { useState } from "react";
import "../trending/Trending.scss";
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import SwitchTab from "../../switchTab/SwitchTab";
import useFetch from "../../customHook/useFetch";
import Carousel from "../../carousel/Carousel";

function TopRated() {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTab data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}

export default TopRated;
