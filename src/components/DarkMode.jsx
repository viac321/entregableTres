import { useState, useEffect } from 'react'
const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);
    const handleToggleTheme = () => {
     setDarkMode(!darkMode);
      
    };

   useEffect(() => {
     if (darkMode) {
        document.documentElement.classList.add('dark');
     } else {
        document.documentElement.classList.remove('dark');
     }
    }, [darkMode])
   


  return (
    <div className='flex justify-center'>
        <button onClick={handleToggleTheme}>
        <button>
          <img
            className="h-[200px] w-[200px] grid justify-center items-center"
            src="/footer/dog_portal.gif"
            alt="portal dog"
          />
        </button>
        </button>
    </div>
  )
}
export default DarkMode