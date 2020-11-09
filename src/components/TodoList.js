import React from 'react'
import Todo from './Todo'

const TodoList=({todoList,settodoList,filteredTodos})=>
{
    console.log(todoList)
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map(todo=>(
                        <Todo key={todo.id} text={todo.text} settodoList={settodoList} todoList={todoList} todo={todo}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList