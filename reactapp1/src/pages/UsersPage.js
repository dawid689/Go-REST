import React, { useEffect, useState } from "react";
import UsersList from "../components/Users/UsersList";

const UsersPage = () => {
  const [usersJSON, setUsersJSON] = useState([]); // stan przechowujący pobrane dane
  const [isLoading, setIsLoading] = useState(true); //stan logowania

  const fetchUsers = async () => {
    setIsLoading(true);
    const fetchedUsers = await fetch("https://gorest.co.in/public/v1/users"); //pobierany jest obiekt z danymi
    const res = await fetchedUsers.json();
    // console.log(res);
    setUsersJSON(res.data); // jako stan przekazujemy wyrażenie res.data, ponieważ należy dostać się do tablicy "data" z danymi, która jest umieszczona w obiekcie zapisanym w zmiennej "res", aby móc po niej iterować -> w tym do wyświetlenia danych przy przeksztalcaniu ich na komponenty przy pomocy funkcji .map()
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers(); //funkcja "fetchUsers" wykonuje się jeden raz podczas tworzenia komponentu
  }, []); //tablica z zależnościami jest pusta, ponieważ wywołujemy komponent tylko podczas jego tworzenia (kiedy chcemy otworzyć stronę Users)

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
      <h2>Users Page</h2>
      {/* przekazanie pobranych danych zapisanych w stanie usersJSON do komponentu pochodnego (dziecka) "UsersList" */}
      <UsersList usersList={usersJSON} />
    </div>
  );
};

export default UsersPage;
