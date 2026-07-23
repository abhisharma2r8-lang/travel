import React from 'react'
import "./Destination.css"
import Navbar from './Navbar'

const Destination = () => {
  return (
    <>
    <Navbar/>
<section class="heroa">
    <div class="overlay">
        <h1>Explore Amazing Destinations</h1>
        <p>Discover the world's most beautiful places with Travelista.</p>

        <div class="search-box">
            <input type=" Placeholder" />
            <button>Search</button>
        </div>
    </div>
</section>


 
<section class="categories">

    <h2>Browse By Category</h2>

    <div class="category-container">

        <div class="category-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wHK5PmguLliIo5McANmO2oBzYBdZ-m1CKm4UqG1dWA&s=10" alt="" />
            <h3>Beaches</h3>
        </div>

        <div class="category-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxbUxA0Yb5GOklG08tay_5VOlqmnat5JBVO7poOUJDA&s=10" alt="" />
            <h3>Mountains</h3>
        </div>

        <div class="category-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9soDhnlDb8Yv5VvM7Cw5cFFeHMX0wAXsMZAi85xsFQ&s=10" alt="" />
            <h3>Cities</h3>
        </div>

        <div class="category-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNbWhcaISHAO8FTEZXvl5xBNCQI5JrzPHKGYC6cAN_A&s=10" alt="" />
            <h3>Historical</h3>
        </div>

    </div>

</section>



<section class="destinations">

<h2>Popular Destinations</h2>

<div class="destination-container">

<div class="carda">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsohvRwzEZ7j4xBvqc-rs58oSpIHoGyMhkT9Z8TQQnmQ&s=10" alt="" />
<h3>Switzerland</h3>
<p>Snowy mountains, lakes and beautiful nature.</p>
<button>Explore</button>
</div>

<div class="carda">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvi8Zj7U9rRvssQC_lbzSyicl-Zuc1249bHOdIA7_XQ&s=10" alt="" />
<h3>Japan</h3>
<p>Cherry blossoms and modern city life.</p>
<button>Explore</button>
</div>

<div class="carda">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8q7JboH0Vqa0PS1zt81XlOT4GTHW61d9G2E4c54wwNA&s=10" alt="" />
<h3>Maldives</h3>
<p>Luxury water villas and crystal clear sea.</p>
<button>Explore</button>
</div>

<div class="carda">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHPB9yHTa2rhjGCFa3MxYyT5jKQyaAGuuiMt16npuzQ&s=10" alt="" />
<h3>Egypt</h3>
<p>Explore pyramids and ancient history.</p>
<button>Explore</button>
</div>

<div class="carda">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFZk6dRrKgW4s8O7l3xSEloYUat_ebKu_fMKJj9kkQw&s=10" alt="" />
<h3>Bali</h3>
<p>Tropical paradise with amazing beaches.</p>
<button>Explore</button>
</div>

<div class="carda">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSulv1DCewebrL7f6-CUiSM0_HD_STHIW72g0s1zlMWKPOqLr8yszK_1U&s=10" alt="" />
<h3>Paris</h3>
<p>The city of love and the Eiffel Tower.</p>
<button>Explore</button>
</div>

</div>

</section>



<section class="tips">

<h2>Travel Tips</h2>

<div class="tips-container">

<div class="tip">
<h3>📅 Best Time</h3>
<p>Visit during the ideal season for the best experience.</p>
</div>

<div class="tip">
<h3>💰 Budget</h3>
<p>Plan your trip according to your budget.</p>
</div>

<div class="tip">
<h3>🏨 Hotels</h3>
<p>Choose the best hotels near top attractions.</p>
</div>

<div class="tip">
<h3>🍽 Local Food</h3>
<p>Don't miss famous local dishes.</p>
</div>

</div>

</section>



<section class="cta">

<h2>Ready For Your Next Adventure?</h2>

<p>Book your dream vacation with Travelista today.</p>

<button>Book Now</button>

</section>


</>


  )
}

export default Destination