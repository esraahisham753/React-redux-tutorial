import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {books} from "./books";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);

        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
