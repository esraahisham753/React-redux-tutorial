import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
  author: "Kristin Hannah",
  title: "The Women: A Novel",
  img: "./images/book-1.jpg"
  },
  {
  author: 'Jonathan Haidt',
  title: 'The Anxious Generation',
  img: 'https://m.media-amazon.com/images/I/81XP4hEXDXL._SY425_.jpg'
  }

]


const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>
});

console.log(newNames);

const BookList = () => {
  return (
    <section className="booklist">
     {names.map((name) => {
        return <h1>{name}</h1>
    })}
    </section>  
  )  
}

const Book = (props) => {
  const { author, title, img} = props;
  console.log(props);

  return (
   <article className="book">
     <img src={img} alt={title} />
     <h2>{title}</h2>
     <h4>{author}</h4>
   </article> 
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
