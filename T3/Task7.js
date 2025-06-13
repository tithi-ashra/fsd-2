import i1 from './imag1.jpg';
import i2 from './imag2.jpg';

function Task7(){
    const arr = [{id:1,img:i1},{id:2,img:i2}];
    return(
        <>
            {
                arr.map((value)=>{
                    return <img src={value.img}></img>
                })
            }
        </>
    );
};

export default Task7;