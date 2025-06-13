import React, { useContext } from "react";
import T1Uc1 from "./T1Uc1";

function T2Uc2(){
    const {themes,toggle} = useContext(T1Uc1);
    const style = {
      backgroundColor: themes?'black':'white',
      color: themes?'white':'black',
      height:'80px',display:'flex',
      alignItems:'center',displayContent:'center',
      flexDirection:'column'
    };
    return(
      <div style={style}>
          <h2>{themes?'dark':'light'}</h2>
          <button onClick={toggle}>toggle theme</button>
      </div>
  );
};

export default T2Uc2;