const ErrorExample = () => {
  let count = 0;

  const increaseCounter = () => {
    count += 1;
    console.log(count);
  }

  return (
   <section>
    <h2>{count}</h2>
    <button onClick={increaseCounter} className="btn">Increase Counter</button>
   </section>
  );
};

export default ErrorExample;
