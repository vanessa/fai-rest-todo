import React from 'react';

import TodoItem from 'components/item';

const TodoList = ({ items }) => (
  <div className="todo-list">
    <ProgressBar total={items.length} completed={items.filter((i) => i.is_done).length} />
    {items.map((item) => (
      <TodoItem item={item} key={item.id} />
    ))}
  </div>
);

const ProgressBar = ({ total, completed }) => {
  const progress = (completed / total) * 100;
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-inner" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default TodoList;
