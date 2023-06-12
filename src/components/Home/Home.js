export default function Home() {
  return (
    <div className='w-7/8 h-screen grid p-4 grid-cols-2 place-content-center'>
      <div className='h-12 text-lg col-start-1'>Hi, my name is</div>
      <div className='text-6xl decoration-sky-500 underline col-start-1'>
        Christopher Jeong
      </div>
      <div className='text-4xl col-start-1'>Software Engineer</div>
      <div className='w-full h-56 text-lg my-8 col-start-1'>
        I'm a Software Engineer with a Mechanical Engineering/Robotics
        background and a passion for using and developing new technologies.
      </div>
      <div className='w-full hidden md:block col-start-2 row-start-1 row-span-4'>
        <img src={require('../../images/home_image.png')} />
      </div>
    </div>
  );
}
