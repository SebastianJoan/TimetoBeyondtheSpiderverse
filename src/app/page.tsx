'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'

import bg_image from '../../public/bg.jpeg'
import Countdown from '@/components/CountDown'
import Head from 'next/head'

export default function Page() {


  useEffect(() => {
    const audio = new Audio('/Annihilate.mp3');

    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);


  return (
    <div className='w-full h-screen '>
      <Head>
        <link rel="icon" href="/spiderman.svg" sizes="any" />
      </Head>
      <Image
        src={ bg_image}
        alt='Imagen de fondo'
        width={7196}
        height={5446}
        className='w-full h-full object-cover object-top absolute'
      />
      <div className='w-full h-full flex justify-center items-center justify-items-center'>
      <Countdown />
      </div>
    </div>
  )
}
