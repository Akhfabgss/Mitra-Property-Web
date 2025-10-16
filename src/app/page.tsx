"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Service from '@/components/Service';
import Subsribe from '@/components/Subscribe';
import Project from '@/components/Project';
import Testimoni from '@/components/Testimoni';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
