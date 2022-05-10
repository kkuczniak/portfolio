import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Menu from '../components/Menu';

export default function Contact() {
  const [messageInputs, setMessageInputs] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const updateMessage = (e) => {
    const { name, value } = e.target;
    const messages = { ...messageInputs, [name]: value };
    setMessageInputs(messages);
  };

  const sendEmail = (e) => {
    const button = document.querySelector('#form-button');
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          button.style.backgroundColor = 'lightseagreen';
          button.innerHTML = 'Message Sent!';
          Array.from(document.querySelectorAll('input')).map(
            (el) => (el.value = '')
          );

          setTimeout(() => {
            button.style.backgroundColor = 'lightsalmon';
            button.innerHTML = 'Send';
          }, 3200);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Menu />
      <form
        className='contact-form text-[#fff] flex flex-col items-center justify-center h-screen min-h-[800px]'
        onSubmit={(e) => sendEmail(e)}
        onChange={(e) => updateMessage(e)}
      >
        <h1 className='text-pinkFont text-5xl lg:text-6xl uppercase lg:pb-20'>
          Contact me
        </h1>
        <div className='flex flex-col w-full md:w-2/4 px-5 py-5 max-w-full'>
          <p className='text-4xl  uppercase py-5 flex flex-col md:flex-row justify-between items-end'>
            My name is
            <input
              className='max-w-full text-salmonFont bg-[transparent] outline-none border-0 border-b border-[#808080] focus:border-salmonFont'
              type='text'
              name='user_name'
              required
            />
          </p>

          <p className='text-4xl uppercase py-5 flex flex-col md:flex-row justify-between items-end'>
            Here is my email{' '}
            <input
              className='max-w-full text-salmonFont bg-[transparent] outline-none border-0 border-b border-[#808080] focus:border-salmonFont'
              type='email'
              name='user_email'
              required
            />
          </p>

          <p className='text-4xl  uppercase py-5 flex flex-col md:flex-row justify-between items-end'>
            Let`&apos;`s talk about
            <input
              className='max-w-full text-salmonFont bg-[transparent] outline-none border-0 border-b border-[#808080] focus:border-salmonFont'
              name='message'
              required
            />
          </p>
        </div>

        <button
          id='form-button'
          type='submit'
          value='Send'
          className='lg:mt-5 w-36 h-36 rounded-[50%] bg-salmonFont border-0 text-xl cursor-pointer transform transition duration-300 hover:scale-90'
        >
          Send message
        </button>
      </form>
    </>
  );
}
