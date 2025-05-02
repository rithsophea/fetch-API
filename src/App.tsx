import React from "react";
import Products from "./pages/products";
import SinglePost from "./pages/singepost";
import Users from "./pages/getalluser";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>API Tasks App</h1>
      <Products />
      <hr />
      <SinglePost id={1} />
      <hr />
      <Users />
    </div>
  );
}

export default App;
