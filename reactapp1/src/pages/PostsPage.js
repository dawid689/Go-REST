import React, { useEffect, useState } from "react";
import PostsList from "../components/Posts/PostsList";

const PostsPage = () => {
  const [posts, setPosts] = useState(); // stan przechowujący pobrane dane - posty
  const [comments, setComments] = useState([]); // stan przechowujący pobrane dane - komentarze
  const [isLoadingPosts, setIsLoadingPosts] = useState(true); //stan logowania - posty
  const [isLoadingComms, setIsLoadingComms] = useState(true); //stan logowania - komentarze

  const fetchPosts = async () => {
    setIsLoadingPosts(true);
    const fetchedPosts = await fetch("https://gorest.co.in/public/v1/posts"); //pobierany jest obiekt z danymi
    const res = await fetchedPosts.json();
    setPosts(res.data); // jako stan przekazujemy wyrażenie res.data, ponieważ należy dostać się do tablicy "data" z danymi, która jest umieszczona w obiekcie zapisanym w zmiennej "res", aby móc po niej iterować -> w tym do wyświetlenia danych przy przeksztalcaniu ich na komponenty przy pomocy funkcji .map()
    setIsLoadingPosts(false);
  };

  const fetchComments = async () => {
    setIsLoadingComms(true);
    const fetchedComments = await fetch(
      "https://gorest.co.in/public/v1/comments"
    ); //pobierany jest obiekt z danymi
    const res = await fetchedComments.json();
    setComments(res.data);
    // jako stan przekazujemy wyrażenie res.data, ponieważ należy dostać się do tablicy "data" z danymi, która jest umieszczona w obiekcie zapisanym w zmiennej "res", aby móc po niej iterować -> w tym do wyświetlenia danych przy przeksztalcaniu ich na komponenty przy pomocy funkcji .map()
    setIsLoadingComms(false);
  };

  useEffect(() => {
    //funkcje "fetchPosts" i "fetchComments" wykonuje się jeden raz podczas tworzenia komponentu
    fetchPosts();
    fetchComments();
  }, []); //tablica z zależnościami jest pusta, ponieważ wywołujemy komponent tylko podczas jego tworzenia (kiedy chcemy otworzyć stronę Posts)

  if (isLoadingPosts || isLoadingComms) {
    // na czas pobierania danych na ekranie wyświetli się stosowna informacja
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h2>Posts Page</h2>
      {/* przekazanie pobranych danych zapisanych w stanie usersJSON do komponentu pochodnego (dziecka) "PostsList" */}
      <PostsList postsList={posts} commentsList={comments} />
    </div>
  );
};

export default PostsPage;
