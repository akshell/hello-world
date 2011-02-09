require('ak').setup();

exports.main = function (request) {
  return new Response('Hello world!');
};
