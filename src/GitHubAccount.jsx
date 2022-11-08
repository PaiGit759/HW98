export default function GitHubAccount({ login, id, avatarUrl }) {
  return (
    <>
      <h2> Login: {login} </h2>
      <h2> id: {id} </h2>
      <img src={avatarUrl} alt={login} height={200} />
    </>
  );
}
