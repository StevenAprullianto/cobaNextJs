const baseUrl = "https://jsonplaceholder.typicode.com/users";

export default async function users(req, res) {
  const data = await fetch(baseUrl);
  const result = await data.json();

  res.json(result);
}
