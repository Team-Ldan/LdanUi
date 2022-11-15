import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';
import CompanySection from '../components/Company-section/Company';
import AboutUs from '../components/About-us/AboutUs';
import Courses from '../components/Courses-section/Courses';
import ChooseUs from '../components/Choose-us/ChooseUs';
import Features from '../components/Feature-section/Features';
import FreeCourse from '../components/Free-course-section/FreeCourse';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import { BackgroundImage } from '@mantine/core';

const Home = () => {
  return (
    <Fragment>
      <BackgroundImage src='./background.png' radius='sm'>
        <Header />
        <HeroSection />
        <CompanySection />
        <Courses />
      </BackgroundImage>
      <BackgroundImage src='./background.png' radius='sm'>
        <AboutUs />
        <Features />
        <ChooseUs />
        <FreeCourse />
      </BackgroundImage>
      <BackgroundImage src='./background.png' radius='sm'>
        <Testimonials />
        <Newsletter />
        <Footer />
      </BackgroundImage>
    </Fragment>
  );
};

export default Home;
