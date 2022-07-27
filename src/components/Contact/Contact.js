export default function Contact() {
  return (
    <div className='w-3/4 h-screen grid place-content-center'>
      <div className='text-6xl decoration-sky-500 underline col-start-1'>
        Contact Me
      </div>
      <div className='w-full text-lg my-8 col-start-1'>
        I am always interested and open to new opportunities. If you have any
        questions, interested in the things I've done or just want to say hi,
        don't hesitate to send me a message!
      </div>
      <div className='flex flex-row space-between items-center w-64'>
        <a
          href='https://www.linkedin.com/in/christopher-jeong/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:bg-gray-100'
        >
          <img
            src={require('../../images/linkedin.png')}
            alt='Github Logo'
            class='h-12 hover:bg-gray-200 rounded-lg py-3 px-3'
          />
        </a>
        <a href='mailto:cjeong1021@gmail.com' className='hover:bg-gray-100'>
          <img
            src={require('../../images/email.png')}
            alt='Github Logo'
            class='h-12 hover:bg-gray-200 rounded-lg py-1 px-1'
          />
        </a>
      </div>
    </div>
  );
}
