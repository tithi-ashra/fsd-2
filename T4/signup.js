import React,{useState} from "react";
import axios from 'axios';

function Signup(){
    const [username, setUsername] = useState("");
    const hs = async(e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/signup', {username});
            alert('user signup successfully'+username);
            setUsername('');
        }
        catch(err){
            console.log(err);
            alert('An error occurred')
        }
    };
    return(
        <>
            <form method="post" onSubmit={hs}>
                name:<input type="text" value={username} onChange={e=>{setUsername(e.target.value)}}></input>
                <button type="submit">Signup</button>
            </form>
        </>
    )
}

export default Signup;