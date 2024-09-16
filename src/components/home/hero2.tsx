'use client'
import React from 'react'
import Image from 'next/image'

const Hero2 = () => {

  return (
    <>
        <a href='/products' className='w-full'>
            <Image src='/./Assets/images/home/hero_image.jpg' alt='Image of Shoes' width={2000} height={500}/>
        </a>
        
    </>
  )
}

export default Hero2