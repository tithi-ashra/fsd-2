function Add(){
    return(
        <h1>sum of 5 and 4 is : {5+4}</h1>
    );
};

function Sub(){
    return(
        <h1>sub of 5 and 2 is : {5-2}</h1>
    );
};

function Task2(){
    return(
        <>
            <Add />
            <Sub />
        </>
    );
};

export default Task2;