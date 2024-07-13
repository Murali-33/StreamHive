import React, { useState, useEffect } from "react";
import "./hero.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../customHook/useFetch";
import { useSelector } from "react-redux";
import Img from "../../LazyLoadingImages/LazyloadImages";
import ContentWrapper from "../../contentWrapper/ContentWrapper";

function HeroBanner() {
  const [srchQery, setSrchQuery] = useState("");
  const [bgImage, setbgImage] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  const handleSearchQuery = (e) => {
    if (e.key === "Enter" && srchQery.length > 0) {
      navigate(`/search/${srchQery}`);
    } else {
      navigate(`/search/${srchQery}`);
    }
  };

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setbgImage(bg);
  }, [data]);

  return (
    <div className="herobanner">
      {!loading && (
        <div className="backdrop-im">
          <Img src={bgImage} alt="bg images" />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="bannerContent">
          <span className="title">Welcome.</span>
          <span className="Stitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="search_Input">
            <input
              id="Search"
              type="text"
              placeholder="Search for movie or tv show..."
              onChange={(e) => setSrchQuery(e.target.value)}
              onKeyUp={handleSearchQuery}
              value={srchQery}
            />
            <button id="searchBtn" onClick={handleSearchQuery}>
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
