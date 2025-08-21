import './App.css';
import GGimg from './assets/GG.webp';
import GLaptop from './assets/GLaptop.webp';
import bgCode from './assets/bgCodeVideo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

function App() {

  /* VARS */


  
  /* FUNCTIONS */

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'CVtggh.docx'; // Put your CV in public folder
    link.download = 'CVtggh.docx'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const goto = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      console.error(`Element with ID ${id} not found.`);
    }
  }

  

  return (
    <div id='container'>
      <div className='w-screen h-20 fixed top-0 flex justify-between items-center px-4 bg-[#050a30] z-20' id='header'>
      <a onClick={() => {goto('presentation')}}>
        <img src={GGimg} alt="GG Logo" id='logo' className='w-20 left-0' />
        </a>
        <div className='flex items-center gap-4 text-6xl'>
          <div className='relative inline-block'>
            <a onClick={() => {goto('presentation')}}>
              <FontAwesomeIcon icon={fa.faHouse} className='icon' id='homeIcon' />
              <h2 className='itxt hover:text-[#cef3ff] absolute text-[0.25em] text-white font-medium top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-4 py-2 text-center cursor-pointer'>Home</h2>
            </a>
          </div>
          <div className="relative inline-block">
            <a onClick={() => {handleDownload()}}>
              <FontAwesomeIcon icon={fa.faDownload} className='icon' id='downloadIcon' />
            </a>
            <button
              onClick={handleDownload}
              className='itxt hover:text-[#cef3ff] absolute text-[0.25em] text-white font-medium top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-4 py-2 text-center cursor-pointer'
              id='downBtn'
            >
              Download CV
              <FontAwesomeIcon icon={fa.faFileDownload}/>
            </button>
          </div>
          <div className='relative inline-block'>
            <a onClick={() => {goto('projects')}}>
              <FontAwesomeIcon icon={fa.faFolderOpen} className='icon' id='projectsIcon'/>
              <h2 className='itxt hover:text-[#cef3ff] absolute text-[0.25em] text-white font-medium top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-4 py-2 text-center cursor-pointer'>Projects</h2>
            </a>
            
          </div>
          <div className='relative inline-block'>
            <a onClick={() => {goto('skills')}}>
              <FontAwesomeIcon icon={fa.faGraduationCap} className='icon' id='skillsIcon' />
              <h2 className='itxt hover:text-[#cef3ff] absolute text-[0.25em] text-white font-medium top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-4 py-2 text-center cursor-pointer'>Skills</h2>
            </a>
          </div>

          <div className='relative inline-block'>
          <a onClick={() => {goto('contact')}}>
              <FontAwesomeIcon icon={fa.faUser} className='icon mr-3' id='contactIcon'/>
              <h2 className='itxt hover:text-[#cef3ff] absolute text-[0.25em] text-white font-medium top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-4 py-2 text-center cursor-pointer'>Contact</h2>
          </a>
          </div>
        </div>
      </div>
      <div id='presentation' className='w-full h-[100vh] flex justify-between items-center relative'>
        <div id='leftPresentation' className='w-1/2 text-left px-20'>
          <h1 className='text-left text-5xl text-blue-500 font-bold z-10 mb-5'>Gaby García</h1>
          <h2 className='text-left text-3xl text-blue-400 font-semibold z-10'> Programming Technician | Web & Software</h2>
          <h2 className='font-medium mt-10 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus sequi perferendis id dolor totam maxime aspernatur minus magnam? Officiis quibusdam corrupti provident reiciendis consequatur quae consequuntur vitae architecto distinctio facilis.</h2>
        </div>
        <div id='rightPresentation' className='w-1/2 h-full relative'>
          <div className='absolute inset-0'>
            <img src={bgCode} className='w-full h-[95vh] object-cover z-9 ' id='bgCode'/>
          </div>
          <div className='relative h-full flex justify-center items-center'>
            <img id='GLaptop' src={GLaptop} alt="Gaby Logo" className='w-80 h-80 rounded-full border-4 border-blue-500 shadow-lg hover:scale-110 transition-transform z-10' />
          </div>
        </div>
      </div>
      <div className='w-full h-screen border-8 border-amber-500' id="projects">
        <h1 className='text-center text-8xl flex justify-center items-center top[50%] translate-y-[100%]'>Lorem ipsum dolor sit</h1>
      </div>
        <div className='w-full h-screen border-8 border-amber-500' id="skills">
        </div>
          <div className='w-full h-screen border-8 border-amber-500' id="contact">
        </div>
    </div>
  )
}

export default App
