# Technical Test Solution

This is a solution for a technical test using Express.js. The application provides two main routes:

## 1. /products

This route returns an array containing only the products that are currently in stock.

## 2. /price/{user_id}/{nombre_producto}

Some clients in this business have special pricing for certain brands. This route returns the special price for the given client and brand, if available. If the client doesn't have a special price for the brand, the route returns the base price.

## Installation

To install and run this application, follow these steps:

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the server with `npm run dev`.

## Usage

To use the application, send a GET request to the `/products` route to get all products in stock. Send a GET request to the `/price/{user_id}/{nombre_producto}` route to get the special price for a given client and brand.

## Contributing

If you want to contribute to the project, please open an issue or a pull request.

## License

MIT
