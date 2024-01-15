import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div>
        <HomeSectionCarosel />
      </div>
    </div>
  )
}

export default HomePage