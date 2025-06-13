import React, { useState, createContext } from "react";
import T2Uc2 from './T2Uc2';

const ThemeContext = createContext();
function T1Uc1() {
  const [theme, setTheme] = useState(false);
  function toggle(){
    setTheme((prev)=>!prev);
  }
  const value = {theme,toggle};
  return (
    <ThemeContext.Provider value={value}>
      <T2Uc2 />
    </ThemeContext.Provider>
  );
};

export default T1Uc1;
export {ThemeContext};