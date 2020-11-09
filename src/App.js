import logo from './logo.svg';
import Form from './components/Form'
import TodoList from './components/TodoList'
import React,{useState,useEffect} from 'react'
import './App.css';

function App() {
  const [InputText,setInputText]=useState("");
  const [todoList,settodoList]=useState([]);
  const [Status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([])

  useEffect(()=>{
    filteredHandler()
  },[Status,todoList]
  )



  const filteredHandler=()=>
  {
    switch(Status){
      case 'completed':
        setFilteredTodos(todoList.filter(todo=>todo.completed===true))
        break
      case 'uncompleted':
        setFilteredTodos(todoList.filter(todo=>todo.completed===false))
        break
      default:
        setFilteredTodos(todoList)
        break
    }
  }

  return (
    <div className="App">
      <header>
        Srijith todo list
      </header>
      <Form InputText={InputText} todoList={todoList} settodoList={settodoList} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList todoList={todoList} settodoList={settodoList} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
