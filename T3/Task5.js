function Task5(){
    function handleClick(){
        alert('you clicked');
    };
    function handleSubmit(e){
        e.PreventDefault();
        alert('your form submitted');
    };
    function handleChange(event){
        console.log(event.target.value);
    };
    const score = (a)=>{
        alert(`Super ${a}`);
    };
    return(
        <>
            <button onClick={handleClick}>Click me</button>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}></input>
                <input type='submit'></input>
            </form>
            <button onClick={()=>score('sixer')}>Big Hit</button>
        </>
    );
};

export default Task5;