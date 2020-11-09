import React from 'react'


const Form=({InputText,todoList,settodoList,setInputText,setStatus})=>
{
    const inputhandler=(e)=>
    {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>
    {
        
       e.preventDefault()
        
        settodoList(
            [...todoList,
            {
                text:InputText,
                completed:false,
                id:Math.random()*1000
            }
            ]
        )
        setInputText("");
    }
    const statusHandler=(e)=>
    {
        setStatus(e.target.value)
        console.log(e.target.value)
    }
    return(
        <form className="myForm">
            <input value={InputText} onChange={inputhandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all" selected>All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
        </form>
    )
}

export default Form