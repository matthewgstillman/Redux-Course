import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <div className="App">
      <PostForm />
      <Posts />
    </div>
  );
};

export default App;
