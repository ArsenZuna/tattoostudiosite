import React from 'react';
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import GallerySection from './components/GallerySection.jsx';
import Skills from './components/Skills.jsx';
import Interview from './components/Interview.jsx';
import Testimonial from './components/Testimonial.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Copyright from './components/Copyright.jsx';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      {/*<section id="gallery"><GallerySection /></section>*/}
      <section id="testimonial"><Testimonial /></section>
      <section id="skills"><Skills /></section>
      <section id="interview"><Interview /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
