import React, { useState } from 'react'
import style from './newTodo.module.css'
const NewTodo = () => {
 

    const [todo,setTodo] = useState({title:'',desc:''})
    const {title,desc} =todo;

    const handleChange=(event)=>{
        event.preventDefault();
        setTodo((oldTodo)=>{
            return {...oldTodo,[name]:event.target.value}
        })

    }
 const handleSubmit=(event)=>{
    event.preventDefault();
    //console.log(todo);
    props.onAddTodo(todo);
    setTodo({title:'',desc:''})

 }
 
    return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style['form-field']}>
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' name='title' value={title} onChange={handleChange}/>
        </div>

        <div className={style['form-field']}>
            <label htmlFor='title'>Description:</label>
            <textarea type='text' id='desc' name='desc' value={desc} onChange={handleChange}/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo
