import { useState } from "react";

const useAboutState  = () => {
    const [skils, setSkils] = useState(true);
    const [education, setEducation] = useState(false);
  
    const educationState = () =>{
      if (skils === true) {
        setEducation(true)
        setSkils(false)
      }else{
        setEducation(false)
        setSkils(true)
      }
    }

    return { skils, education, educationState };
}
 
export default useAboutState  ;