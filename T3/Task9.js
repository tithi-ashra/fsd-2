function Task9(){
    const arr = [1,2,3,4,3,5,7,3,9];
    var t = arr.map((val)=>{
        if(val>3){
            return(<h2>{val}</h2>);
        }
    });
    console.log(t);
    var t1 = arr.filter((val)=>{
        if(val>3){
            return(<h2>{val}</h2>);
        }
    });
    console.log(t1);
    // var t2 = t1.map((value)=>{
    //     return(<h1>{value}</h1>);
    // });
    return(
        <>
            <div>{t}</div>
            <div>{t1}</div>
            {/* <div>{t2}</div> */}
        </>
    )
};


export default Task9;