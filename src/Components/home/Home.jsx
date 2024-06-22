import React from 'react'; 
import "./home.scss"
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from '../popular/Popular';
import TopRated from './TopRated/TopRated';


function Home() {
  return (
    <div className='homepage'>
      <HeroBanner />
      <div className='sectionWrapper'>
        <Trending />
      </div>
      <div className='sectionWrapper'>
        <Popular />
      </div>
      <div className='sectionWrapper'>
        <TopRated />
      </div>
    </div>
  );
}

export default Home
