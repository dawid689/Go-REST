import React, { useEffect, useState } from "react";
import TodosList from "../components/Todos/TodosList";

const TodosPage = () => {
  const [todos, setTodos] = useState(); // stan przechowujący pobrane dane
  const [isLoading, setIsLoading] = useState(true); //stan logowania

  const fetchTodos = async () => {
    setIsLoading(true);
    const fetchedTodos = await fetch("https://gorest.co.in/public/v1/todos"); //pobierany jest obiekt z danymi
    const res = await fetchedTodos.json();
    setTodos(res.data); // jako stan przekazujemy wyrażenie res.data, ponieważ należy dostać się do tablicy "data" z danymi, która jest umieszczona w obiekcie zapisanym w zmiennej "res", aby móc po niej iterować -> w tym do wyświetlenia danych przy przeksztalcaniu ich na komponenty przy pomocy funkcji .map()
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos(); //funkcja "fetchTodos" wykonuje się jeden raz podczas tworzenia komponentu
  }, []); //tablica z zależnościami jest pusta, ponieważ wywołujemy komponent tylko podczas jego tworzenia (kiedy chcemy otworzyć stronę Todos)

  if (isLoading) {
    // na czas pobierania danych na ekranie wyświetli się stosowna informacja
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h2>Todos Page</h2>
      {/* przekazanie pobranych danych zapisanych w stanie usersJSON do komponentu pochodnego (dziecka) "TodosList" */}
      <TodosList todosList={todos} />
    </div>
  );
};

export default TodosPage;
