import React from 'react'
import './Home.css'
import Navbar from "./Navbar";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';  
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SellIcon from '@mui/icons-material/Sell';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>

    <Navbar/>

    <div className="hero">
      <div className="hero1">
        <h3>'Explore the World'</h3>
        <h1> It's Time To</h1>
        <h2>Travel Beyond </h2>
        <h3>Limits!</h3>
        <p> Find the best place around the world <br /> with us and make your journey memorable!</p>
        <button> Explore Now <TravelExploreIcon className='icon'/> </button>
        <button>Watch Video <PlayCircleIcon className='icon'/> </button>
      </div>
    </div>

    <div className="main">

      <div className="main-1">
        <div className="icon">
          <TravelExploreIcon/>
        </div>
        <div className="text">
          <h4>Where to?</h4>
          <p>Search destinations</p>
        </div>
      </div>
      <div className="main-1">
        <div className="icon">
          <CalendarMonthIcon/>
        </div>
        <div className="text">
          <h4>Check in</h4>
          <p>Add dates</p>
        </div>
      </div>
      <div className="main-1">
        <div className="icon">
          <CalendarMonthIcon/>
        </div>
        <div className="text">
          <h4>Check out</h4>
          <p>Add dates</p>
        </div>
      </div>
      <div className="main-1">
        <div className="icon">
          <GroupIcon/>
        </div>
        <div className="text">
          <h4>Guests</h4>
          <p>2 Adults, 0 Children</p>
        </div>
      </div>
      <div className="main-1">
        <button> <SearchIcon className='icons'/> <span>Search</span></button>
      </div>
      
    </div>

    <div className="destination">
      <p>POPULAR DESTINATIONS</p>
      <h1> Explore Top Destinations</h1>
    </div>
<div className="destination-places">
   <Swiper
modules={[Navigation]}
navigation={true}
spaceBetween={20}
slidesPerView={4}
>
    <SwiperSlide>
      <div className="dest-1">
        <p><LocationOnIcon className="icon" /> Santorini, Greece</p>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="dest-2">
        <p><LocationOnIcon className="icon" /> Bali, Indonesia</p>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="dest-3">
        <p><LocationOnIcon className="icon" /> Paris, France</p>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="dest-4">
        <p><LocationOnIcon className="icon" /> Switzerland</p>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="dest-5">
        <p><LocationOnIcon className="icon" /> Maldives</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="dest-6">
        <p><LocationOnIcon className="icon" /> Dubai, UAE</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="dest-7">
        <p><LocationOnIcon className="icon" /> Sri Lanka</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="dest-8">
        <p><LocationOnIcon className="icon" /> Vietnam</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="dest-9">
        <p><LocationOnIcon className="icon" /> Malaysia</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="dest-10">
        <p><LocationOnIcon className="icon" /> Kazakhstan</p>
      </div>
    </SwiperSlide>
  </Swiper>
</div>

    <div className="choose">

      <div className="text">
        <p>WHY CHOOSE US?</p>
        <h1>We Make Your Travel  More  <span>Enjoyable</span></h1>
      </div>

      <div className="choose-1">

        <div className="price">
        <SellIcon className='icon'/>
          <h3>Best Price</h3>
          <p>We offer unbeatable prices and best value for your money</p>
        </div>
        <div className="price">
        <CalendarMonthIcon className='icon'/>
          <h3>Easy Booking</h3>
          <p>Book your trip in minutes with our simple process</p>
        </div>
        <div className="price">
        <HeadsetMicIcon className='icon'/>
          <h3>24/7 Support</h3>
          <p>We are always here to help you anytime, anywhere</p>
        </div>
        <div className="price">
        <HealthAndSafetyIcon className='icon'/>
          <h3>Safe Journey</h3>
          <p>Your safty is our priority on every journey</p>
        </div>

      </div>
    </div>

    <div className="trending">
      <p> TRENDING TOURS</p>
      <h1>Most Popular Tours</h1>
    </div>

    <div className="trending-places">

      <div className="turkey">
        <div className="image">
          <button>-20%</button>
        </div>
        <div className="text">
          <h4>Cappadocia, Turkey</h4>
          <pre>4 days / 3 Nights                <span>$499</span> </pre>
        </div>
      </div>

      <div className="phuket">
        <div className="image">
          <button>-15%</button>
        </div>
        <div className="text">
          <h4>Phuket, Thailand</h4>
          <pre>5 days / 4 Nights                <span>$599</span> </pre>
        </div>
      </div>

      <div className="banff">
        <div className="image">
          <button>-10%</button>
        </div>
        <div className="text">
          <h4>Banff, Canada</h4>
          <pre>5 days / 4 Nights                <span>$799</span> </pre>
        </div>
      </div>

      <div className="Manchu">
        <div className="image">
          <button>-25%</button>
        </div>
        <div className="text">
          <h4>Manchu Picchu</h4>
          <pre>5 days / 4 Nights                <span>$699</span> </pre>
        </div>
      </div>

    </div>
  
    </>
  )
}

export default Home