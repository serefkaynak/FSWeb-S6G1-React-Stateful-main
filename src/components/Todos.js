import React from 'react';
import { useState } from 'react';

/*
React'te bileşen stateleri (Redux yok!) kullanılarak bir yapılacaklar listesi (to-do list) oluşturma hakkında çevrimiçi bir öğretici bulun ve uygulayın. Yapılacaklar listesini oluşturabilmeli ve tamamlandı olarak işaretlemek için tek tek yapılacakları çizebilmeliyiz (veya kaldırabilmeliyiz).
*/

export const toDoList = [
  { id: '1', text: 'Learn React', isCompleted: false},
  { id: '2', text: 'Learn Redux', isCompleted: false},
  { id: '3', text: 'Learn React Native', isCompleted: false},
  { id: '4', text: 'Learn GraphQL', isCompleted: false},
  { id: '5', text: 'Learn Apollo', isCompleted: false},
  { id: '6', text: 'Learn React Router', isCompleted: false},
  { id: '7', text: 'Learn React Hooks', isCompleted: false},
];


export default function Todos() {
    const [todos, setTodos] = useState(toDoList);

  const handleToggle = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  const handleAdd = (text) => {
    const newTodo = { id: Date.now().toString(), text, isCompleted: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }

  const handleEdit = (id, text) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log(updatedTodos);
  }




  return (
    <div className='widget-counter container'>
        <h2>Todo Apps</h2>
        <div>
            <input type="text" placeholder="Add Todo" />
                <button onClick={() => handleAdd()}>
                    Add
                </button>
            </div>
        ToDo List
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <input type="text" value={todo.text} onChange={(e) => handleEdit(todo.id, e.target.value)} />
                    <button onClick={() => handleToggle(todo.id)}>
                        {todo.isCompleted ? 'Completed' : 'Not Finished'}
                    </button>
                    <button onClick={() => handleDelete(todo.id)}>
                        Delete
                    </button>
                </div>
            ))}
            <button onClick={() => setTodos([])}>
                Clear All
            </button>
        </div>

    </div>
  );
}
