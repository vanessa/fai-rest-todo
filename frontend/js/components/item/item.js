import React from 'react';

import { ReactSVG } from 'react-svg';
import classnames from 'classnames';

import Context from 'utils/context';
import Api from 'utils/api';

const updateTodo = (todo, todos, setState) => {
  const index = todos.findIndex((t) => t.id === todo.id);
  todos.splice(index, 1, todo);
  setState({
    todos,
  });
};

const TodoItem = ({ item }) => {
  const { state, setState } = React.useContext(Context);
  const [isLoading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    Api.updateTodo(item.id, { is_done: !item.is_done }).then((response) => {
      updateTodo(response, state.todos, setState);
      setLoading(false);
    });
  };

  return (
    <div
      className={classnames('todo-item', { 'is-loading': isLoading })}
      onClick={() => handleClick()}
    >
      <div className={classnames('todo-btn', { 'is-done': item.is_done })}>
        {item.is_done && <ReactSVG className="icon" src="/static/images/check.svg" />}
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
