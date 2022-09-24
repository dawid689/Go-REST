import React, { useEffect, useState } from "react";
import CommentItem from "../Comments/CommentItem";
import PostItem from "./PostItem";
import classes from "./PostsList.module.css";

const PostsList = (props) => {
  const [commentsForPost, setCommentsForPost] = useState([]); //stan przechowujący dane w postaci umożliwiającej wyświetlenie postów oraz dodanych do nich komentarzy
  const [ready, setReady] = useState(false); //stan kontrolujący czy nastąpiło zakończenie pracy na danych

  const properCommsForEveryPost = () => {
    const allPosts = props.postsList;
    const allComms = props.commentsList;
    const commTable = []; //pusta tablica, w której zostaną umieszczone obiekty przechowujące konkretny post oraz odwołujące się do niego komentarze

    for (let i = 0; i < allPosts.length; i++) {
      // dla wszystkich postów jest tworzona zmienna "onePost", do której zapisywane są własności: key - identyfikator, post - konkretny post, comms - komentarze dla konkretnego postu
      const onePost = {
        key: Math.random(),
        post: allPosts[i], //dla obiektu przechowywanego w zmiennej onePost jest przypisywany dokładnie jeden post dla parametru "post"
        comms: allComms.filter(({ post_id }) => {
          if (post_id === allPosts[i].id) return true;
        }), //metoda "filter" sprawdza dla wszystkich komentarzy czy wartość własności "post_id" danego komentarza jest równa własności "id" posta, dla którego następuje przypisywanie komentarzy, jeśli obydwie własności są równe, dany komentarz jest zapisywany do tablicy przychowywanej dla parametru "comms"
      };
      commTable.push(onePost); //obiekty umieszczone w zmiennej "onePost" są dołączane do tablicy "commTable"
      setCommentsForPost((prev) => {
        prev.commTable = [...commTable];
        return prev;
      }); //ustawianie stanu przechowującego tablicę obiektów umieszczoną w zmiennej "commTable"
    }
    console.log(commentsForPost); //log do kontrolowania poprawności danych
    setReady(true); //ustawienie stanu "ready" na wartość "true" świadczy o finalnej formie danych zapisanych w stanie "commentsForPost"
  };

  useEffect(() => {
    //useEffect renderuje komponent podczas jego tworzenia oraz aktualizacji własności umieszczonych w tablicy zależności
    properCommsForEveryPost();
  }, []); //występuje pusta tablica zależności, ponieważ calem jest, aby funkcja "properCommsForEveryPost" wykonała się tylko raz podczas tworzenia komponentu

  return (
    <ul className={classes.list}>
      <div>
        {commentsForPost &&
          //sprawdzenie czy pobrane dane zapisane w stanie "commentsForPost" są dostępne, pozwala na ich wyświetlenie w momencie, w którym zostały pobrane (bez ryzyka na zbyt szybkie operowanie na pustej zmiennej)
          ready && //stan ready pozwala na operowanie na danych w momencie gdy zostały one ostatecznie umieszczone w wymaganej formie w stanie "commentsForPost"
          commentsForPost.commTable.map((p) => (
            // umieszczenie dostęnych danych w komponencie "PostItem" przy pomocy funkcji .map() -> pozwala na ich wyświetlenie jako elementy komponentu
            <PostItem
              key={p.key}
              id={p.post.id}
              title={p.post.title}
              body={p.post.body}
              userId={p.post.user_id}
              comments={p.comms.map((c, idx) => (
                // umieszczenie dostęnych danych w komponencie "CommentItem" przy pomocy funkcji .map() -> pozwala na ich wyświetlenie jako elementy komponentu, w tym przypadku komponent "CommentItem" jest wyświetlany jako jedna z własności komponentu "PostItem"
                <CommentItem
                  key={idx}
                  name={c.name}
                  body={c.body}
                  email={c.email}
                  id={c.id}
                  postId={c.post_id}
                />
              ))}
            />
          ))}
      </div>
    </ul>
  );
};

export default PostsList;
