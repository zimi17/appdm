'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import {
  Thumbs,
  Controller,
  Autoplay,
  EffectFade,
  Navigation,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'

const thumbImages = [
  '/images/posts/93/health-slide-1.jpg',
  '/images/posts/160/bg_login.jpg',
  '/images/posts/88/presentation-3-600x400.jpg',
]

interface Slide {
  image: string;
  tagline: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    image: '/images/posts/93/health-slide-1.jpg',
    tagline: 'Masa Depan Cerah Dimulai di Sini',
    subtitle: 'Jadilah Pemimpin Ekonomi Berintegritas dan Berdaya Saing Global.',
    ctaText: 'Daftar Sekarang',
    ctaLink: '/penerimaan',
  },
  {
    image: '/images/posts/160/bg_login.jpg',
    tagline: 'Pendidikan Berkualitas, Karir Gemilang',
    subtitle: 'Temukan Potensi Terbaikmu Bersama Kami.',
    ctaText: 'Pelajari Lebih Lanjut',
    ctaLink: '/program-studi',
  },
  // Add more slides as needed
];

const HeroSlider = () => {
  useEffect(() => {
    document.body.classList.add('bg-default-100')
    return () => {
      document.body.classList.remove('bg-default-100')
    }
  }, [])

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <section
      id="home"
      className="bg-[url('/images/other/bg-lines-2.png')] bg-cover bg-no-repeat dark:bg-[url('/images/other/bg-lines-2-dark.png')]"
    >
      <div className="grid grid-cols-1 items-end gap-6 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <Swiper
            onSwiper={setThumbsSwiper}
            speed={1000}
            watchSlidesProgress={true}
            loop={false}
            effect="fade"
            modules={[Thumbs, EffectFade]}
            className="mySwiper swiper-hero"
          >
            {thumbImages.map((image, idx) => {
              return (
                <SwiperSlide key={idx} className="relative">
                  <img
                    alt="swiper-image"
                    src={image}
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="relative p-6 xl:col-span-2 xl:p-0">
          <Swiper
            speed={1000}
            spaceBetween={10}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            watchSlidesProgress
            modules={[Thumbs, Controller, Autoplay, Navigation]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            loop
            navigation={{
              nextEl: '.cre-button-next',
              prevEl: '.cre-button-prev',
            }}
            className="mySwiper2 swiper-hero relative me-10"
          >
            {slides.map((slide, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col items-start justify-end pb-28 xl:h-full">
                    <h2 className="mt-6 max-w-2xl text-4xl font-semibold text-default-950">
                      {slide.tagline}
                    </h2>
                    <p className="mt-5 w-3/4  text-base font-medium">
                      {slide.subtitle}
                    </p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="absolute inset-x-0 bottom-8 z-10">
            <div className="relative flex items-center justify-end gap-5 pe-10">
              <div className="cre-button-prev cursor-pointer">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-default-200 bg-default-50 text-default-900 hover:bg-primary hover:text-white">
                  <LuArrowLeft className="h-7 w-7" />
                </div>
              </div>
              <div className="cre-button-next cursor-pointer">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-default-200 bg-default-50 text-default-900 hover:bg-primary hover:text-white">
                  <LuArrowRight className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
