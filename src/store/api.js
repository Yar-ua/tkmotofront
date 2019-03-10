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
  bike: (bikeId) => (process.env.apiUrl + '/bikes/#{id}').replace('#{id}', bikeId),

  // GET, POST /bikes/:bike_id/fuels (index, create fuels)
  fuels: (bikeId) => (process.env.apiUrl + '/bikes/#{bike_id}' + '/fuels').replace('#{bike_id}', bikeId),
  // PUT, DELETE /bikes/:bike_id/fuels/:id (update, destroy fuel)
  fuel: (bikeId, id) => (process.env.apiUrl + '/bikes/#{bike_id}' + '/fuels/#{id}')
    .replace('#{bike_id}', bikeId).replace('#{id}', id)
}
