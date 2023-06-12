export default function Software() {
  return (
    <div className='flex flex-col p-4 md:p-0 md:overflow-scroll'>
      <div className='my-6 md:grid md:grid-cols-2'>
        <div className='text-2xl decoration-sky-500 underline col-start-1'>
          Chimp Test
        </div>
        <div className='text-lg my-6 col-start-1'>
          A simple web game using vanilla Javascript. The goal is to memorize
          the position of the numbers and click them in order. The farther you
          get, the bigger the grid and the more numbers you need to memorize.
          Compete with your friends to see who can get the highest score!
        </div>
        <div>
          <a
            href='https://github.com/cjeong1021/chimp-test'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Github
          </a>
          <span> </span>/<span> </span>
          <a
            href='https://cjeong1021-chimp-test.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Website
          </a>
        </div>
        <div>
          <ul className='flex flex-row flex-wrap justify-around text-m font-semibold'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className='hidden md:block col-start-2 row-start-1 row-span-3 justify-self-center'>
          <img src={require('../../images/chimptest.png')} className='h-64' />
        </div>
      </div>
      <div className='my-6 md:grid md:grid-cols-2'>
        <div className='text-2xl decoration-sky-500 underline col-start-1'>
          Monster Hunter Wiki
        </div>
        <div className='text-lg my-6 col-start-1'>
          A web app that lets users interface with the <span> </span>
          <a
            href='https://docs.mhw-db.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Monster Hunter World API
          </a>
          . Search information about monsters in the game, find their stats and
          set favorites to save them for later.
        </div>
        <div>
          <a
            href='https://github.com/cjeong1021/monster-hunter-wiki'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Github
          </a>
          <span> </span>/<span> </span>
          <a
            href='https://monsterhunterwiki.surge.sh/'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Website
          </a>
        </div>
        <div>
          <ul className='flex flex-row flex-wrap justify-around text-m font-semibold'>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
          </ul>
        </div>
        <div className='hidden md:block col-start-2 row-start-1 row-span-3 justify-self-center'>
          <img
            src={require('../../images/monsterhunter.png')}
            className='h-64'
          />
        </div>
      </div>
      <div className='my-6 md:grid md:grid-cols-2'>
        <div className='text-2xl decoration-sky-500 underline col-start-1'>
          Petstagram
        </div>
        <div className='text-lg my-6 col-start-1'>
          A web app that was inspired by Instagram. Users can sign up, login and
          post their favorite pet photos, as well as comment on other posts.
          Frontend was built with React and backend was built with NodeJS and
          Express.
        </div>
        <div>
          <a
            href='https://github.com/cjeong1021/Mern-project-frontend'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Frontend Github
          </a>
          <span> </span>/<span> </span>
          <a
            href='https://github.com/cjeong1021/Mern-project-backend'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Backend Github
          </a>
          <span> </span>/<span> </span>
          <a
            href='https://petstagram-sei.surge.sh/'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Website
          </a>
        </div>
        <div>
          <ul className='flex flex-row flex-wrap justify-around text-m font-semibold'>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
          </ul>
        </div>
        <div className='hidden md:block col-start-2 row-start-1 row-span-3 justify-self-center'>
          <img
            src={require('../../images/monsterhunter.png')}
            className='h-64'
          />
      </div>
      <div className='my-6 md:grid md:grid-cols-2'>
        <div className='text-2xl decoration-sky-500 underline col-start-1'>
          Coffee Journal
        </div>
        <div className='text-lg my-6 col-start-1'>
          A web app for taking notes on coffee. Users can sign up, login and
          take notes on their favorite coffees. Keeping track of their favorites
          roasts, brew methods and pictures. Frontend was built with React.
          Backend was built with Django and PostgreSQL with user authentication
          using JWT tokens.
        </div>
        <div>
          <a
            href='https://github.com/cjeong1021/coffee-journal-frontend'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Frontend Github
          </a>
          <span> </span>/<span> </span>
          <a
            href='https://github.com/cjeong1021/coffee-journal-backend'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Backend Github
          </a>
          <span> </span>/<span> </span>
          <a
            href='https://coffee-journal.surge.sh/'
            target='_blank'
            rel='noopener noreferrer'
            className='decoration-1 underline'
          >
            Website
          </a>
        </div>
        <div>
          <ul className='flex flex-row flex-wrap justify-around text-m font-semibold'>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Django</li>
            <li>PostgreSQL</li>
            <li>JWT Auth</li>
          </ul>
        </div>
        <div className='hidden md:block col-start-2 row-start-1 row-span-3 justify-self-center'>
          <img src={require('../../images/petstagram.jpeg')} className='h-64' />
        </div>
      </div>
    </div>
  );
}
