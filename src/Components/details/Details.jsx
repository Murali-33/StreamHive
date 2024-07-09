import React from 'react'; 
import "./details.scss";
import { useParams } from 'react-router';
import useFetch from '../customHook/useFetch';
import Cast from './cast/Cast';
import DetailsBanner from './detailsBanner/DetailsBanner';
import VideosSection from './VideosSection/VideosSection';
import Similar from './VideosSection/Carousels/Similar';
import Recommendation from './VideosSection/Carousels/Recommandation';

function Details() {
  const {mediaType,id} = useParams();
  const {data ,loading} = useFetch(`/${mediaType}/${id}/videos`);
  const {data :credits ,loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credits`);


  return (
    <div className='detailsPage'>
      <div className="sectionWrapper">
      <DetailsBanner video={data?.results?.[0]} crew={credits?.data?.crew}/>
      <Cast data={credits?.crew} loading={loading}/>
      <VideosSection data={data} />
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType}  id={id} />
      </div>
    </div>
  )
}

export default Details
