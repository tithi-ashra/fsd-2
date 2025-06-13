import { useContext } from "react";
import { Num1, Num2 } from "./Comp";

function Comp3(){
    const num1 = useContext(Num1);
    const num2 = useContext(Num2);
    return(
        <>
            <h1>Multiplication of {num1} and {num2} is {num1*num2}</h1>
        </>
    );
};

export default Comp3;