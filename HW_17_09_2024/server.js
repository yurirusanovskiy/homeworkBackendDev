const http = require("http");
const PORT = 3000;

// Get all products
async function fetchAllProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all products:', error);
    return { error: 'Error fetching all products' };
  }
}

// Get product by ID
async function fetchProductById(id) {
  try {
    if (!isNaN(Number(id))) {
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
    console.error('Error fetching product by ID:', error);
    return { error: 'Error fetching product by ID' };
  }
}

// Create Server
const server = http.createServer(async (req, res) => {
  console.log("Server request received.");
  console.log(`URL: ${req.url}, Method: ${req.method}`);

  res.setHeader('Content-Type', 'application/json');

  const urlParts = req.url.split('/');
  const id = urlParts[1] || "";

  let data;

  if (id === "") {
    data = await fetchAllProducts();
  } else {
    data = await fetchProductById(id);
  }

  res.statusCode = 200;

  if (data.error) {
    res.statusCode = 400;
    if (data.error.includes('not found')) res.statusCode = 404;
  }

  res.end(JSON.stringify(data));
});

// Start Server
server.listen(PORT, '127.0.0.1', (err) => {
  if (err) {
    console.log('Error starting server:', err);
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});
