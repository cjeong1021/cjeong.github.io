import 'flowbite';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div class='w-1/5' aria-label='Sidebar'>
      <div class='flex flex-col space-between overflow-y-auto h-screen py-4 px-3 rounded'>
        <ul class='space-y-4'>
          <li>
            <p class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg'>
              <Link to='/'>
                <img src={require('../../images/logo.jpg')} alt='logo' />
              </Link>
            </p>
          </li>
          <Link to='/aboutme'>
            <li>
              <a
                href=''
                class='flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 transition hover:translate-x-2 hover:border-b-2 hover:border-black duration-300'
              >
                <img
                  src={require('../../images/initials.png')}
                  aria-hidden='true'
                  class='w-6 aspect-auto text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                ></img>
                <span class='ml-3'>About Me</span>
              </a>
            </li>
          </Link>
          <Link to='/engineering'>
            <li>
              <a
                href=''
                class='flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 transition hover:translate-x-2 hover:border-b-2 hover:border-black duration-300'
              >
                <img
                  src={require('../../images/robotics.png')}
                  aria-hidden='true'
                  class='w-6 h-6 aspect-auto text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                ></img>
                <span class='ml-3'>Robotics Projects</span>
              </a>
            </li>
          </Link>
          <Link to='/software'>
            <li>
              <a
                href='/portfolio/software'
                class='flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 transition hover:translate-x-2 hover:border-b-2 hover:border-black duration-300'
              >
                <img
                  src={require('../../images/software.png')}
                  aria-hidden='true'
                  class='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                ></img>
                <span class='ml-3'>Software Projects</span>
              </a>
            </li>
          </Link>
          <Link to='/contact'>
            <li>
              <a
                href=''
                class='flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 transition hover:translate-x-2 hover:border-b-2 hover:border-black duration-300'
              >
                <img
                  src={require('../../images/email.png')}
                  aria-hidden='true'
                  class='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                ></img>
                <span class='ml-3'>Contact</span>
              </a>
            </li>
          </Link>
          <li>
            <a
              href='https://github.com/cjeong1021'
              target='_blank'
              rel='noopener noreferrer'
              class='flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 transition hover:translate-x-2 hover:border-b-2 hover:border-black duration-300'
            >
              <img
                src={require('../../images/github.png')}
                aria-hidden='true'
                class='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              ></img>
              <span class='ml-3'>Github</span>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/christopher-jeong/'
              target='_blank'
              rel='noopener noreferrer'
              class='flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 transition hover:translate-x-2 hover:border-b-2 hover:border-black duration-300'
            >
              <img
                src={require('../../images/linkedin.png')}
                aria-hidden='true'
                class='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              ></img>
              <span class='ml-3'>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href='https://drive.google.com/file/d/1yTAoPS1q_FYmwiGG2bffgjP7g4eq-1ZN/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              class='flex items-center p-2 text-base font-normal text-gray-900 hover:bg-gray-100 transition hover:translate-x-2 hover:border-b-2 hover:border-black duration-300'
            >
              <img
                src={require('../../images/resume.webp')}
                aria-hidden='true'
                class='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              ></img>
              <span class='ml-3'>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
