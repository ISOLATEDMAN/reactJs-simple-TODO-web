import React,{ useState } from "react";


function TodoList() {

    let task = ['EatBreakfast','shower'];
    const [tasks,setTasks] = useState(task);
    const [newTask,setNewTasks] = useState('');
    
    function handleInputChange(event){
        setNewTasks(event.target.value);
    
    }
    
    function addTask(){
        if(newTask.trim()!== ''){
            setTasks(t=>[...t,newTask]);
            setNewTasks(""); 
        }
        
    }
    
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i)=> i !==index);
        setTasks(updatedTasks);
    }
    
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = 
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return <>
    <div className='todoList'>
    <h1 className="title">TODO list</h1>
    <div>
        <input type="text" placeholder="Enter your task" value={newTask} onChange={handleInputChange} >
        </input>
        <button className="Addbutton" onClick={addTask}>add</button>
    </div>

    <ol>
        {tasks.map((task,index)=>{
           return <li className="text" key={index}>
                <span className="text" color="white">{task}</span>
                
                <button className="delete-button" onClick={()=>{
                    deleteTask(index)
                }}>Delete</button>
                <button className="moveup" onClick={() => moveTaskUp(index)}>👆🏻</button>
                <button className="movedown" onClick={() => moveTaskDown(index)}>👇</button>

                </li>
        })}
    </ol>

    </div>
    </>
}

export default TodoList;