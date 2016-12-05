import _ from 'lodash';

const compile = (config, allBits, hook, property) => {
  const func = _.flow([
    (bits) => _.filter(bits, b => b[hook]),
    (bits) => _.flatMap(bits, b => b[hook](config)),
  ]);
  config[property] = func(allBits);

  return config;
};

export default (bits = []) => {
  _.flow([
    (config) => compile(config, bits, 'initializeDatabase', 'database'),
    (config) => compile(config, bits, 'loadSchema', 'schema'),
    (config) => compile(config, bits, 'loadRoutes', 'routes'),
    (config) => compile(config, bits, 'initializeServer', 'server'),
  ])({});
};
