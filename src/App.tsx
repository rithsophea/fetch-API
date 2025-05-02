import React from "react";
import Products from "./pages/products";
import SinglePost from "./pages/productdetail";
import Users from "./pages/getalluser";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Products />
      <hr />
      <SinglePost id={1} />
      <hr />
      <Users />
    </div>
  );
}

export default App;
