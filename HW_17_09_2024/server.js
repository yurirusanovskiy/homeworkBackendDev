const http = require("http");
const PORT = 3000;

async function fetchData(id = "") {
  try {
    if (id === "") {

      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data;
    } else if (!isNaN(id)) {

      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (response.status === 404) {
        return { error: `Product with id ${id} not found` };
      }
      const data = await response.json();
      return data;
    } else {
      return { error: 'Invalid ID format' };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: 'Error fetching data' };
  }
}

const server = http.createServer(async (req, res) => {
  console.log("Server request");
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'application/json');

  const urlParts = req.url.split('/');
  const id = urlParts[1];

  const data = await fetchData(id);

  if (data.error) {
    res.statusCode = id === "" ? 500 : 400;
    if (data.error.includes('not found')) res.statusCode = 404;
  }

  res.end(JSON.stringify(data));
});

server.listen(PORT, '127.0.0.1', (err) => {
  err ? console.log(err) : console.log(`Listening on port ${PORT}`);
});
