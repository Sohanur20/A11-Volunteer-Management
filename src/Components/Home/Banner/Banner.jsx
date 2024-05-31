import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';



const Banner = () => {

  const [sliders , setSlider] = useState([])
  useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_URL}/addVolunteer`)
    .then(res =>res.json())
    .then(data =>{
      // console.log(data);
      setSlider(data)
    })


  },[])


  return (

    <>
       
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >


{
  sliders.map(slider => <SwiperSlide key={slider._id}><div  className="hero h-[600px]" style={{backgroundImage: `url(${slider.thumbnail
  })`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{slider.title}</h1>
      <p className="mb-5"></p>
     
    </div>
  </div>
</div>
</SwiperSlide>
)
}


      </Swiper>
    </>
);
};

export default Banner;