import React,{useRef} from 'react'; 
import './Carousel.scss';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import LazyloadImages from '../LazyLoadingImages/LazyloadImages' ;
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from 'dayjs';
import PosterFallBanck from '../../assets/no-poster.png';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";
import CircleRating from '../circleRating/CircleRating';
import Genres from '../genres/Genres';


function Carousel({data ,loading ,Point,title}) {
  const carouselRef = useRef();
  const {url} = useSelector((state)=> state.home);
  const navigate = useNavigate();

  const navigation = (direction)=>{
      const carouselNav = carouselRef.current;
      const scrollMovement = direction === "left"  ? carouselNav.scrollLeft - (carouselNav.offsetWidth + 20)
      : carouselNav.scrollLeft + (carouselNav.offsetWidth + 20);

      carouselNav.scrollTo({
        left:scrollMovement,
        behavior: "smooth",
      });
  };




  const skipItem = ()=>{
   return(
    <div className="skeletonItem">
      <div className="posterBlock skeleton"></div>
      <div className="textBlock">
        <div className="title skeleton"></div>
        <div className="date skeleton"></div>
      </div>
    </div>
   )
  };

  return (
    <div className='carousel'>
      <ContentWrapper>
        {title && <div className='carouselTitle'>{title}</div>}
      <BsFillArrowLeftCircleFill className='carouselLeftNav arrow' onClick={()=> navigation("left")}/>
      <BsFillArrowRightCircleFill className='carouselRighttNav arrow' onClick={()=> navigation("right")}/>
          {
            !loading ? (
              <div className='carouselItems' ref={carouselRef}>
                {
                  data?.map((item)=>{
                    const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallBanck;
                    return (
                      <div key={data?.id} className='carouselItem' onClick={()=> navigate(`/${item.media_type || Point}/${item.id}`)}>
                      <div className="posterBlock">
                        <LazyloadImages src={posterUrl}/>
                        <CircleRating rating={item.vote_average.toFixed(1)}/>
                        <Genres data={item.genre_ids.slice(0,2)}/>
                      </div>
                      <div className="textBlock">
                        <span className='title'>{item.title || item.name}</span>
                        <span className='date'>{dayjs(item.relese_Date).format("MMM D YYYY")}</span>
                      </div>
                      </div>
                    )
                  })
                }
              </div>
            ) :(
              <div className="loadingSkeleton">
                {skipItem()}
                {skipItem()}
                {skipItem()}
                {skipItem()}
              </div>
            )
          }
      </ContentWrapper>
    </div>
  )
}

export default Carousel
