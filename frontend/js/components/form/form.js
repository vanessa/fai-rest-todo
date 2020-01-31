import React from 'react';

const TodoForm = () => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e && e.preventDefault();
    console.log(value);
    // Reseta o campo para o valor inicial
    setValue('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="todo-form">
      <input name="item" onChange={(e) => setValue(e.target.value)} value={value} placeholder="O que você deseja fazer?" />
      <span className="tip">Pressione Enter para criar seu item.</span>
    </form>
  );
};

export default TodoForm;
