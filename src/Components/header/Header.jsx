import React, { useEffect, useState} from "react";
import './Header.scss';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import logo from '../../assets/movix-logo.svg';
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [show, setShow] = useState("top");
  const[mobileMenu,setMobileMenu] = useState(false);
  const [showSearch,setShowSearch] = useState("");
  const navigate = useNavigate();
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const [query,setQuery]=useState("");


useEffect(()=>{

},[location])

  const handleScroll =()=>{
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY && !mobileMenu){
        setShow("hide")
      }else{
        setShow("show")
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(()=>{
  window.addEventListener("scroll", handleScroll);
  return ()=>{
     window.removeEventListener("scroll",handleScroll);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[lastScrollY])

  const onOpenSearch =()=>{
    setMobileMenu(false);
    setShowSearch(true)
  }

  const onOpenMobileMenu =()=>{
     setMobileMenu(true);
     setShowSearch(false)
  }

  const handleSearchQuery =(event)=>{
    if(event.key === "Enter" || query.length >4){
      navigate(`/search/${query}`);
      setTimeout(()=>{
      setShowSearch(false)
      },1000)
    }
  };

  const navigationHandler =(type)=>{
    if(type === "movie"){
      navigate("/explore/movie")
    }else{
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
    <ContentWrapper>
      <div className="logo" onClick={()=>navigate('/')}>
        <img src={logo} alt="" />
        {/* <span>StreamX</span> */}
      </div>
      <ul className="mainMenu">
        <li className="submenuItem" onClick={()=>navigationHandler('movie')}>Movies</li>
        <li className="submenuItem" onClick={()=> navigationHandler("tv")}>TV Shows</li>
        <li className="submenuItem"><HiOutlineSearch onClick={onOpenSearch}/></li>
      </ul>
      <div className="mobileViewMenuItems">
      <HiOutlineSearch onClick={onOpenSearch} />
      {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={onOpenMobileMenu} />
          )}
      </div>
    </ContentWrapper>
    {
      showSearch && (
        <div className="searchBar">
         <ContentWrapper>
          <div className="searchInput">
            <input type="text" placeholder="Search for a movie or tv show...." onChange={(e)=> setQuery(e.target.value)} onKeyUp={handleSearchQuery}/>
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
         </ContentWrapper>
        </div>
      )
    }
    </header>
  )
}

export default Header
