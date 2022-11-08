import "./styles.css";
import useFetch from "./useFetch";
import GitHubAccount from "./GitHubAccount.jsx";

export default function App() {
  const url = "https://api.github.com/users/PaiGit759";
  const data = useFetch(url);
  if (data.type === "User") {
    return (
      <pre>
        <GitHubAccount
          login={data.login}
          id={data.id}
          avatarUrl={data.avatar_url}
        />
      </pre>
    );
  } else {
    return data;
  }
}
