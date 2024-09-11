import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

const store = configureStore({
  reducer: () => ({}),
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
};

export default App;
