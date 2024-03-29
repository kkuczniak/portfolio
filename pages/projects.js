import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoLogoGithub, IoCheckmarkCircleOutline } from 'react-icons/io5';
import Menu from '../components/Menu';

export default function Projects() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Menu />
      <section className='projects max-w-[100vw] mt-20 lg:mt-0 mb-20'>
        <div
          className='project-container lg:h-screen '
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-offset='450'
          data-aos-easing='ease'
          data-aos-delay='700'
        >
          <div className='project-text flex flex-col w-full items-start justify-center h-[50%] lg:h-full lg:w-[50%] px-3 lg:pl-32'>
            <h1 className='text-[#ffffff] flex justify-center md:justify-start w-full  text-6xl lg:text-[5rem] mb-5 lg:mb-28'>
              ONIGIRI e-commerce
            </h1>
            <p className='text-[#ffffff] text-xl pb-5'>
              <small className='text-pinkFont text-2xl'>PROJECT CONCEPT</small>
              <br />
              E-commerce website created to learn about SSR with next.js.
              <br /> The site allows you to create accounts, make purchases and
              pay with paypal. <br /> For styling I used TailwindCSS which is
              currently my favorite css framework. Data about users accounts and
              orders history I storage on MongoDB Atlas. Project is of course
              mobile friendly.
            </p>
            <small className='text-pinkFont text-2xl'>TECH STACK</small>
            <ul className='text-[#ffffff] columns-2 text-xl pb-5 list-disc ml-2'>
              <li>Next.js</li>
              <li>mongoDB</li>
              <li>TailwindCSS</li>
              <li>json Web Token</li>
              <li>react-paypal</li>
              <li>js-cookie</li>
              <li>bcryptjs</li>
              <li>axios</li>
            </ul>
            <br />
            <a
              href='https://github.com/kkuczniak/ONIGIRI'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoLogoGithub className='pr-2 w-9 h-9' name='logo-github' /> VIEW
              REPO
            </a>
            <br />
            <a
              href='https://nextonigiri.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoCheckmarkCircleOutline
                className='pr-2 w-9 h-9'
                name='checkmark-circle-outline'
              />
              LIVE DEMO
            </a>
          </div>
          <div className='mt-5 lg:mt-0 img-container flex w-full items-center justify-center lg:w-[50%]'>
            <Image src='/onigiri.webp' alt='onigiri' width='700' height='500' />
          </div>
        </div>
        <div
          className='project-container lg:h-screen '
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-offset='450'
          data-aos-easing='ease'
          data-aos-delay='700'
        >
          <div className='project-text flex flex-col w-full items-start justify-center h-[50%] lg:h-full lg:w-[50%] px-3 lg:pl-32'>
            <h1 className='text-[#ffffff] flex justify-center md:justify-start w-full  text-6xl lg:text-[5rem] mb-5 lg:mb-24'>
              Game Vite
            </h1>
            <p className='text-salmonFont italic text-2xl pb-5 underline'>
              NOT READY YET
            </p>
            <p className='text-[#ffffff] text-xl pb-5'>
              <small className='text-pinkFont text-2xl'>PROJECT CONCEPT</small>
              <br />
              MERN Stack Project with TS and Vite.
              <br /> A gaming blog that allows users to log in and add posts.
              Design strongly inspired by Cyberpunk 2077. Website created to
              learn typescript and check how vite works.
            </p>
            <small className='text-pinkFont text-2xl'>TECH STACK</small>
            <ul className='text-[#ffffff] columns-2 text-xl pb-5 list-disc ml-2'>
              <li>Vite</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Firebase</li>
              <li>SCSS</li>
              <li>CSS Modules</li>
              <li>MongoDB</li>
            </ul>
            <br />
            <a
              href='https://github.com/kkuczniak/vite-blog'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoLogoGithub className='pr-2 w-9 h-9' name='logo-github' /> VIEW
              REPO
            </a>
            <br />
            {/* <a
              href='https://movie-web-sigma.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoCheckmarkCircleOutline
                className='pr-2 w-9 h-9'
                name='checkmark-circle-outline'
              />
              LIVE DEMO
            </a> */}
          </div>
          <div className='mt-5 lg:mt-0 img-container flex w-full items-center justify-center lg:w-[50%]'>
            <Image src='/blogVite.webp' alt='blog' width='700' height='500' />
          </div>
        </div>
        <div
          className='project-container lg:h-screen '
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-offset='450'
          data-aos-easing='ease'
          data-aos-delay='700'
        >
          <div className='project-text flex flex-col w-full items-start justify-center h-[50%] lg:h-full lg:w-[50%] px-3 lg:pl-32'>
            <h1 className='text-[#ffffff] flex justify-center md:justify-start w-full  text-6xl lg:text-[5rem] mb-5 lg:mb-28'>
              BookGarden
            </h1>
            <p className='text-[#ffffff] text-xl pb-5'>
              <small className='text-pinkFont text-2xl'>PROJECT CONCEPT</small>
              <br />
              Ebook reading website. this site uses the gutenberg project
              containing a huge database of free ebooks. The user can download
              formats to e-book readers or visit the website with the online
              version and add books to favorites.
            </p>
            <small className='text-pinkFont text-2xl'>TECH STACK</small>
            <ul className='text-[#ffffff] columns-2 text-xl pb-5 list-disc ml-2'>
              <li>Next.js</li>
              <li>Context API</li>
              <li>TailwindCSS</li>
              <li>js-cookie</li>
            </ul>
            <br />
            <a
              href='https://github.com/kkuczniak/bookgarden-reader'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoLogoGithub className='pr-2 w-9 h-9' name='logo-github' /> VIEW
              REPO
            </a>
            <br />
            <a
              href='https://bookgarden-reader.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoCheckmarkCircleOutline
                className='pr-2 w-9 h-9'
                name='checkmark-circle-outline'
              />
              LIVE DEMO
            </a>
          </div>
          <div className='mt-5 lg:mt-0 img-container flex w-full items-center justify-center lg:w-[50%]'>
            <Image
              src='/bookgarden.webp'
              alt='bookgarden'
              width='700'
              height='500'
            />
          </div>
        </div>

        <div
          className='project-container lg:h-screen '
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-offset='450'
          data-aos-easing='ease'
          data-aos-delay='700'
        >
          <div className='project-text flex flex-col w-full items-start justify-center h-[50%] lg:h-full lg:w-[50%] px-3 lg:pl-32'>
            <h1 className='text-[#ffffff] flex justify-center md:justify-start w-full  text-6xl lg:text-[5rem] mb-5 lg:mb-28'>
              SPA HOTEL
            </h1>
            <p className='text-[#ffffff] text-xl pb-5'>
              <small className='text-pinkFont text-2xl'>PROJECT CONCEPT</small>
              <br />
              Spa Hotel website created to learn about gatsby JS,
              <br /> react-hook-forms and to check if framer-motion <br /> is as
              cool as they say about it
            </p>
            <small className='text-pinkFont text-2xl'>TECH STACK</small>
            <ul className='text-[#ffffff] columns-2 text-xl pb-5 list-disc ml-2'>
              <li>Gatsby.js</li>
              <li>framer-motion</li>
              <li>react-hook-form</li>
              <li>styled-components</li>
            </ul>
            <br />
            <a
              href='https://github.com/kkuczniak/WILSON-SPA-website'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoLogoGithub className='pr-2 w-9 h-9' name='logo-github' /> VIEW
              REPO
            </a>
            <br />
            <a
              href='https://wilsonspawebsitemaster.gatsbyjs.io/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoCheckmarkCircleOutline
                className='pr-2 w-9 h-9'
                name='checkmark-circle-outline'
              />
              LIVE DEMO
            </a>
          </div>
          <div className='mt-5 lg:mt-0 img-container flex w-full items-center justify-center lg:w-[50%]'>
            <Image
              src='/wilsonSPA.webp'
              alt='WILSON SPA'
              width='700'
              height='500'
            />
          </div>
        </div>
        <div
          className='project-container lg:h-screen '
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-offset='450'
          data-aos-easing='ease'
          data-aos-delay='700'
        >
          <div className='project-text flex flex-col w-full items-start justify-center h-[50%] lg:h-full lg:w-[50%] px-3 lg:pl-32'>
            <h1 className='text-[#ffffff] flex justify-center md:justify-start w-full  text-6xl lg:text-[5rem] mb-5 lg:mb-28'>
              Brewery Blog CMS
            </h1>
            <p className='text-[#ffffff] text-xl pb-5'>
              <small className='text-pinkFont text-2xl'>PROJECT CONCEPT</small>
              <br />
              Headless CMS website.
              <br /> User can create posts about the world of beer <br /> with
              easy use of admin panel
            </p>
            <small className='text-pinkFont text-2xl'>TECH STACK</small>
            <ul className='text-[#ffffff] columns-2 text-xl pb-5 list-disc ml-2'>
              <li>react</li>
              <li>graphql</li>
              <li>apollo</li>
              <li>strapi</li>
              <li>react-router</li>
            </ul>
            <br />
            <a
              href='https://github.com/kkuczniak/brewery-posting'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoLogoGithub className='pr-2 w-9 h-9' name='logo-github' /> VIEW
              REPO
            </a>
            <br />
          </div>
          <div className='mt-5 lg:mt-0 img-container flex w-full items-center justify-center lg:w-[50%]'>
            <Image
              src='/brewery.webp'
              alt='WILSON SPA'
              width='700'
              height='500'
            />
          </div>
        </div>
        <div
          className='project-container lg:h-screen '
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-offset='450'
          data-aos-easing='ease'
          data-aos-delay='700'
        >
          <div className='project-text flex flex-col w-full items-start justify-center h-[50%] lg:h-full lg:w-[50%] px-3 lg:pl-32'>
            <h1 className='text-[#ffffff] flex justify-center md:justify-start w-full  text-6xl lg:text-[5rem] mb-5 lg:mb-28'>
              WORLD NEWS
            </h1>
            <p className='text-[#ffffff] text-xl pb-5'>
              <small className='text-pinkFont text-2xl'>PROJECT CONCEPT</small>
              <br />
              Landing page app for searching articles from new york time API,
              built with React, hooks, TailwindCSS and deployed on firebase.
            </p>
            <small className='text-pinkFont text-2xl'>TECH STACK</small>
            <ul className='text-[#ffffff] columns-2 text-xl pb-5 list-disc ml-2'>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>firebase</li>
            </ul>
            <br />
            <a
              href='https://github.com/kkuczniak/nyt-news'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoLogoGithub className='pr-2 w-9 h-9' name='logo-github' /> VIEW
              REPO
            </a>
            <br />
            <a
              href='https://nyt-news-app.web.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pinkFont h-10 w-36 flex flex-row items-center justify-center'
            >
              <IoCheckmarkCircleOutline
                className='pr-2 w-9 h-9'
                name='checkmark-circle-outline'
              />
              LIVE DEMO
            </a>
          </div>
          <div className='mt-5 lg:mt-0 img-container flex w-full items-center justify-center lg:w-[50%]'>
            <Image
              src='/newYorkTimes.webp'
              alt='WILSON SPA'
              width='700'
              height='500'
            />
          </div>
        </div>
      </section>
    </>
  );
}
