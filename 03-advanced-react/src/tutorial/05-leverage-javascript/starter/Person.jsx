import avatar from "../../../assets/default-avatar.svg";

export function Person({ name, nickName = "ShakeAndBake", images }) {
  const image = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img src={image} alt={name} width={100} height={100} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
}
