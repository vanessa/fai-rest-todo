import React from 'react';

import Api from 'utils/api';
import Context from 'utils/context';

const addTodo = (todo, todos, setState) => {
  setState({
    todos: [todo, ...todos],
  });
};

const TodoForm = () => {
  const [value, setValue] = React.useState('');
  const { state, setState } = React.useContext(Context);
  const { todos } = state;

  const handleSubmit = (e) => {
    e && e.preventDefault();
    Api.createTodo({ title: value }).then((data) => {
      addTodo(data, todos, setState);
      // Reseta o campo para o valor inicial
      setValue('');
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="todo-form">
      <input
        name="item"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="O que você deseja fazer?"
      />
      <span className="tip">Pressione Enter para criar seu item.</span>
    </form>
  );
};

export default TodoForm;
