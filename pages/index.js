import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../components/Menu';

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <Menu />
      <main className=' w-full flex flex-col justify-center items-center'>
        <header>
          <>
            <div
              className='about'
              id='about'
              data-aos='fade-up'
              data-aos-duration='1500'
              data-aos-offset='450'
              data-aos-easing='ease'
              data-aos-delay='700'
            >
              <p className='lg:text-6xl text-3xl px-5 w-full lg:w-5/6 '>
                <span className='text-salmonFont italic'>Hi! </span> My name is
                <span className='text-salmonFont italic'> Kordian</span> and I
                am a self taught frontend developer.
              </p>
            </div>

            <div
              className='about'
              id='about'
              data-aos='fade-up'
              data-aos-duration='1500'
              data-aos-offset='250'
              data-aos-easing='ease'
            >
              <p className='lg:text-6xl text-3xl px-5 w-full lg:w-5/6'>
                I am currently learning{' '}
                <span className='text-salmonFont italic'>React</span> with{' '}
                <span className='text-salmonFont'>TypeScript</span> and I am
                focusing on expanding my
                <span className='text-salmonFont italic'> frontend</span>{' '}
                skills. In the future, I would also like to develop in 3d
                animation <span className='text-salmonFont'>(three.js)</span>{' '}
                and mobile programming. Check out my{' '}
                <span className='text-salmonFont italic'>projects</span>.
              </p>
            </div>
          </>
        </header>
      </main>
    </div>
  );
}
