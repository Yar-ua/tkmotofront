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
  // GET, PUT, DELETE /bike/:id (show, update, delete bike)
  bike: (bikeId) => (process.env.apiUrl + '/bikes/#{id}').replace('#{id}', bikeId),
  // GET /bike/id/fuellast (show fuel item with the biggest odometer)
  bikeFuel: (bikeId) => (process.env.apiUrl + '/bikes/#{id}/fuellast').replace('#{id}', bikeId),

  // GET, POST /bikes/:bike_id/fuels (index, create fuels)
  fuels: (bikeId) => (process.env.apiUrl + '/bikes/#{bike_id}' + '/fuels').replace('#{bike_id}', bikeId),
  // PUT, DELETE /bikes/:bike_id/fuels/:id (update, destroy fuel)
  fuel: (bikeId, id) => (process.env.apiUrl + '/bikes/#{bike_id}' + '/fuels/#{id}')
    .replace('#{bike_id}', bikeId).replace('#{id}', id),

  // GET, POST /bikes/:bike_id/repairs (index, create repairs)
  repairs: (bikeId) => (process.env.apiUrl + '/bikes/#{bike_id}' + '/repairs').replace('#{bike_id}', bikeId),
  // PUT, DELETE /bikes/:bike_id/repairs/:id (update, destroy repairs)
  repair: (bikeId, id) => (process.env.apiUrl + '/bikes/#{bike_id}' + '/repairs/#{id}')
    .replace('#{bike_id}', bikeId).replace('#{id}', id),

  // GET, PUT /bikes/:bike_id/config (show, update bike config)
  bikeConfig: (bikeId) => (process.env.apiUrl + '/bikes/#{bike_id}' + '/config').replace('#{bike_id}', bikeId)
}
