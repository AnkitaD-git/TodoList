import React, {useState} from 'react'

const EditTodoForm= ({editTodo, task}) => {

  const [Value, setValue] = useState(task.task)
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(Value, task.id)
    setValue("")
  }
 
  return (
   <form className='TodoForm' onSubmit={handleSubmit}>
   <input type="text" className='todo-input' placeholder='Update Task' value={Value}  onChange={(e) => setValue(e.target.value)}/>
   <button type="submit" className='todo-btn'>Update</button>
   </form>
  )
}


export default EditTodoForm
