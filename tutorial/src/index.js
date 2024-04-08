import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>  
  )  
}

const Book = () => {
  return (
   <article className="book">
     <img src="./images/book-1.jpg" alt="The Women: A Novel" />
     <h2>The Women: A Novel </h2>
     <h4>Kristin Hannah</h4>
   </article> 
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
