import React,{useState} from 'react';

function Us8() {
    const[Task, setTask]= useState("");
    const[Todolist, setTodoList]=useState([]);
    function handleChange(event) {
        setTask(event.target.value);
    };
    function addTask(event) {
        setTodoList([...Todolist,Task]);
    };
    function deleteTask (taskName){
        setTodoList(
        Todolist.filter((task)=>{
            if (task!==taskName){
                return true;
            } 
            else{
                return false;
            }
        }))
    };
    return (
        <div>
            <h1> Enter Task </h1>
            <input onChange={handleChange}/>
            <button onClick={addTask}> Add Task </button>
            {/* Code If do not want to delete Task */}
            {/* {
                Todolist.map((val)=>{return <h1>{val}</h1>});
            }; */}
            {/* If want to add delete Task functionality */}
            {
                Todolist.map((task)=>{
                    return(
                        <div>
                            <h1> {task}</h1>
                            <button onClick={() => deleteTask(task)}>Delete</button>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Us8;