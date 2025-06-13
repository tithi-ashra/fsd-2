function Task8(props){
    return(
        <>
            {
                props.item.map((value)=>{
                        return(<>
                                <h1>{value.name}</h1>
                                <img src={value.img}></img>
                                <h4>{value.price}</h4>
                        </>
                    )
                })
            };
        </>
    );
};

export default Task8;