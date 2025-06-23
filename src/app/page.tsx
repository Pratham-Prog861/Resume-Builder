import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import WhyAmIDeveloping from '@/components/WhyAmIDeveloping'
import React from 'react'

const page = () => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <WhyAmIDeveloping />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default page