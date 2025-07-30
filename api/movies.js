export default async function handler(req, res) {
  const { s } = req.query;
  const apiKey = "1d0fa2bd";
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(s)}`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}