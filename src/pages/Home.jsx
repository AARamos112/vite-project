
import childrenVideo from '../assets/childrenVideo.mp4'


function Home() {

  return (
    <>
    <main className='h-screen w-full bg-gray-600 dark:bg-gray-900 '>
      <div >
        <div className='min-w-full'>
          
        </div>
      <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-8xl text-white bg-blue-300 bg-opacity-50 rounded-xl">
          Welcome to the Mentor Tool!
        </div>
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
          <source src={childrenVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        
  
     

      </div>
    </main>
  </>
  )
}

export default Home