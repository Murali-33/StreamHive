import React ,{useState}from 'react';
import '../home/trending/Trending.scss';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import SwitchTab from '../switchTab/SwitchTab';
import useFetch from '../customHook/useFetch';
import Carousel from '../carousel/Carousel';



function Popular() {
  const [Point,setPoint] = useState("movie");

  const {data , loading} = useFetch(`/${Point}/popular`);

  const onTabChange= (tab)=>{
     setPoint( tab === "Movies" ? "movie":"tv")
  }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>
        Free To Watch
        </span>
        <SwitchTab data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} Point={Point}/>

    </div>
  )
}

export default Popular
