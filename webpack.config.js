module.exports = function(env) {
  if (typeof env === 'undefined') {
    env = 'ava';
  }
  return require(`./webpack.${env}.js`);
};
