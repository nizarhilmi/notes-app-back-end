const path = require('path');
 
const routes = (handler) => [
  {
    method: 'POST',
    path: '/upload/images',
    handler: handler.postUploadImageHandler,
    options: {
      payload: {
        maxBytes: 102100,
        allow: 'multipart/form-data',
        multipart: {output: 'stream'}
      },
    },
  },
  {
    method: 'GET',
    path: '/upload/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'file'),
      },
    },
  },
];
 
module.exports = routes;