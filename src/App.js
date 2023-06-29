import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const inputChangeHandler = (e) => setTodo(e.target.value);
  const buttonClickHandler = (e) => {
    // e.preventDefault();
    const newList = {
      id: Date.now(),
      list: todo,
    };
    setList([...list, newList]);
    setTodo('');
  }

  return (
    <div id="wrap">
      <section id="form">
        <input
          type="text"
          value={todo}
          onChange={inputChangeHandler}
        />
        <button
          onClick={buttonClickHandler}
        >
          추가하기
        </button>
      </section>
      <section id="name">
        <h1>Todo List</h1>
      </section>

      <div className="cards">
        {
          list.map((item) => {
            return (
              <div className="card" key={item.id}>
                <h2>{item.list}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App