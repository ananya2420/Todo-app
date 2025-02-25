import React, { useState } from "react";
import Todos from "./Todos";
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from './home.module.css'
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from 'uuid';

/*
const dummyTodos = [
  {
    id: 1,
    title: "todo title 1",
    desc: "todo1 description is here",
  },
  {
    id: 2,
    title: "todo title 2",
    desc: "todo2 description is here",
  },
];
*/

const Home = (props) => {
 
 const [todos,setTodos]=useState([])

 const handleAddTodo = (todo) =>{
    //console.log(todo);
    setTodos((prevTodos)=>{
        return [...prevTodos,{id:uuidv4(), todo}]
    })
    console.log(todos)

 }

 const handleRemoveTodo=(id)=>{
    //alert(id);
   
    setTodos((prevTodos)=>{
        const filteredTodos = prevTodos.todos.filtered((todo)=>todo.id===id);

        return filteredTodos;
        
    });

 }
    return (
    <div className={style.container}>  
    <h1 style={{color:'white'}}>Todo app</h1>
    <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
};

export default Home;

