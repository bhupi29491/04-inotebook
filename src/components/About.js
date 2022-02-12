import React , { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
  const userData = useContext(noteContext);
  useEffect(() => {
    userData.update();
  }, []);
  

  return (
    <>
      <div>
         This is About {userData.state.name} and he works in {userData.state.company}
      </div>
    </>
  )
};

export default About;