const Book = (props) => {
  const { author, title, img, index } = props;

  return (
    <article className="book">
      <div className="book__index"># {index+1}</div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
