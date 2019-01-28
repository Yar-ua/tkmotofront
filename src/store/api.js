export default {
  home: process.env.apiUrl + '/',
  about: process.env.apiUrl + '/about',
  secure: process.env.apiUrl + '/secure',
  sign_up: process.env.apiUrl + '/auth',
  sign_in: process.env.apiUrl + '/auth/sign_in',
  sign_out: process.env.apiUrl + '/auth/sign_out',
  // GET bikes index
  bikesIndex: process.env.apiUrl + '/bikes'
  /* GET /logout */
  // logout: process.env.apiUrl + '/logout',
  /* POST /register */
  // register: process.env.apiUrl + '/register',
  /* GET /products (getting product list) */
  // productsSort: (path) => (process.env.apiUrl + '/products' + path),
  /* POST /products (creating product) */
  // products: process.env.apiUrl + '/products',
  /* GET /products/:id (show product) */
  /* PUT /products/:id (updating product) */
  /* DELETE /products/:id (deleting product) */
  // product: (productId) => (process.env.apiUrl + '/products/#{id}').replace('#{id}', productId),

  /* GET /users (getting users list from index page) */
  // users: process.env.apiUrl + '/users',
  /* GET /users/:id (getting user from show page) */
  // user: (userId) => (process.env.apiUrl + '/users/#{id}').replace('#{id}', userId)
}
