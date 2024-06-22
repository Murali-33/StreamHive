import React, { useState } from 'react';
import '../trending/Trending.scss';
import ContentWrapper from '../../contentWrapper/ContentWrapper';
import SwitchTab from '../../switchTab/SwitchTab';
import useFetch from '../../customHook/useFetch';
import Carousel from '../../carousel/Carousel';

function Trending() {
  const [point, setPoint] = useState("day");
  const [endpoint, setEndpoint] = useState(`/trending/all/${point}`);

  const { data, loading } = useFetch(endpoint);

  const onTabChange = (tab) => {
    let newPoint = point;
    let newEndpoint = endpoint;

    if (tab === "Day") {
      newPoint = "day";
      newEndpoint = `/trending/all/day`;
    } else if (tab === "Week") {
      newPoint = "week";
      newEndpoint = `/trending/all/week`;
    } else if (tab === "People") {
      newPoint = point; // Keep the current point (day or week)
      newEndpoint = `/trending/tv/${newPoint}`;
    }

    setPoint(newPoint);
    setEndpoint(newEndpoint);
  };

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>
          Trending
        </span>
        <SwitchTab data={["Day", "Week", "People"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
}

export default Trending;
