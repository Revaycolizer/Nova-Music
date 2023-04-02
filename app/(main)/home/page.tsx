import React from 'react'
import Search from '../search'
import Image from 'next/image'
import head from './test images/ya.jpg'
import gal from './test images/ye.jpg'
import voi from './test images/yo.jpg'
import beau from './test images/yu.jpg'

export const metadata={
    title:'Home | Nova Music'
}
export default function page(){
  return (
    // <section className='hidden lg:block lg:grid-cols-2'>
    
    <div className='px-5 lg:px-4 lg:py-7 text-uni'>
      
      <Search/><section className='text-uni lg:py-10 font-bold'>
        <h4 className=' md:text-4xl lg:text-2xl'>NOW PLAYING</h4>
        <h2 className='text-5xl md:text-8xl lg:text-5xl'>Alan Walker</h2>
        <h3 className='text-3xl md:text-8xl lg:text-5xl'>ft Kygo</h3>
        <h4 className='text-lg md:text-4xl lg:text-5xl'>Give me your love</h4>
        </section>
        <section className='text-uni font-bold'>
          <h4 className=' md:text-4xl lg:text-2xl'>PLAYLISTS(7)</h4>
          <h2 className='text-5xl md:text-8xl lg:text-5xl'>BEST OF</h2>
          </section>
          
          <section className='grid py-6 grid-cols-2 gap-4 lg:gap-0'>
            <Image className='rounded-3xl w-4/4 h-2/4 lg:w-4/6 lg:h-3/5' src={head} alt='yo'/>
            <Image className='rounded-3xl w-4/4 h-2/4 lg:w-4/6 lg:h-3/5' src={gal} alt='gal'/>
            <Image className='rounded-3xl w-4/4 h-2/4 lg:w-4/6 lg:h-3/5' src={voi} alt='yo'/>
            <Image className='rounded-3xl w-4/4 h-2/4 lg:w-4/6 lg:h-3/5' src={beau} alt='gal'/>
           

          </section>
          
          </div>
          // </section>
  )
}

