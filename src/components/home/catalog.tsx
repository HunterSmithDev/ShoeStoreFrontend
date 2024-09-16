'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Catalog = () => {
    const [isHovered, setHovered] = useState<number | null >(null)

    const images = [
        {image1: '/./Assets/images/home/WMNS+AIR+JORDAN+1+MID.jpg', image2: '/./Assets/images/home/WMNS+AIR+JORDAN+1+MID+2.jpg', product: 'Air Jordan 1 Mid'},
        {image1: '/./Assets/images/home/NIKE+SB+DUNK+LOW+PRO.jpg', image2: '/./Assets/images/home/NIKE+SB+DUNK+LOW+PRO+2.jpg', product: 'Nike SB Dunk Low Pro'},
        {image1: '/./Assets/images/home/NIKE+ZOOM+PEGASUS+41+CHIEFS.png', image2: '/./Assets/images/home/NIKE+ZOOM+PEGASUS+41+CHIEFS+2.png', product: 'Nike Pegasus 41 NFL Kansas City Chiefs'},
        {image1: '/./Assets/images/home/G.T.+CUT+3+OLY.jpg', image2: '/./Assets/images/home/G.T.+CUT+3+OLY+2.png', product: 'Nike G.T. Cut 3 Electric'},
        {image1: '/./Assets/images/home/AIR+JORDAN+1+RETRO+HIGH+OG.jpg', image2: '/./Assets/images/home/AIR+JORDAN+1+RETRO+HIGH+OG+2.jpg', product: 'Air Jordan 1 Retro High OG "Midnight Navy"'},
        {image1: '/./Assets/images/home/AIR+JORDAN+1+MID.jpg' , image2: '/./Assets/images/home/AIR+JORDAN+1+MID+2.jpg', product: 'Air Jordan 1 Mid'}
    ]

  return (
    <>
        <div className='relative px-4'>
            <div className='text-center my-6'>
                <h2 className='text-3xl font-extrabold'>Our New Arrivals</h2>
                <p className='text-xl font-bold'>Check them out!</p>
            </div>
            
            
            <div className='md:flex items-center mx-2 group mb-4'>
                {images.map((image, index ) => {
                    return (
                    <Link href='/products' key={index}>
                        <div key={index} className='relative hover:z-10' 
                            onMouseEnter={() => setHovered(index)} 
                            onMouseLeave={() => setHovered(null)}>

                            {/* Hovered */}
                            <div className={`absolute mx-auto text-white bg-black bg-opacity-50 font-semibold p-2 transition-opacity duration-200 ${isHovered === index ? 'z-20 opacity-100' : 'z-20 md:z-0 md:opacity-0'}`}>
                                <p>{image.product}</p>
                            </div>
                            
                            <Image src={image.image2} alt='AIR JORDAN 1 MID' width={1000} height={1000}
                            className={`md:absolute transition-all duration-200 transform group-hover:brightness-50 overflow-hidden object-cover
                                ${isHovered === index ? 'opacity-100 !brightness-100 scale-110 rounded-md' : 'md:opacity-0 opacity-100' }`}/>
                            {/* Default */}
                            <Image src={image.image1} alt='AIR JORDAN 1 MID' width={1000} height={1000}
                            className={`transition-all duration-200 transform group-hover:brightness-50 hover:!brightness-100 object-cover hidden md:block
                                ${isHovered === index ? 'opacity-0' : 'opacity-100'}` }/>
                        </div>
                    </Link>
                        
                    )
                })}
            </div>
        </div>
        
    </>
    
  )
}

export default Catalog