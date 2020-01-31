import React from 'react';

import { ReactSVG } from 'react-svg';
import classnames from 'classnames';

const TodoItem = ({ item }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [isDone, setDone] = React.useState(item.is_done);

  const handleClick = () => {
    // TODO: Marcar ou desmarcar como completo no backend
    // O código abaixo é só para "simular" um backend
    setLoading(true);
    setTimeout(() => {
      setDone(!isDone);
      setLoading(false)
    }, 500);
  };

  return (
    <div
      className={classnames('todo-item', { 'is-loading': isLoading })}
      onClick={() => handleClick()}
    >
      <div className={classnames('todo-btn', { 'is-done': isDone })}>
        {isDone && <ReactSVG className="icon" src="/static/images/check.svg" />}
      </div>
      <span title={item.title}>
        {item.title} <TodoItemTags tags={item.tags} />
      </span>
    </div>
  );
};

const TodoItemTags = ({ tags }) => {
  if (!tags || !tags.length) return null;
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag.id} className="tag">
          {tag.title}
        </span>
      ))}
    </div>
  );
};

export default TodoItem;
