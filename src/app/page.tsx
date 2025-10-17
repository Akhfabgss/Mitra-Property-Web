"use client";
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/section/Hero';
import About from '@/components/section/About';
import Service from '@/components/section/Service';
import Subsribe from '@/components/section/Subscribe';
import Project from '@/components/section/Project';
import Testimoni from '@/components/section/Testimoni';
import Contact from '@/components/section/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Subsribe />
      <Project />
      <Testimoni />
      <Contact />
      <Footer />
      <div className="w-full flex bg-white ">

      </div>
    </div>
  );
}
