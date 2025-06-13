import React, { createContext } from 'react';
import Comp1 from './Comp1';

function Comp() {
    const Num1 = createContext();
    const Num2 = createContext();
    return (
        <div>
            <Num1.Provider value="5">
                <Num2.Provider value='10'>
                    <Comp1 />
                </Num2.Provider>
            </Num1.Provider>
        </div>
  );
};

export default Comp;
export {Num1,Num2}