export function Person({ name, nickName, images }) {
  console.log(name);
  return (
    <div>
      <h4>{name}</h4>
      <h4>{nickName}</h4>
      <img src={images[0].small.url} alt={name} />
    </div>
  );
}
