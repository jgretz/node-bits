import _ from 'lodash';
import mergeSchema from './util/merge_schema';

const compile = (config, allBits, hook, property, post) => {
  const func = _.flow([
    bits => _.filter(bits, b => b[hook]),
    bits => _.flatMap(bits, b => b[hook](config)),
    bits => (post ? post(bits) : bits),
  ]);

  const value = func(allBits);

  if (!value) {
    return config;
  }

  if (property) {
    config[property] = value;
    return config;
  }

  if (_.isArray(value)) {
    const reduced = _.reduce(value, (obj, prop) => ({...obj, ...prop}));
    return {
      ...config,
      ...reduced,
    };
  }

  return {
    ...config,
    ...value,
  };
};

const syncSchema = (config, bits) => {
  const merged = mergeSchema(bits);
  if (config.database) {
    config.database.synchronizeSchema(merged);
  }
  return [merged];
};

export default (bits = []) => {
  _.flow([
    config => compile(config, bits, 'initialize', null),
    config => compile(config, bits, 'initializeDatabase', 'database', bits => _.head(bits)),
    config => compile(config, bits, 'loadSchema', 'schema', bits => syncSchema(config, bits)),
    config => compile(config, bits, 'loadRoutes', 'routes'),
    config => compile(config, bits, 'initializeServer', 'server'),
  ])({});
};

// other exports
export * from './constants';
export * from './log';
export * from './execute_series';
export * from './timer';
