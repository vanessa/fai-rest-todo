import React from 'react';

import TodoList from 'components/list';
import TodoForm from 'components/form';

const MOCK_ITEMS = [
  { id: 1, title: 'earum aspernatur quod', is_done: false },
  { id: 2, title: 'dolorem voluptatem voluptatum', is_done: true },
  { id: 3, title: 'sed labore iusto', is_done: false, tags: [{ id: 1, title: 'importante' }] },
  { id: 4, title: 'saepe voluptas neque', is_done: true, tags: [{ id: 2, title: 'comprar' }] },
];

const Home = () => {

  React.useEffect(() => {
    console.log('TODO: Puxar do backend');
  }, [])

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
      <TodoList items={MOCK_ITEMS} />
    </div>
  );
};

export default Home;
