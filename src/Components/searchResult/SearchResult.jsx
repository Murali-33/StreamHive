import React ,{useState , useEffect} from 'react'; 
import { useParams } from 'react-router';
import "./style.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import fetchDataFrmApi from '../../utils/tmdbService';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import noResults from '../../assets/no-poster.png';
import Spinner from '../spin/Spinner';
import MovieCards from '../mcards/MovieCards';



function SearchResult() {
  const[data ,setdata] = useState(null);
  const [loading,setLoading] = useState(false);
  const [pageNum ,setPageNum] = useState(1);
  const {query} = useParams();


 const fetchSearchData = ()=>{
      setLoading(true)
       fetchDataFrmApi(`/search/multi?query=${query}&page=${pageNum}`)
      .then((res)=>{
        setdata(res)
        setLoading(false)
        setPageNum((prevPage)=> prevPage + 1)
      })
 };

 const fetchNextPage = ()=>{
    fetchDataFrmApi(`/search/multi?query=${query}&page=${pageNum}`)
    .then((res)=>{
      if(data?.results){
       setdata({
         ...data , results:[...data?.results ,...res.results],
       });
      }else{
        setdata(res)
      }
       setPageNum((prev)=> prev+1)
    })
 }

 useEffect(()=>{
    setPageNum(1);
    fetchSearchData();
 },[query])



  return (
    <div className='searchResultsPage'>
      {loading && <Spinner initial={true}/>} 
      {!loading && (
        <ContentWrapper>
         {data?.results?.length > 0 ? (
                       <>
                       <div className="pageTitle">
                       {`Search ${
                                    data?.total_results > 1
                                        ? "results"
                                        : "result"
                                } of '${query}'`}
                       </div>
                       <InfiniteScroll
                       className="content"
                       dataLength={data?.results?.length || []}
                       next={fetchNextPage}
                       hasMore={pageNum <= data?.total_pages}
                       loader={<Spinner/>}
                       >
                        {data.results.map((item,index)=>{
                          if(item.media_type === "person") return;
                            return(
                              <MovieCards data={item} key={index} fromSearch={true} />
                            )
                        })}
                       </InfiniteScroll>
                       </>
                    ) : (
                        <span className="resultNotFound">
                            Sorry, Results not found!
                        </span>
                    )}
        </ContentWrapper>
      )}
      </div>
  )
}

export default SearchResult
