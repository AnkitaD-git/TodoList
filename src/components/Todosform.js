import React, {useState} from 'react'

const Todosform = ({addTodos}) => {

  const [Value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault();

    if(Value!==''){
      addTodos(Value)
      setValue("")
    }
 
  }
  
  return (
   <form className='TodoForm' onSubmit={handleSubmit}>
   <input type="text" className='todo-input' placeholder='What is the task today?' value={Value} onChange={(e) => setValue(e.target.value)}/>
   <button type="submit" className='todo-btn'>Add</button>
   </form>
  )
}

export default Todosform
