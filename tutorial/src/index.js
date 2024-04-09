import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
  author: "Kristin Hannah",
  title: "The Women: A Novel",
  img: "./images/book-1.jpg",
  id: 1
  },
  {
  author: 'Jonathan Haidt',
  title: 'The Anxious Generation',
  img: 'https://m.media-amazon.com/images/I/81XP4hEXDXL._SY425_.jpg',
  id: 2
  }

];

const BookList = () => {
  return (
    <section className="booklist">
     <EventExample />
     {
      books.map((book) => {
        console.log(book);

        return <Book {...book} key={book.id}/>
      })
     }
    </section>  
  )  
}

const EventExample = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };

  const handleButtonClick = () => {
    alert('handle button click');
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input type="text" name="eventexample" style={{margin: '1rem 0'}} onChange={handleFormInput} />
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  )
}

const Book = (props) => {
  const { author, title, img} = props;

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
