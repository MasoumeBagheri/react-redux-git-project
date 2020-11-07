export async function getRepos() {
  let token = "***************************";

  const reposUrlData = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  const data = await reposUrlData.json();
  const reposUrl = data.repos_url;
  const owner = data.login;

  const reposData = await fetch(reposUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  const repos = await reposData.json();

  return { repos, owner };
}
