export function Person({ name, nickName = 'ShakeAndBake', images }) {
  console.log(name);
  return (
    <div>
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
      {/*<img src={images[0].small.url} alt={name} />*/}
    </div>
  );
}
