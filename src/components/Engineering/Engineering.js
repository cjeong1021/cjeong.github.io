export default function Engineering() {
  return (
    <div className='flex flex-col overflow-scroll p-4 md:overflow-hidden'>
      <div className='my-6 md:grid md:grid-cols-2'>
        <div className='text-2xl decoration-sky-500 underline col-start-1'>
          Integrating Robotics into Cooper Union Undergraduate Curriculum
        </div>
        <div className='text-lg my-6 col-start-1'>
          The senior project of my undergraduate Mechanical Engineering Degree.
          Adapted and tested a Simulink simulation so that students could
          experience the newly added drone system in their undergraduate
          courses.
        </div>
        <div>
          <a
            href='https://sway.office.com/GMlhwfWrHz9BnCoN?ref=Link'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Presentation
          </a>
          <span> </span>/<span> </span>
          <a
            href='https://docs.google.com/document/u/2/d/e/2PACX-1vQy7GCqKJplXzQygWkODTmC_0_lpm1MAPo_DtDPaGxLGgrVrwRrcY_s-4Ac5jXg5w/pub?fbclid=IwAR3pPSMBdbzI1vkXSEEzSQHNTKxqsECMQE4Uv1VopHm-MkHZ47cFJeBe4B8'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Paper
          </a>
        </div>
        <div>
          <ul className='flex flex-row flex-wrap justify-between text-m font-semibold'>
            <li>Python</li>
            <li>Robot Operating System</li>
            <li>MATLAB/Simulink</li>
          </ul>
        </div>
        <div className='hidden md:block col-start-2 row-start-1 row-span-3 justify-self-center'>
          <img
            src={require('../../images/drone_project.jpeg')}
            className='h-64'
          />
        </div>
      </div>
      <div className='my-6 md:grid md:grid-cols-2'>
        <div className='text-2xl decoration-sky-500 underline col-start-1'>
          Mobile Autonomous Robots
        </div>
        <div className='text-lg my-6 col-start-1'>
          Designed and prototyped a robot that utilized sensors to make
          decisions based on information about it's surroundings.
        </div>
        <div className=''>
          <a
            href='https://docs.google.com/document/d/e/2PACX-1vR8rLGQUh1UDOrpqe7mFwt9cnEkoro7FLewujKC8H4YKVDs6ESVlmZdR2k5cX6FLTa6wfSA1deWcPFX/pub?fbclid=IwAR3WcNqhF6I6H_9kPxSDBn2yJXXuu7V9hEVgsJ6S10QoOwP6gMxPh9pkg8I'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Paper
          </a>
        </div>
        <div>
          <ul className='flex flex-row flex-wrap justify-around text-m font-semibold'>
            <li>Arduino</li>
            <li>Solidworks</li>
            <li>IR/Sonar Sensors</li>
          </ul>
        </div>
        <div className='hidden md:block col-start-2 row-start-1 row-span-3 justify-self-center'>
          <img src={require('../../images/robot.png')} className='h-64' />
        </div>
      </div>
    </div>
  );
}
