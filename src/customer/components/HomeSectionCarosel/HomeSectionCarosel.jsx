import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material';

const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item => <HomeSectionCard />))
  return (
    <div className='relative px-4 lg:px-8'>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
        />
        {/* <Button></Button>...........1:07:45 */}
      </div>
    </div>
  )
}

export default HomeSectionCarosel