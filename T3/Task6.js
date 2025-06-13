function Task6(){
    const arr = [1,2,3,4,5];
    return(
        <>
            {
                arr.map((value)=>{
                    return <h1>The value is = {value}</h1>
                })
            };
            {
                arr.map((value)=>{
                    return <h1>{value}*5 = {value*5}</h1>
                })
            };
        </>
    );
};

export default Task6;