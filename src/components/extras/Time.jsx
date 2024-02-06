import React, { useEffect, useState } from 'react'

const Time = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
      const time = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(time);
  }, []);

  return (
    <div className='mb-6'>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default Time