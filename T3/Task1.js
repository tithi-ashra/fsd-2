import srcimg from './img.jpg';

function Task1(){
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return(
        <div>
            <h1 style={{color:'blue',fontSize:'20px',fontStyle:'italic'}}>Hello</h1>
            <ol type='A'>
                <li>apple</li>
                <li>apple</li>
                <li>apple</li>
                <li>apple</li>
                <li>apple</li>
            </ol>
            <img src="logo512.png"></img>
            <img src={srcimg}></img>
            <h5>{date} {time}</h5>
        </div>
    );
};

export default Task1;