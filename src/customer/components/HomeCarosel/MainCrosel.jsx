import React from 'react'
import { mainCarouselData } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCrosel = () => {

  const items = mainCarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt='' />)



  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  )
}

export default MainCrosel





// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { mainCarouselData } from './MainCaroselData';




// const MainCrosel = () => (
//   // const navigate=useNavi
//   // const items = mainCarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=''/>)
//   const items=[]

//   return(
//     <AliceCarousel
//       mouseTracking
//       items={items}
//       controlsStrategy="alternate"
//     />
//   )
// );

// export default MainCrosel;