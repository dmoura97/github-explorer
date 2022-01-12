import { useState, useEffect } from 'react';
import { RepositoryITem } from './RepositoryItem';

import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/dmoura97/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return  <RepositoryITem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}