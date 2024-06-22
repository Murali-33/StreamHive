import './App.scss';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  fetchDataFrmApi  from './utils/tmdbService';
import { getApiConfig ,getGenres} from './store/homeSlice';
import {BrowserRouter,Route, Routes} from "react-router-dom";

import Home from './Components/home/Home';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Details from './Components/details/Details';
import SearchResult from './Components/searchResult/SearchResult';
import PageNotFound from './Components/404/PageNotFound';
import Explore from './Components/explore/Explore';





function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);

  useEffect(() => {
    fetchApi();
    fetchGenres();
  },[]);

  const fetchApi = () => {
    fetchDataFrmApi("/configuration")
      .then((res) => {
        // console.log(res);
        const url={
          backdrop:res.images.secure_base_url+"original",
          poster:res.images.secure_base_url+"original",
          profile:res.images.secure_base_url+"original",
        }
        dispatch(getApiConfig(url));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchGenres = async()=>{
      let promises =[];
      let endPoints = ["tv", "movie"];
      let allGenres = {}; 

      endPoints.forEach((url)=>{
         promises.push(fetchDataFrmApi(`/genre/${url}/list`));
      });
      const data = await Promise.all(promises);
      console.log("genres:",data);
     data.map(({genres})=>{
       return  genres.map((item)=>(allGenres[item.id] = item))
     });

     dispatch(getGenres(allGenres));
  }

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/search/:query' element={<SearchResult/>}/>
       <Route path='/:mediaType/:id' element={<Details/>}/>
       <Route path='/explore/:mediaType' element={<Explore/>}/>
       <Route path='*' element={<PageNotFound/>}/>
      </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

