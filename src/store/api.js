export default {
  sign_up: process.env.apiUrl + '/auth',
  sign_in: process.env.apiUrl + '/auth/sign_in',
  sign_out: process.env.apiUrl + '/auth/sign_out',

  home: process.env.apiUrl + '/',
  about: process.env.apiUrl + '/about',
  secure: process.env.apiUrl + '/secure',

  // GET /bikes (index bikes)
  // POST /bikes (create bike)
  bikes: process.env.apiUrl + '/bikes',
  // GET /bike/:id (show bike)
  // PUT /bike/:id (update bike)
  // DELETE /bike/:id (delete bike)
  bike: (bikeId) => (process.env.apiUrl + '/bikes/#{id}').replace('#{id}', bikeId)
}
