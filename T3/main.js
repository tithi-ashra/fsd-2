import React, { createContext } from 'react';
import Uc1 from './Uc1';

function main() {
    const Fname = createContext();
    const Lname = createContext();
    return (
        <div>
            <Fname.Provider value="ABC">
                <Lname.Provider value='XYZ'>
                    <Uc1 />
                </Lname.Provider>
            </Fname.Provider>
        </div>
  );
};

export default main;
export {Fname,Lname};