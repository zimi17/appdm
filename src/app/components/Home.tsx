'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LuArrowUpRight } from 'react-icons/lu'
import Link from 'next/link'
import type { Swiper as SwiperType } from 'swiper'
import { Thumbs, Controller, Autoplay, EffectFade } from 'swiper/modules'

import { homeSwiperSlides } from '../data'

import bgLineImg from '@/assets/images/other/bg-lines-1.svg'

import agency1 from '@/assets/images/landing/agency/img-1.jpg'
import agency2 from '@/assets/images/landing/agency/img-2.jpg'
import agency3 from '@/assets/images/landing/agency/img-3.jpg'

import 'swiper/css'
import 'swiper/css/effect-fade'
import Image from 'next/image'

const swiperImages = [agency1, agency2, agency3]
const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  return (
    <section
      id="home"
      className={'bg-cover bg-no-repeat'}
      style={{ backgroundImage: `url(${bgLineImg.src})` }}
    >
      <div className="relative grid grid-cols-1 items-center xl:grid-cols-5">
        <div className="relative z-10 order-2 -mt-24 p-6 xl:order-none xl:col-span-2 xl:-me-24 xl:mt-0 xl:p-0">
          <div className="mx-auto max-w-xl rounded-xl bg-default-100 dark:bg-default-50 xl:me-0 xl:ms-auto">
            <div className="p-6">
              <Swiper
                speed={1000}
                spaceBetween={10}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                watchSlidesProgress
                modules={[Thumbs, Controller, Autoplay]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                loop
                className="mySwiper2 relative"
              >
                {homeSwiperSlides.map((item, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className="flex flex-col items-start justify-end xl:h-full">
                        <span className="text-base font-medium uppercase tracking-wider text-default-800">
                          {item.title}
                        </span>
                        <h2 className="mt-6 text-3xl font-semibold text-default-950 md:text-4xl/snug">
                          {item.name}
                        </h2>
                        <p className="mb-7 mt-5  text-base md:w-3/4">
                          {item.description}
                        </p>
                        <Link
                          href=""
                          className="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-6 py-2 text-default-950 transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                          Get Solution
                          <LuArrowUpRight className="h-6 w-6" />
                        </Link>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none xl:col-span-3">
          <Swiper
            onSwiper={setThumbsSwiper}
            speed={1000}
            watchSlidesProgress={true}
            loop={false}
            effect="fade"
            modules={[Thumbs, EffectFade]}
            className="mySwiper"
          >
            {swiperImages.map((image, idx) => {
              return (
                <SwiperSlide key={idx} className="relative">
                  <Image alt="heroImg" src={image} className="h-full w-full" />
                  <div className="absolute inset-0 bg-black/25" />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Home
