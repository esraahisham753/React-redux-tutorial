import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>  
  )  
}

const Book = () => {
  return (
   <article>
     <Image />
     <Title />
     <Author />
   </article> 
  )
}

const Image = () => <img src="https://m.media-amazon.com/images/I/913C+MR3S5L._SY425_.jpg" alt="The Women: A Novel" />
const Title = () => <h2>The Women: A Novel </h2>
const Author = () => <h4>Kristin Hannah</h4>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
