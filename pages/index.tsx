import InfoCards from '@/components/home/InfoCards'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full px-4'>
      <InfoCards income={0.0} expenses={0.0} />
    </div>
  )
}

export default Home
