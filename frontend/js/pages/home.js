import React from 'react';

import TodoList from 'components/list';
import TodoForm from 'components/form';

import Api from 'utils/api';
import Context from 'utils/context';

const Home = () => {
  const { state, setState } = React.useContext(Context);
  const { todos } = state

  React.useEffect(() => {
    Api.getTodos().then((data) => setState({ todos: data }));
  }, []);

  return (
    <div className="page-wrapper">
      <p>
        Projeto exemplo para o treinamento de integração com Django e React das Férias de Alto
        Impacto 2020.
      </p>
      <a
        className="link"
        href="https://github.com/vanessa/fai-rest-todo"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <TodoForm />
      <TodoList items={todos} />
    </div>
  );
};

export default Home;
