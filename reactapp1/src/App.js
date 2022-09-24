import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import PostsPage from "./pages/PostsPage";
import TodosPage from "./pages/TodosPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Routing zastosowany w celu uzyskania możliwości wyświetlania oraz dokonania zmiany wyświetlanej podstrony. */}
        {/* path - ścieżka url do danej podstrony */}
        {/* element - komponent wyświetlany na danej podstronie */}
        <Route path="posts" element={<PostsPage />}></Route>
        <Route path="todos" element={<TodosPage />}></Route>
        <Route path="/" element={<UsersPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
