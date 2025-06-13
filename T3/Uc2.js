import { useContext } from "react";
import { Fname, Lname } from "./main";

function Uc2(){
    const firstName = useContext(Fname);
    const lastName = useContext(Lname);
    return(
        <>
            <h1>your name given by dadaji is {firstName}{lastName}</h1>
        </>
    );
};

export default Uc2;