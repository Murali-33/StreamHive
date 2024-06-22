import React, { useState } from 'react';
import '../trending/Trending.scss';
import ContentWrapper from '../../contentWrapper/ContentWrapper';
import SwitchTab from '../../switchTab/SwitchTab';
import useFetch from '../../customHook/useFetch';
import Carousel from '../../carousel/Carousel';

function TopRated() {
  const [endpoint, setEndpoint] = useState("/tv/top_rated");

  const { data, loading } = useFetch(endpoint);

  const onTabChange = (tab) => {
    if (tab === "Top TV Shows") {
      setEndpoint("/tv/top_rated");
    } else if (tab === "Top Movies") {
      setEndpoint("/movie/top_rated");
    } else if (tab === "Streaming") {
      setEndpoint("/tv/airing_today");
    }
  };

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>
          Top Rated
        </span>
        <SwitchTab data={["Top Movies", "Top TV Shows", "Streaming"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}

export default TopRated;
