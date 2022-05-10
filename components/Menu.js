import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();

  return (
    <div className='menu w-full fixed top-0 z-10 h-16 bg-[#121212ab]'>
      <li className='none list-none h-full flex flex-row justify-between items-center lg:mx-64 md:mx-20 mx-5  text-2xl '>
        <Link href='/'>
          <a
            className={`${
              router.pathname == '/' ? 'active' : ''
            } active:border-b`}
          >
            about
          </a>
        </Link>
        <Link href='/projects'>
          <a
            className={`${
              router.pathname == '/projects' ? 'active' : ''
            } active:border-b`}
          >
            projects
          </a>
        </Link>
        <Link href='/contact'>
          <a
            className={`${
              router.pathname == '/contact' ? 'active' : ''
            } active:border-b`}
          >
            contact me
          </a>
        </Link>
      </li>
    </div>
  );
}
